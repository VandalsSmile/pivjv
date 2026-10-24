import Link from "next/link";
import type { ReactNode } from "react";

// Tiny renderer for the subset of markdown Ivey is instructed to use: **bold**,
// [label](href) links, and "- " bullet lists.

const INLINE_PATTERN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;

function safeHref(href: string) {
  if (href.startsWith("/") && !href.startsWith("//")) return { href, internal: true };
  if (/^(https:\/\/|tel:|sms:|mailto:)/i.test(href)) return { href, internal: false };
  return null;
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return text.split(INLINE_PATTERN).map((chunk, index) => {
    const key = `${keyPrefix}-${index}`;
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return <strong key={key}>{chunk.slice(2, -2)}</strong>;
    }
    const link = chunk.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const target = safeHref(link[2]);
      if (!target) return link[1];
      const className = "font-semibold text-secondary underline underline-offset-2 hover:text-secondary-dark";
      return target.internal ? (
        <Link key={key} href={target.href} className={className}>
          {link[1]}
        </Link>
      ) : (
        <a
          key={key}
          href={target.href}
          className={className}
          {...(target.href.startsWith("https") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {link[1]}
        </a>
      );
    }
    return chunk;
  });
}

export function ChatMarkdown({ text }: { text: string }) {
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];

  const flushBullets = () => {
    if (bullets.length === 0) return;
    const items = bullets;
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="ml-4 list-disc space-y-1">
        {items.map((item, index) => (
          <li key={index}>{renderInline(item, `li-${blocks.length}-${index}`)}</li>
        ))}
      </ul>,
    );
    bullets = [];
  };

  text.split("\n").forEach((rawLine) => {
    const line = rawLine.trim();
    const bullet = line.match(/^[-*•]\s+(.*)$/) ?? line.match(/^\d+[.)]\s+(.*)$/);
    if (bullet) {
      bullets.push(bullet[1]);
      return;
    }
    flushBullets();
    if (line) {
      blocks.push(
        <p key={`p-${blocks.length}`}>{renderInline(line, `p-${blocks.length}`)}</p>,
      );
    }
  });
  flushBullets();

  return <div className="space-y-2">{blocks}</div>;
}
