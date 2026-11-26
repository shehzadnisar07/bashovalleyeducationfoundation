"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRightIcon, CheckIcon, MailIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";

const INQUIRY_TOPICS = [
  "Sponsor a Three-Teacher STEM Team",
  "Equip a Digital Classroom Kit",
  "Direct Trust Bank Transfer Details",
  "Education Partnership",
  "Educator or Volunteer Interest",
  "General Inquiry",
] as const;

interface SubmittedInquiry {
  name: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const topicParam = searchParams.get("topic");
  const initialTopic =
    topicParam &&
    INQUIRY_TOPICS.includes(topicParam as (typeof INQUIRY_TOPICS)[number])
      ? topicParam
      : INQUIRY_TOPICS[0];

  const formRef = useRef<HTMLFormElement>(null);
  const announcerRef = useRef<HTMLDivElement>(null);
  const [userSelectedTopic, setUserSelectedTopic] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<SubmittedInquiry | null>(null);
  const selectedTopic = userSelectedTopic ?? initialTopic;

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
        if (
          ctrl.classList.contains("user-invalid-fallback") ||
          ctrl.classList.contains("user-valid-fallback")
        ) {
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
      organization: String(data.get("organization") || "").trim(),
      topic: String(data.get("topic") || INQUIRY_TOPICS[0]),
      message: String(data.get("message") || "").trim(),
    });
    form.reset();
  };

  if (submitted) {
    const mailtoSubject = encodeURIComponent(
      `[BVEF Inquiry] ${submitted.topic} — ${submitted.name}`
    );
    const orgLine = submitted.organization
      ? `Organization: ${submitted.organization}\n`
      : "";
    const mailtoBody = encodeURIComponent(
      `Name: ${submitted.name}\nEmail: ${submitted.email}\n${orgLine}Topic: ${submitted.topic}\n\nMessage:\n${submitted.message}`
    );

    return (
      <div className="rounded-xl border border-border-subtle bg-surface-white p-7 shadow-xs sm:p-10">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-saffron-100 text-saffron-700">
          <CheckIcon className="h-5 w-5" />
        </div>
        <h2 className="type-subsection mt-5 text-spruce-950">
          Inquiry prepared for {submitted.name}
        </h2>
        <p className="type-body mt-3 max-w-[65ch] text-text-body">
          This website operates without an automated server-side mail relay. To
          deliver your inquiry directly to the Trust, open the pre-filled draft
          in your email application below.
        </p>

        <dl className="mt-6 space-y-2 rounded-md border border-border-subtle bg-surface-mist/50 p-4 text-xs sm:text-sm">
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-semibold text-spruce-950">Topic:</dt>
            <dd className="text-text-body">{submitted.topic}</dd>
          </div>
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-semibold text-spruce-950">Reply-to:</dt>
            <dd className="break-words text-text-body">{submitted.email}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${siteConfig.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
            className="type-btn inline-flex items-center justify-center gap-2 rounded-md bg-spruce-950 px-5 py-2.5 text-surface-white transition-colors hover:bg-spruce-900"
          >
            <MailIcon className="h-4 w-4" />
            <span>Open draft in email app</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(null)}
            className="type-btn inline-flex items-center justify-center rounded-md border border-border-subtle bg-surface-white px-5 py-2.5 text-spruce-950 transition-colors hover:bg-surface-mist"
          >
            Prepare another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-border-subtle bg-surface-white p-6 shadow-xs sm:p-10"
    >
      <div ref={announcerRef} aria-live="polite" className="sr-only" />

      <div className="border-b border-border-subtle pb-5">
        <h2 className="type-subsection text-spruce-950">
          Write to the Foundation
        </h2>
        <p className="type-body mt-1.5 text-slate-500">
          Complete the fields below to prepare a structured inquiry draft for
          BVEF&apos;s Trustees.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="type-label block font-semibold text-spruce-950"
          >
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            data-error="contact-name-error"
            className="form-control mt-1.5 block w-full rounded-md border border-border-subtle bg-surface-mist/40 px-3.5 py-2.5 text-base text-spruce-950 transition-colors focus:border-spruce-950 focus:bg-surface-white sm:text-sm"
            placeholder="Your full name"
          />
          <div id="contact-name-error" className="field-error-msg">
            <span>Enter your full name (at least 2 characters).</span>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="type-label block font-semibold text-spruce-950"
          >
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            data-error="contact-email-error"
            className="form-control mt-1.5 block w-full rounded-md border border-border-subtle bg-surface-mist/40 px-3.5 py-2.5 text-base text-spruce-950 transition-colors focus:border-spruce-950 focus:bg-surface-white sm:text-sm"
            placeholder="you@example.com"
          />
          <div id="contact-email-error" className="field-error-msg">
            <span>Enter a valid email address (e.g., you@example.com).</span>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-organization"
            className="type-label block font-semibold text-spruce-950"
          >
            Organization{" "}
            <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input
            id="contact-organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className="form-control mt-1.5 block w-full rounded-md border border-border-subtle bg-surface-mist/40 px-3.5 py-2.5 text-base text-spruce-950 transition-colors focus:border-spruce-950 focus:bg-surface-white sm:text-sm"
            placeholder="Foundation, school, or group"
          />
        </div>

        <div>
          <label
            htmlFor="contact-topic"
            className="type-label block font-semibold text-spruce-950"
          >
            Inquiry topic
          </label>
          <select
            id="contact-topic"
            name="topic"
            value={selectedTopic}
            onChange={(e) => setUserSelectedTopic(e.target.value)}
            className="form-control mt-1.5 block w-full rounded-md border border-border-subtle bg-surface-mist/40 px-3.5 py-2.5 text-base text-spruce-950 transition-colors focus:border-spruce-950 focus:bg-surface-white sm:text-sm"
          >
            {INQUIRY_TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="type-label block font-semibold text-spruce-950"
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
          className="form-control mt-1.5 block w-full rounded-md border border-border-subtle bg-surface-mist/40 px-3.5 py-2.5 text-base text-spruce-950 transition-colors focus:border-spruce-950 focus:bg-surface-white sm:text-sm"
          placeholder="Share how you would like to support or partner with Basho Valley Education Foundation..."
        />
        <div id="contact-message-error" className="field-error-msg">
          <span>Please write a message of at least 10 characters.</span>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 border-t border-border-subtle pt-5 sm:flex-row sm:items-center">
        <p className="type-label text-slate-500">
          Prepares a structured email draft; no data is stored on external
          servers.
        </p>
        <button
          type="submit"
          className="type-btn inline-flex w-full items-center justify-center gap-2 rounded-md bg-spruce-950 px-6 py-3 text-surface-white transition-colors hover:bg-spruce-900 sm:w-auto"
        >
          <span>Prepare inquiry draft</span>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
