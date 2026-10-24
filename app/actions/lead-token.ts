"use server";

import { createLeadToken } from "@/lib/lead-guard";

/** Issued when a lead form mounts. The submit action rejects a missing, forged, or too-fast token. */
export async function issueLeadToken(): Promise<string> {
  return createLeadToken();
}
