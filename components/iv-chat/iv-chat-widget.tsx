"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { ArrowUp, CalendarCheck, CheckCircle2, MessageCircle, Phone, X } from "lucide-react";
import { issueLeadToken } from "@/app/actions/lead-token";
import { HoneypotField, readHoneypotValue } from "@/components/honeypot-field";
import { ChatMarkdown } from "@/components/iv-chat/chat-markdown";
import { IveyAvatar } from "@/components/iv-chat/ivey-avatar";
import { CONTACT, PRICING } from "@/lib/constants";
import {
  IV_BOT_NAME,
  IV_CHAT_ENDPOINT,
  IV_CHAT_LEAD_EVENT_KEY,
  IV_CHAT_LIMITS,
  IV_CHAT_QUICK_REPLIES,
  IV_CHAT_TEASER_KEY,
} from "@/lib/iv-bot/config";
import { captureAttribution, fireLeadConversion } from "@/lib/tracking";

const GREETING: UIMessage = {
  id: "iv-greeting",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: `Hi! I'm ${IV_BOT_NAME}, the virtual concierge for Prime IV in Huntsville (Jones Valley). I can answer questions about our drips, pricing, and hours — and book your visit right here. First visit? The intro drip is **$${PRICING.introOffer.price}** with code **${PRICING.introOffer.promoCode}**. How can I help?`,
    },
  ],
};

const TEASER_DELAY_MS = 12000;
const DECOY_ID = "iv-chat-office";

function chatLauncherPosition(pathname: string, gap: "gap-2" | "gap-3") {
  // Intro heroes keep the price and claim button in the top of the first screen.
  // On a phone, shift the bubble left so it does not sit on the right end of
  // that row. Lifting it (a higher bottom offset) parks it on the button on
  // short screens, so it stays along the bottom edge.
  const offerLanding =
    pathname === "/intro-offer" ||
    pathname === "/book-intro-offer" ||
    pathname === "/nad-niagen-special";
  const corner = offerLanding
    ? "bottom-4 left-4 right-auto items-start sm:bottom-6 sm:left-auto sm:right-6 sm:items-end"
    : "bottom-4 right-4 items-end sm:bottom-6 sm:right-6";
  return `fixed z-[60] flex flex-col ${corner} ${gap}`;
}

function messageText(message: UIMessage) {
  return message.parts.map((part) => (part.type === "text" ? part.text : "")).join("");
}

function toolSucceeded(message: UIMessage, toolType: string) {
  return message.parts.some((part) => {
    if (part.type !== toolType || !("state" in part) || part.state !== "output-available") {
      return false;
    }
    const output = "output" in part ? (part.output as { ok?: boolean } | undefined) : undefined;
    return output?.ok === true;
  });
}

function toolCallId(part: UIMessage["parts"][number]) {
  return "toolCallId" in part && typeof part.toolCallId === "string" ? part.toolCallId : "";
}

export function IvChatFallback() {
  const pathname = usePathname();
  return (
    <div className={chatLauncherPosition(pathname, "gap-2")}>
      <a
        href={`tel:${CONTACT.phoneClean}`}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-xl"
      >
        <Phone className="size-4" aria-hidden="true" />
        Call {CONTACT.phone}
      </a>
      <Link
        href="/book-intro-offer"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white shadow-xl"
      >
        <CalendarCheck className="size-4" aria-hidden="true" />
        Book online
      </Link>
    </div>
  );
}

