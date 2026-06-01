"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { FadeUp, StaggerChildren, MagneticButton } from "@/components/motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New project inquiry from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${siteConfig.company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const field =
    "w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-3 text-ink placeholder-ink/35 focus:border-ink focus:outline-none";
  const label =
    "mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink/55";

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Form */}
      <FadeUp className="lg:col-span-2">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-ink/10 bg-white/40 p-8"
        >
          <StaggerChildren staggerDelay={0.05} className="space-y-5">
            <div>
              <label className={label}>Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={field}
                placeholder="Your name"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className={label}>Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={field}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className={label}>Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className={field}
                  placeholder="Production / brand"
                />
              </div>
            </div>

            <div>
              <label className={label}>Project details</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`${field} resize-y`}
                placeholder="Tell us what you're trying to say on screen…"
              />
            </div>

            <MagneticButton
              as="button"
              className="min-h-[48px] w-full rounded-full bg-ink px-8 py-4 font-display font-medium text-bg transition-all hover:brightness-110"
              onClick={() => {
                const form = document.querySelector("form") as HTMLFormElement;
                form?.requestSubmit();
              }}
            >
              {submitted ? "Email opened — send when ready" : "Send message →"}
            </MagneticButton>

            <p className="text-center font-mono text-[10px] text-ink/40">
              This form opens your email client. Wire to a real backend
              (Resend / Formspree) before launch.
            </p>
          </StaggerChildren>
        </form>
      </FadeUp>

      {/* Details */}
      <div className="space-y-4">
        <FadeUp delay={0.1}>
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink/55">
              Direct
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-ink/60" />
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-sm text-ink hover:underline"
                >
                  {siteConfig.company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-ink/60" />
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="text-sm text-ink hover:underline"
                >
                  {siteConfig.company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-ink/60" />
                <span className="text-sm text-ink">
                  {siteConfig.company.location}
                </span>
              </li>
            </ul>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink/55">
              What to expect
            </div>
            <ul className="space-y-2 text-sm text-ink/70">
              <li>• Response within one business day</li>
              <li>• A short discovery call</li>
              <li>• A treatment-led point of view</li>
              <li>• Honest timelines &amp; budgets</li>
            </ul>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
