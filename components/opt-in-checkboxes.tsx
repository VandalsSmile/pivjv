"use client";

interface OptInCheckboxesProps {
  /** Unique prefix so multiple forms on the same page don't collide. */
  idPrefix: string;
  textOptIn: boolean;
  emailOptIn: boolean;
  onTextChange: (checked: boolean) => void;
  onEmailChange: (checked: boolean) => void;
}

export function OptInCheckboxes({
  idPrefix,
  textOptIn,
  emailOptIn,
  onTextChange,
  onEmailChange,
}: OptInCheckboxesProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={`${idPrefix}-text-optin`}
        className="flex items-start gap-2 text-sm text-foreground-muted cursor-pointer"
      >
        <input
          type="checkbox"
          id={`${idPrefix}-text-optin`}
          checked={textOptIn}
          onChange={(e) => onTextChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
        />
        <span>Text me offers &amp; promotions</span>
      </label>
      <label
        htmlFor={`${idPrefix}-email-optin`}
        className="flex items-start gap-2 text-sm text-foreground-muted cursor-pointer"
      >
        <input
          type="checkbox"
          id={`${idPrefix}-email-optin`}
          checked={emailOptIn}
          onChange={(e) => onEmailChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary"
        />
        <span>Email me offers &amp; promotions</span>
      </label>
    </div>
  );
}
