// Shared auth config for the admin gallery uploader.
// The username field from native HTTP Basic Auth is replaced with a custom
// password-only login form backed by this httpOnly session cookie.
export const UPLOAD_AUTH_COOKIE = "upload_auth";
export const UPLOAD_PASSWORD =
  process.env.BASIC_AUTH_PASSWORD || "2566926347";

// Opaque value stored in the httpOnly cookie once authenticated. The raw
// password is never written to the cookie.
export const UPLOAD_AUTH_TOKEN = `ok_${UPLOAD_PASSWORD}`;