export function IvChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [input, setInput] = useState("");
  const [officeExtension, setOfficeExtension] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const pathRef = useRef(pathname);
  const tokenRef = useRef("");
  const firedLeads = useRef(new Set<string>());
  pathRef.current = pathname;

  useEffect(() => {
    let cancelled = false;
    issueLeadToken()
      .then((token) => {
        if (!cancelled && token) tokenRef.current = token;
      })
      .catch(() => {
        tokenRef.current = "";
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const [transport] = useState(
    () =>
      new DefaultChatTransport({
        api: IV_CHAT_ENDPOINT,
        prepareSendMessagesRequest: ({ id, messages }) => {
          captureAttribution();
          return {
            body: {
              id,
              pagePath: pathRef.current,
              formToken: tokenRef.current,
              officeExtension: readHoneypotValue(DECOY_ID) || officeExtension,
              messages: messages.filter((message) => message.id !== GREETING.id),
            },
          };
        },
      }),
  );

  const { messages, sendMessage, status, error, regenerate } = useChat({
    transport,
    messages: [GREETING],
  });

  const busy = status === "submitted" || status === "streaming";
  const atLimit = messages.length >= IV_CHAT_LIMITS.maxMessagesPerChat;
  const userHasSpoken = messages.some((message) => message.role === "user");
  const showTyping =
    status === "submitted" || (status === "streaming" && !messageText(messages.at(-1)!).trim());

  useEffect(() => {
    if (sessionStorage.getItem(IV_CHAT_TEASER_KEY)) return;
    const timer = window.setTimeout(() => {
      setTeaser(true);
      sessionStorage.setItem(IV_CHAT_TEASER_KEY, "1");
    }, TEASER_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    let seen: string[] = [];
    try {
      seen = JSON.parse(sessionStorage.getItem(IV_CHAT_LEAD_EVENT_KEY) || "[]") as string[];
    } catch {
      seen = [];
    }
    for (const id of seen) firedLeads.current.add(id);

    for (const message of messages) {
      for (const part of message.parts) {
        const booking = part.type === "tool-requestBooking";
        const staff = part.type === "tool-notifyStaff";
        if (!booking && !staff) continue;
        if (!("state" in part) || part.state !== "output-available") continue;
        const output = "output" in part ? (part.output as { ok?: boolean } | undefined) : undefined;
        if (output?.ok !== true) continue;
        const id = toolCallId(part);
        if (!id || firedLeads.current.has(id)) continue;
        firedLeads.current.add(id);
        const next = [...firedLeads.current];
        sessionStorage.setItem(IV_CHAT_LEAD_EVENT_KEY, JSON.stringify(next.slice(-20)));
        const eventId = crypto.randomUUID();
        window.dataLayer = window.dataLayer || [];
        const gtag =
          typeof window.gtag === "function"
            ? window.gtag
            : (...args: unknown[]) => {
                window.dataLayer?.push(args);
              };
        const fbq =
          typeof window.fbq === "function"
            ? window.fbq
            : () => {
                // Pixel is loaded in the root layout.
              };
        fireLeadConversion(
          {
            form_name: booking ? "IV Chatbot Booking" : "IV Chatbot",
            page_path: pathname,
          },
          {
            gtag,
            fbq,
            dataLayer: window.dataLayer,
            eventId,
          },
        );
      }
    }
  }, [messages, pathname]);

  function openChat() {
    setTeaser(false);
    setOpen(true);
  }

  function send(text: string) {
    const trimmed = text.trim().slice(0, IV_CHAT_LIMITS.maxMessageChars);
    if (!trimmed || busy || atLimit) return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    send(input);
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey) return;
    if (event.nativeEvent.isComposing || event.keyCode === 229) return;
    event.preventDefault();
    send(input);
  }

  return (
    <>
      {!open && (
        <div className={chatLauncherPosition(pathname, "gap-3")}>
          {teaser && (
            <div className="relative max-w-[260px] rounded-2xl border border-border bg-white p-4 pr-9 text-sm text-foreground shadow-xl">
              <button
                type="button"
                onClick={() => setTeaser(false)}
                className="absolute right-2 top-2 rounded-full p-1 text-foreground-muted hover:bg-background-alt hover:text-foreground"
                aria-label="Dismiss message"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={openChat} className="flex items-start gap-3 text-left">
                <IveyAvatar size={40} />
                <span>
                  <span className="font-semibold">{`Hi, I'm ${IV_BOT_NAME}!`}</span> I can book your $
                  {PRICING.introOffer.price} intro drip right here, or answer any questions.
                </span>
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={openChat}
            className="group flex items-center gap-2 rounded-full bg-primary py-2 pl-2 pr-5 text-white shadow-xl ring-4 ring-primary/15 transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-secondary"
            aria-label={`Chat with ${IV_BOT_NAME}, our virtual concierge`}
          >
            <span className="relative">
              <IveyAvatar size={40} className="ring-2 ring-white/80" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-400 ring-2 ring-primary" aria-hidden="true" />
            </span>
            <span className="flex items-center gap-1.5 text-sm font-semibold">
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat &amp; book
            </span>
          </button>
        </div>
      )}

      {open && (
        <section
          role="dialog"
          aria-modal="false"
          aria-label={`Chat with ${IV_BOT_NAME}`}
          className="fixed inset-0 z-[80] flex flex-col bg-white sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[min(640px,calc(100vh-3rem))] sm:w-[400px] sm:overflow-hidden sm:rounded-2xl sm:border sm:border-border sm:shadow-2xl"
        >
          <header className="bg-primary px-4 pb-4 pt-4 text-white">
            <div className="flex items-center gap-3">
              <IveyAvatar size={44} className="ring-2 ring-white/80" />
              <div className="min-w-0 flex-1">
                <p className="font-heading text-base font-semibold leading-tight">
                  {IV_BOT_NAME} · Prime IV Huntsville
                </p>
                <p className="text-xs text-white/75">Virtual concierge · replies instantly</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={`tel:${CONTACT.phoneClean}`}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/20"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call to book
              </a>
              <Link
                href="/book-intro-offer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white hover:bg-accent-dark"
              >
                <CalendarCheck className="size-4" aria-hidden="true" />
                Book online
              </Link>
            </div>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-background-alt px-4 py-4" aria-live="polite">
            {messages.map((message) => {
              const text = messageText(message);
              const booked = toolSucceeded(message, "tool-requestBooking");
              const notified = toolSucceeded(message, "tool-notifyStaff");
              const chip = booked ? "Booking request sent" : notified ? "Our team has been notified" : null;
              if (!text.trim() && !chip) return null;
              const isUser = message.role === "user";
              return (
                <div key={message.id} className={`flex flex-col gap-2 ${isUser ? "items-end" : "items-start pl-9"}`}>
                  {chip && (
                    <p className="flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-primary">
                      <CheckCircle2 className="size-3.5 text-secondary" aria-hidden="true" />
                      {chip}
                    </p>
                  )}
                  {text.trim() && (
                    <div className="relative max-w-[85%]">
                      {!isUser && (
                        <span className="absolute -left-9 bottom-0" aria-hidden="true">
                          <IveyAvatar size={28} />
                        </span>
                      )}
                      <div
                        className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          isUser
                            ? "rounded-br-sm bg-primary text-white"
                            : "rounded-bl-sm border border-border bg-white text-foreground"
                        }`}
                      >
                        {isUser ? <p className="whitespace-pre-wrap">{text}</p> : <ChatMarkdown text={text} />}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {showTyping && (
              <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm border border-border bg-white px-4 py-3">
                <span className="sr-only">{`${IV_BOT_NAME} is typing`}</span>
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="size-1.5 animate-bounce rounded-full bg-foreground-muted"
                    style={{ animationDelay: `${delay}ms` }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-foreground">
                <p>
                  Sorry, I&apos;m having trouble right now. Please call us at{" "}
                  <a href={`tel:${CONTACT.phoneClean}`} className="font-semibold text-secondary underline">
                    {CONTACT.phone}
                  </a>{" "}
                  or{" "}
                  <Link href="/book-intro-offer" className="font-semibold text-secondary underline">
                    book online
                  </Link>
                  .
                </p>
                <button type="button" onClick={() => regenerate()} className="mt-2 text-xs font-semibold text-primary underline">
                  Try again
                </button>
              </div>
            )}

            {!userHasSpoken && (
              <div className="flex flex-wrap gap-2 pt-1">
                {IV_CHAT_QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => send(reply)}
                    className="rounded-full border border-secondary/40 bg-white px-3 py-1.5 text-xs font-medium text-primary hover:border-secondary hover:bg-secondary/10"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} className="relative border-t border-border bg-white p-3">
            <HoneypotField id={DECOY_ID} value={officeExtension} onChange={setOfficeExtension} />
            {atLimit ? (
              <p className="px-1 py-2 text-center text-sm text-foreground-muted">
                Let&apos;s continue by phone:{" "}
                <a href={`tel:${CONTACT.phoneClean}`} className="font-semibold text-secondary underline">
                  {CONTACT.phone}
                </a>
              </p>
            ) : (
              <div className="flex items-end gap-2">
                <label htmlFor="iv-chat-input" className="sr-only">
                  {`Message ${IV_BOT_NAME}`}
                </label>
                <textarea
                  id="iv-chat-input"
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  maxLength={IV_CHAT_LIMITS.maxMessageChars}
                  placeholder="Ask a question or say “book me”…"
                  className="max-h-28 min-h-11 flex-1 resize-none rounded-xl border border-border bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-foreground-muted focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition hover:bg-primary-dark disabled:opacity-40"
                  aria-label="Send message"
                >
                  <ArrowUp className="size-5" aria-hidden="true" />
                </button>
              </div>
            )}
            <p className="mt-2 px-1 text-center text-[11px] leading-snug text-foreground-muted">
              {`${IV_BOT_NAME} is an AI assistant and can make mistakes. Not medical advice. In an emergency, call 911.`}
            </p>
          </form>
        </section>
      )}
    </>
  );
}
