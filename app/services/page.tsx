import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { SEOHead } from "@/components/seo/SEOHead";
import PageHero from "@/components/PageHero";
import { sectionImage } from "@/lib/assets";
import {
  FadeUp,
  StaggerChildren,
  CardTiltLayer,
  MagneticButton,
} from "@/components/motion";

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title={`Services — ${siteConfig.company.name}`}
        description={siteConfig.company.description.slice(0, 158)}
        path="/services"
      />

      <PageHero
        eyebrow={siteConfig.servicesHeading}
        title={<>What we make.</>}
        image={sectionImage("section-services", "film set cinema camera")}
        intro={siteConfig.company.description}
      />

      <main className="bg-bg px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <StaggerChildren
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2"
          >
            {siteConfig.services.map((svc) => (
              <CardTiltLayer key={svc.slug} intensity={0.22} lift={10} className="h-full">
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/40 p-7 transition-all hover:border-ink/30 hover:bg-white/70 md:p-9"
                >
                  <h2 className="mb-3 font-display text-2xl text-ink md:text-3xl">
                    {svc.name}
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-ink/65">
                    {svc.description}
                  </p>
                  <ul className="mb-6 space-y-1.5">
                    {svc.highlights.slice(0, 3).map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs text-ink/60"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-citron" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex w-fit items-center gap-2 border-b border-citron pb-0.5 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-opacity group-hover:opacity-70">
                    Learn more →
                  </span>
                </Link>
              </CardTiltLayer>
            ))}
          </StaggerChildren>

          <FadeUp>
            <div className="mt-24 text-center">
              <MagneticButton
                as="a"
                href="/contact"
                className="min-h-[48px] rounded-full bg-ink px-8 py-4 font-display font-medium text-bg hover:brightness-110"
              >
                {siteConfig.cta.primary}
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </main>
    </>
  );
}
