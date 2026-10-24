import Image from "next/image";
import { IV_BOT_NAME } from "@/lib/iv-bot/config";

export function IveyAvatar({ size, className = "" }: { size: number; className?: string }) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full bg-primary ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/ivey-avatar.png"
        alt={`${IV_BOT_NAME}, virtual concierge`}
        fill
        sizes={`${size * 2}px`}
        className="object-cover object-[center_18%]"
      />
    </span>
  );
}
