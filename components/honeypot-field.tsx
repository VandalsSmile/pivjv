"use client";

/** Plausible decoy name. Bots that fill every input populate it; the server rejects a non-empty value. */
export const LEAD_DECOY_NAME = "officeExtension";

interface HoneypotFieldProps {
  /** Unique id so multiple forms on the same page don't collide. */
  id: string;
  value: string;
  onChange: (value: string) => void;
}

/**
 * Off-screen decoy. Real visitors never see it, tab to it, or have it
 * announced. Autofill tools are asked to skip it. A value here means the
 * submission should be dropped.
 */
export function HoneypotField({ id, value, onChange }: HoneypotFieldProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden"
      style={{ opacity: 0 }}
    >
      <label htmlFor={id}>Office extension</label>
      <input
        type="text"
        id={id}
        name={LEAD_DECOY_NAME}
        tabIndex={-1}
        autoComplete="off"
        autoCapitalize="none"
        spellCheck={false}
        aria-hidden="true"
        data-1p-ignore="true"
        data-lpignore="true"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

/** Read the decoy from the DOM in case a bot set the value without a React change event. */
export function readHoneypotValue(id: string): string {
  if (typeof document === "undefined") return "";
  const element = document.getElementById(id);
  if (!(element instanceof HTMLInputElement)) return "";
  return element.value;
}
