"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

interface SubmittedInquiry {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const announcerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState<SubmittedInquiry | null>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const controls = Array.from(
      form.querySelectorAll<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >("input, select, textarea")
    );

    const flagged = new WeakSet<Element>();
    const announced = new WeakSet<Element>();
    let announceTimer: ReturnType<typeof setTimeout> | undefined;
    let announcedField: Element | null = null;

    const linkError = (el: HTMLElement, shown: boolean) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const ids = (el.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter((id) => id && id !== errorId);
      if (shown) ids.push(errorId);
      if (ids.length) el.setAttribute("aria-describedby", ids.join(" "));
      else el.removeAttribute("aria-describedby");
    };

    const announceError = (el: HTMLElement) => {
      const errorId = el.dataset.error;
      if (!errorId || !announcerRef.current) return;
      const errorNode = document.getElementById(errorId);
      if (!errorNode) return;
      const text = errorNode.textContent?.replace(/\s+/g, " ").trim() || "";
      clearTimeout(announceTimer);
      announcerRef.current.textContent = "";
      announcedField = el;
      announceTimer = setTimeout(() => {
        if (announcerRef.current) {
          announcerRef.current.textContent = text;
        }
      }, 400);
    };

    const syncAria = (el: HTMLElement, shouldAnnounce = false) => {
      if (!el.matches("input, select, textarea")) return;
      const control = el as
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement;
      const supportsUserInvalid = CSS.supports("selector(:user-invalid)");
      const invalid = supportsUserInvalid
        ? control.matches(":user-invalid")
        : control.classList.contains("user-invalid-fallback");

      if (invalid) {
        if (shouldAnnounce && !announced.has(el)) {
          announceError(el);
          announced.add(el);
        }
        el.setAttribute("aria-invalid", "true");
        linkError(el, true);
        flagged.add(el);
      } else if (
        flagged.has(el) ||
        el.getAttribute("aria-invalid") !== "true"
      ) {
        el.setAttribute("aria-invalid", "false");
        linkError(el, false);
        flagged.delete(el);
        announced.delete(el);
        if (announcedField === el && announcerRef.current) {
          clearTimeout(announceTimer);
          announcerRef.current.textContent = "";
        }
      }
    };

    for (const control of controls) {
      control.setAttribute("aria-invalid", "false");
    }

    const supportsUserInvalid = CSS.supports("selector(:user-invalid)");

    const onBlur = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!supportsUserInvalid && "validity" in target) {
        const ctrl = target as HTMLInputElement;
        ctrl.classList.toggle("user-invalid-fallback", !ctrl.validity.valid);
        ctrl.classList.toggle("user-valid-fallback", ctrl.validity.valid);
      }
      syncAria(target, true);
    };

    const onInput = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!supportsUserInvalid && "validity" in target) {
        const ctrl = target as HTMLInputElement;
        if (ctrl.classList.contains("user-invalid-fallback") || ctrl.classList.contains("user-valid-fallback")) {
          ctrl.classList.toggle("user-invalid-fallback", !ctrl.validity.valid);
          ctrl.classList.toggle("user-valid-fallback", ctrl.validity.valid);
        }
      }
      if (target.hasAttribute("aria-invalid")) {
        syncAria(target);
      }
    };

    const onInvalid = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!supportsUserInvalid) {
        target.classList.add("user-invalid-fallback");
        target.classList.remove("user-valid-fallback");
      }
      announced.add(target);
      syncAria(target);
    };

    form.addEventListener("blur", onBlur, true);
    form.addEventListener("input", onInput);
    form.addEventListener("invalid", onInvalid, true);

    return () => {
      clearTimeout(announceTimer);
      form.removeEventListener("blur", onBlur, true);
      form.removeEventListener("input", onInput);
      form.removeEventListener("invalid", onInvalid, true);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(":invalid");
      firstInvalid?.focus();
      return;
    }

    const data = new FormData(form);
    setSubmitted({
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      topic: String(data.get("topic") || "General Inquiry"),
      message: String(data.get("message") || "").trim(),
    });
    form.reset();
  };

  if (submitted) {
    const mailtoSubject = encodeURIComponent(
      `[BVEF Inquiry] ${submitted.topic} — ${submitted.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${submitted.name}\nEmail: ${submitted.email}\nTopic: ${submitted.topic}\n\nMessage:\n${submitted.message}`
    );

    return (
      <div className="rounded-2xl border border-gold-500/40 bg-gold-100/70 p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-bold text-navy-900">
          Thank You, {submitted.name}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-text-body">
          Your inquiry has been prepared. Because our automated email backend is
          being finalized for launch, you can also send this message directly
          via your email client so it reaches our team right away.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${siteConfig.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
            className="inline-flex items-center justify-center rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-surface-white transition-colors hover:bg-navy-950"
          >
            Open in Email App
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(null)}
            className="inline-flex items-center justify-center rounded-lg border border-border-subtle bg-surface-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-surface-ivory"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border-subtle bg-surface-white p-6 shadow-xs sm:p-8"
    >
      <div ref={announcerRef} aria-live="polite" className="sr-only" />

      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-semibold text-navy-900"
        >
          Full Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          minLength={2}
          autoComplete="name"
          data-error="contact-name-error"
          className="form-control mt-1.5 block w-full rounded-lg border border-border-subtle bg-surface-white px-3.5 py-2.5 text-sm text-navy-950"
          placeholder="Your name"
        />
        <div id="contact-name-error" className="field-error-msg">
          <span role="img" aria-label="Error">
            !
          </span>
          <span>Please enter your full name (at least 2 characters).</span>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-semibold text-navy-900"
        >
          Email Address
        </label>
        <span id="contact-email-hint" className="mt-0.5 block text-xs text-slate-500">
          Format: you@example.com
        </span>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-describedby="contact-email-hint"
          data-error="contact-email-error"
          className="form-control mt-1.5 block w-full rounded-lg border border-border-subtle bg-surface-white px-3.5 py-2.5 text-sm text-navy-950"
          placeholder="you@example.com"
        />
        <div id="contact-email-error" className="field-error-msg">
          <span role="img" aria-label="Error">
            !
          </span>
          <span>Enter a valid email address in the format you@example.com.</span>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="block text-sm font-semibold text-navy-900"
        >
          Inquiry Topic
        </label>
        <select
          id="contact-topic"
          name="topic"
          defaultValue="Sponsor a School or Classroom"
          className="form-control mt-1.5 block w-full rounded-lg border border-border-subtle bg-surface-white px-3.5 py-2.5 text-sm text-navy-950"
        >
          <option value="Sponsor a School or Classroom">
            Sponsor a School or Classroom
          </option>
          <option value="Donation & Bank Transfer Info">
            Donation &amp; Bank Transfer Info
          </option>
          <option value="Education Partnership">Education Partnership</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-navy-900"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          minLength={10}
          data-error="contact-message-error"
          className="form-control mt-1.5 block w-full rounded-lg border border-border-subtle bg-surface-white px-3.5 py-2.5 text-sm text-navy-950"
          placeholder="Tell us how you would like to connect with Basho Valley Education Foundation..."
        />
        <div id="contact-message-error" className="field-error-msg">
          <span role="img" aria-label="Error">
            !
          </span>
          <span>Please write a message of at least 10 characters.</span>
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-xs transition-colors hover:bg-gold-600 sm:w-auto"
      >
        Prepare Inquiry
      </button>
    </form>
  );
}
