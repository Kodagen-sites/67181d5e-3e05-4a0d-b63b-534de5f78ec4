"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollCanvas from "@/components/ScrollCanvas";
import HeroScrollText, {
  type HeroChapter,
} from "@/components/motion/HeroScrollText";
import {
  FadeUp,
  TextReveal,
  StaggerChildren,
  CardTiltLayer,
  NumberCounter,
  MagneticButton,
} from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import framesManifest from "@/content/frames-manifest.json";

/**
 * ARCHETYPE F — Editorial / Minimal Type homepage (light, ink-citron).
 *
 * Dark cinematic scrub hero (frame sequence) with a 3-chapter HeroScrollText
 * overlay, then oversized-type editorial sections on cream. The hero wrapper
 * locally overrides --bg-color/--fg-color to ink/cream so ScrollCanvas's
 * letterbox + loader stay dark behind the footage.
 */

// Prefer real generated frames (uploaded → frameUrlTemplate, or local
// public/frames). Fall back to the configured count + local pattern so the
// page renders before assets exist.
const frameCount =
  framesManifest.frameCount > 0
    ? framesManifest.frameCount
    : siteConfig.scrollHero.frameCount;
const framePattern =
  framesManifest.frameUrlTemplate || "/frames/frame-{NNNN}.jpg";

export default function VideoHomepage() {
  const [progress, setProgress] = useState(0);

  const hc = siteConfig.heroChapters;
  // Inline literal so the >=3-chapter hero gate is statically verifiable.
  const chapters: HeroChapter[] = [
    {
      at: 0,
      eyebrow: hc[0].eyebrow,
      headlineLines: [...hc[0].headlineLines],
      subline: hc[0].subline,
      cta: (hc[0] as { cta?: { label: string; href: string } }).cta,
    },
    {
      at: 0.36,
      eyebrow: hc[1].eyebrow,
      headlineLines: [...hc[1].headlineLines],
      subline: hc[1].subline,
      cta: (hc[1] as { cta?: { label: string; href: string } }).cta,
    },
    {
      at: 0.7,
      eyebrow: hc[2].eyebrow,
      headlineLines: [...hc[2].headlineLines],
      subline: hc[2].subline,
      cta: (hc[2] as { cta?: { label: string; href: string } }).cta,
    },
  ];

  return (
    <main className="bg-bg">
      {/* ── Cinematic scrub hero ─────────────────────────────── */}
      <div
        style={
          {
            "--bg-color": "#1A1A24",
            "--fg-color": "#FCFBF4",
          } as React.CSSProperties
        }
      >
        <ScrollCanvas
          frameCount={frameCount}
          pattern={framePattern}
          scrollDistance={siteConfig.scrollHero.scrollDistance}
          loadingVariant={siteConfig.loadingVariant}
          loadingLabel={siteConfig.company.name}
          onProgress={setProgress}
        >
          <HeroScrollText
            progress={progress}
            chapters={chapters}
            position="bottom-left"
            textColor="#FCFBF4"
            accentColor="#E2E97E"
            accentTextColor="#1A1A24"
          />
        </ScrollCanvas>
      </div>

      {/* ── Services teaser ──────────────────────────────────── */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
              {siteConfig.servicesHeading}
            </div>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mb-14 max-w-3xl font-display text-4xl font-light leading-[1.0] text-ink md:text-6xl"
          >
            {siteConfig.tagline}
          </TextReveal>

          <StaggerChildren
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-5 md:grid-cols-2"
          >
            {siteConfig.services.map((svc, i) => (
              <CardTiltLayer key={svc.slug} intensity={0.18} lift={8} className="h-full">
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/40 p-7 transition-all hover:border-ink/30 hover:bg-white/70 md:p-9"
                >
                  <div className="mb-5 font-mono text-xs text-ink/40">
                    0{i + 1}
                  </div>
                  <h3 className="mb-3 font-display text-2xl text-ink md:text-3xl">
                    {svc.name}
                  </h3>
                  <p className="mb-6 max-w-md text-sm leading-relaxed text-ink/65">
                    {svc.description}
                  </p>
                  <span className="mt-auto inline-flex w-fit items-center gap-2 border-b border-citron pb-0.5 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-opacity group-hover:opacity-70">
                    Explore →
                  </span>
                </Link>
              </CardTiltLayer>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────────── */}
      <section className="border-y border-ink/10 bg-ink px-6 py-24 text-bg md:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-citron">
              {siteConfig.whyUs.heading}
            </div>
          </FadeUp>
          <StaggerChildren
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-10 md:grid-cols-2"
          >
            {siteConfig.whyUs.items.map((item) => (
              <div key={item.title} className="border-t border-bg/15 pt-6">
                <h3 className="mb-3 font-display text-2xl text-bg md:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-bg/70">
                  {item.description}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {siteConfig.stats.map((stat) => {
            const num = parseFloat(stat.value.replace(/[^0-9.]/g, ""));
            const suffix = stat.value.replace(/[0-9.]/g, "");
            return (
              <FadeUp key={stat.label} className="text-center">
                <div className="font-display text-4xl font-light text-ink md:text-6xl">
                  {isNaN(num) ? (
                    stat.value
                  ) : (
                    <NumberCounter to={num} suffix={suffix} />
                  )}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
                  {stat.label}
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-4xl rounded-3xl bg-ink px-8 py-16 text-center text-bg md:px-14 md:py-24">
          <TextReveal
            as="h2"
            className="mx-auto mb-6 max-w-2xl font-display text-3xl font-light leading-[1.05] text-bg md:text-5xl"
          >
            {siteConfig.ctaBlock.heading}
          </TextReveal>
          <p className="mx-auto mb-10 max-w-xl text-bg/70">
            {siteConfig.ctaBlock.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticButton
              as="a"
              href="/contact"
              className="min-h-[48px] rounded-full bg-citron px-8 py-4 font-display font-medium text-ink hover:brightness-105"
            >
              {siteConfig.cta.primary}
            </MagneticButton>
            <Link
              href="/work"
              className="min-h-[48px] rounded-full border border-bg/30 px-8 py-4 font-display font-medium text-bg transition-colors hover:bg-bg/5"
            >
              {siteConfig.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
