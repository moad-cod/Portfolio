"use client";

import { useState } from "react";

type FormState = {
  email: string;
  message: string;
  name: string;
};

const initialFormState: FormState = {
  email: "",
  message: "",
  name: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const data = (await response.json()) as {
        error?: string;
        message?: string;
        success?: boolean;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setForm(initialFormState);
      setFeedback({
        message: data.message ?? "Message sent successfully.",
        type: "success",
      });
    } catch (error) {
      setFeedback({
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="mt-7 grid gap-4" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="name">
        Your name
      </label>
      <input
        autoComplete="name"
        className="field"
        disabled={isSending}
        id="name"
        name="name"
        onChange={(event) => updateField("name", event.target.value)}
        placeholder="Your name"
        required
        type="text"
        value={form.name}
      />
      <label className="sr-only" htmlFor="email">
        Your email
      </label>
      <input
        autoComplete="email"
        className="field"
        disabled={isSending}
        id="email"
        name="email"
        onChange={(event) => updateField("email", event.target.value)}
        placeholder="Your email"
        required
        type="email"
        value={form.email}
      />
      <label className="sr-only" htmlFor="message">
        Your message
      </label>
      <textarea
        className="field min-h-36 resize-y"
        disabled={isSending}
        id="message"
        name="message"
        onChange={(event) => updateField("message", event.target.value)}
        placeholder="Your message"
        required
        value={form.message}
      />
      {feedback ? (
        <p
          className={
            feedback.type === "success"
              ? "rounded-lg border border-amber/30 bg-amber/10 px-4 py-3 text-sm text-amber"
              : "rounded-lg border border-red-400/30 bg-red-950/30 px-4 py-3 text-sm text-red-200"
          }
          role="status"
        >
          {feedback.message}
        </p>
      ) : null}
      <button
        className="button-primary justify-center disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSending}
        type="submit"
      >
        {isSending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
