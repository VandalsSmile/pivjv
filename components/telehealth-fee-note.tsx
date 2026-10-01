import { TELEHEALTH_FEE_NOTE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TelehealthFeeNote({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs leading-relaxed text-pretty", className)}>
      {TELEHEALTH_FEE_NOTE}
    </p>
  );
}
