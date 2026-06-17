"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock, AlertCircle } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/upload-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Incorrect password.");
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Incorrect password.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-border bg-white p-8 shadow-sm">
      <div className="mb-6 flex flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
          <Lock className="h-6 w-6" />
        </div>
        <h2 className="text-xl font-bold">Enter Password</h2>
        <p className="mt-1 text-sm text-foreground-muted">
          This area is password protected.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="upload-password" className="sr-only">
            Password
          </label>
          <input
            id="upload-password"
            type="password"
            autoFocus
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg border border-border-dark bg-white px-4 py-3 text-foreground outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 rounded-lg bg-error/10 px-4 py-3 text-sm text-error">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !password}
          className="btn-primary w-full justify-center disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing in…
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
}
