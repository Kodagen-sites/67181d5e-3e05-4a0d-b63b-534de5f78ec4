import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/content/site-config";
import { SEOHead } from "@/components/seo/SEOHead";
import PageHero from "@/components/PageHero";
import { sectionImage } from "@/lib/assets";
import { FadeUp, StaggerChildren, MagneticButton } from "@/components/motion";
import { serviceSchema } from "@/lib/seo/structured-data";

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const idx = siteConfig.services.findIndex((s) => s.slug === slug);
  const nextService =
    siteConfig.services[(idx + 1) % siteConfig.services.length];

  return (
    <>
      <SEOHead
        title={`${service.name} — ${siteConfig.company.name}`}
        description={service.description.slice(0, 158)}
        path={`/services/${slug}`}
        jsonLd={serviceSchema({
          service,
          provider: { ...siteConfig.company, url: siteConfig.seo.siteUrl },
          areaServed: "London, UK",
          serviceUrl: `${siteConfig.seo.siteUrl}/services/${slug}`,
        })}
      />

      <PageHero
        eyebrow="Service"
        title={service.name}
        image={sectionImage(`service-${slug}`, `${service.name} film production`)}
        intro={service.description}
      />

      <main className="bg-bg px-6 py-24 md:py-28">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <Link
              href="/services"
              className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/55 hover:text-ink"
            >
              ← All services
            </Link>
          </FadeUp>

          {/* What's included */}
          <section className="mb-20">
            <FadeUp>
              <h2 className="mb-8 font-display text-2xl text-ink md:text-3xl">
                What&rsquo;s included
              </h2>
            </FadeUp>
            <StaggerChildren staggerDelay={0.06} className="space-y-3">
              {service.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white/40 p-4 transition-colors hover:border-ink/30"
                >
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-citron" />
                  <span className="text-ink/85">{h}</span>
                </div>
              ))}
            </StaggerChildren>
          </section>

          {/* How it works */}
          <section className="mb-20">
            <FadeUp>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/55">
                Our approach
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mb-10 font-display text-3xl font-light leading-[1.05] text-ink md:text-4xl">
                How it works
              </h2>
            </FadeUp>
            <StaggerChildren
              staggerDelay={0.06}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              {siteConfig.process.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-ink/10 bg-white/40 p-6 transition-colors hover:border-ink/30 md:p-7"
                >
                  <div className="mb-3 font-mono text-sm text-ink/45">
                    0{step.step}
                  </div>
                  <h3 className="mb-2 font-display text-xl text-ink">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/65">
                    {step.description}
                  </p>
                </div>
              ))}
            </StaggerChildren>
          </section>

          {/* CTA + next */}
          <FadeUp>
            <div className="flex flex-col gap-3 sm:flex-row">
              <MagneticButton
                as="a"
                href="/contact"
                className="min-h-[48px] rounded-full bg-ink px-8 py-4 text-center font-display font-medium text-bg hover:brightness-110"
              >
                Start a project →
              </MagneticButton>
              <Link
                href={`/services/${nextService.slug}`}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-ink/20 px-8 py-4 text-center font-display font-medium text-ink transition-colors hover:bg-ink/5"
              >
                Next: {nextService.name} →
              </Link>
            </div>
          </FadeUp>
        </div>
      </main>
    </>
  );
}
