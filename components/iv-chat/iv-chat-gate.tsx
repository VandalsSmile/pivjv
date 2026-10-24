"use client";

import { useEffect, useState } from "react";
import { IvChatFallback, IvChatWidget } from "@/components/iv-chat/iv-chat-widget";
import { IV_CHAT_ENDPOINT } from "@/lib/iv-bot/config";

/**
 * Shows Ivey when the AI provider can be called. Otherwise a call/book
 * pair stays in the same corner so a missing key does not leave a dead widget.
 */
export function IvChatGate() {
  const [enabled, setEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (!cancelled) setEnabled((current) => (current === null ? false : current));
    }, 4000);

    fetch(IV_CHAT_ENDPOINT)
      .then((response) => response.json())
      .then((body: { enabled?: boolean }) => {
        if (!cancelled) setEnabled(body.enabled === true);
      })
      .catch(() => {
        if (!cancelled) setEnabled(false);
      });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  if (enabled === null) return null;
  if (!enabled) return <IvChatFallback />;
  return <IvChatWidget />;
}
