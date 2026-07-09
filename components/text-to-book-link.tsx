import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/constants";

type TextToBookLinkProps = {
  className?: string;
  iconClassName?: string;
  showNumber?: boolean;
  showIcon?: boolean;
  children?: React.ReactNode;
};

export function TextToBookLink({
  className,
  iconClassName = "w-4 h-4",
  showNumber = false,
  showIcon = true,
  children,
}: TextToBookLinkProps) {
  return (
    <Link
      href={`sms:${CONTACT.textToBookClean}`}
      className={cn("inline-flex items-center gap-2", className)}
    >
      {showIcon && (
        <MessageCircle className={iconClassName} aria-hidden="true" />
      )}
      {children ?? (
        <>
          Text to book
          {showNumber && (
            <span className="whitespace-nowrap">{CONTACT.textToBook}</span>
          )}
        </>
      )}
    </Link>
  );
}
