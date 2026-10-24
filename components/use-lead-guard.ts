"use client";

import { useEffect, useRef, useState } from "react";
import { issueLeadToken } from "@/app/actions/lead-token";
import { readHoneypotValue } from "@/components/honeypot-field";

export const LEAD_GUARD_UNAVAILABLE_MESSAGE =
  "Something went wrong. Please refresh the page and try again, or call us.";

export type LeadSubmissionGuard = {
  formToken: string;
  officeExtension: string;
};

/**
 * Fetches the server-issued submit token when the form mounts and holds the
 * decoy field. The token is not minted at submit time — that would always
 * look too fast.
 */
export function useLeadGuard(fieldId: string) {
  const [officeExtension, setOfficeExtensionState] = useState("");
  const officeRef = useRef("");
  const tokenRef = useRef("");
  const pendingRef = useRef<Promise<string> | null>(null);
  const fieldIdRef = useRef(fieldId);
  fieldIdRef.current = fieldId;

  useEffect(() => {
    let cancelled = false;
    pendingRef.current = issueLeadToken()
      .then((token) => {
        if (!cancelled && token) tokenRef.current = token;
        return cancelled ? "" : token;
      })
      .catch(() => "");
    return () => {
      cancelled = true;
    };
  }, []);

  const setOfficeExtension = (value: string) => {
    officeRef.current = value;
    setOfficeExtensionState(value);
  };

  function getOfficeExtension(): string {
    const fromDom = readHoneypotValue(fieldIdRef.current).trim();
    if (fromDom) return fromDom;
    return officeRef.current.trim();
  }

  async function getToken(): Promise<string> {
    if (tokenRef.current) return tokenRef.current;
    if (!pendingRef.current) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    if (pendingRef.current) await pendingRef.current;
    return tokenRef.current;
  }

  async function readSubmissionGuard(): Promise<LeadSubmissionGuard | null> {
    const formToken = await getToken();
    if (!formToken) return null;
    return { formToken, officeExtension: getOfficeExtension() };
  }

  return {
    officeExtension,
    setOfficeExtension,
    readSubmissionGuard,
  };
}
