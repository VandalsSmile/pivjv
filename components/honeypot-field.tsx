"use client";

interface HoneypotFieldProps {
  /** Unique id so multiple forms on the same page don't collide. */
  id: string;
  value: string;
  onChange: (value: string) => void;
}

/**
 * A hidden field that real users never see or fill in. Bots that
 * auto-fill every input will populate it, letting the server silently
 * discard the submission. Kept out of the accessibility tree and tab order.
 */
export function HoneypotField({ id, value, onChange }: HoneypotFieldProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden"
      style={{ opacity: 0 }}
    >
      <label htmlFor={id}>Leave this field empty</label>
      <input
        type="text"
        id={id}
        name={id}
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
