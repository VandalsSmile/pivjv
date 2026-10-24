// Process-local chat limits. This site's lead guard is in-memory too (no Redis).
// A full instance recycle clears the counters. Fails closed on the "unknown"
// IP bucket so a missing address is not an unlimited lane.

const MESSAGE_BURST = { limit: 30, windowMs: 10 * 60 * 1000 };
const MESSAGE_DAILY = { limit: 150, windowMs: 24 * 60 * 60 * 1000 };
const ALERT_PER_CHAT = { limit: 3, windowMs: 24 * 60 * 60 * 1000 };
const ALERT_PER_IP = { limit: 6, windowMs: 24 * 60 * 60 * 1000 };

type Bucket = Map<string, number[]>;

const messagesBurst: Bucket = new Map();
const messagesDaily: Bucket = new Map();
const alertsByChat: Bucket = new Map();
const alertsByIp: Bucket = new Map();

function hit(bucket: Bucket, key: string, limit: number, windowMs: number, now: number): boolean {
  const fresh = (bucket.get(key) ?? []).filter((seenAt) => now - seenAt < windowMs);
  if (fresh.length >= limit) {
    bucket.set(key, fresh);
    return true;
  }
  fresh.push(now);
  bucket.set(key, fresh);
  return false;
}

export function isChatRateLimited(ip: string | null, now = Date.now()): boolean {
  const key = ip?.trim() || "unknown";
  return (
    hit(messagesBurst, key, MESSAGE_BURST.limit, MESSAGE_BURST.windowMs, now) ||
    hit(messagesDaily, key, MESSAGE_DAILY.limit, MESSAGE_DAILY.windowMs, now)
  );
}

/** True when this chat or IP has already sent the maximum number of staff/booking alerts. */
export function isStaffAlertLimited(
  chatId: string,
  ip: string | null,
  now = Date.now(),
): boolean {
  const perChat = hit(
    alertsByChat,
    chatId,
    ALERT_PER_CHAT.limit,
    ALERT_PER_CHAT.windowMs,
    now,
  );
  const perIp = hit(
    alertsByIp,
    ip?.trim() || "unknown",
    ALERT_PER_IP.limit,
    ALERT_PER_IP.windowMs,
    now,
  );
  return perChat || perIp;
}

export function resetIvChatRateLimitsForTests(): void {
  messagesBurst.clear();
  messagesDaily.clear();
  alertsByChat.clear();
  alertsByIp.clear();
}
