import { siteConfig } from "@/content/site-config";
import { SEOHead } from "@/components/seo/SEOHead";
import PageHero from "@/components/PageHero";
import { sectionImage } from "@/lib/assets";
import {
  FadeUp,
  StaggerChildren,
  CardTiltLayer,
  NumberCounter,
} from "@/components/motion";
import { organizationSchema } from "@/lib/seo/structured-data";

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title={`About — ${siteConfig.company.name}`}
        description={siteConfig.aboutStory.slice(0, 158)}
        path="/about"
        jsonLd={organizationSchema(
          { ...siteConfig.company, url: siteConfig.seo.siteUrl, socials: siteConfig.socials },
          siteConfig.seo.structuredData.address,
        )}
      />

      <PageHero
        eyebrow={`About ${siteConfig.company.name}`}
        title={siteConfig.aboutHeading}
        image={sectionImage("section-about", "film studio interior")}
      />

      <main className="bg-bg px-6 py-24 md:py-28">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <p className="max-w-3xl text-xl leading-relaxed text-ink/80">
              {siteConfig.aboutStory}
            </p>
          </FadeUp>

          {/* Stats */}
          <FadeUp>
            <section className="mt-20 grid grid-cols-2 gap-8 border-y border-ink/10 py-10 md:grid-cols-4">
              {siteConfig.stats.map((stat) => {
                const num = parseFloat(stat.value.replace(/[^0-9.]/g, ""));
                const suffix = stat.value.replace(/[0-9.]/g, "");
                return (
                  <div key={stat.label} className="text-center">
                    <div className="font-display text-4xl font-light text-ink md:text-5xl">
                      {isNaN(num) ? (
                        stat.value
                      ) : (
                        <NumberCounter to={num} suffix={suffix} />
                      )}
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </section>
          </FadeUp>

          {/* Values */}
          <section className="mt-20">
            <FadeUp>
              <h2 className="mb-10 font-display text-3xl font-light text-ink md:text-4xl">
                Our values
              </h2>
            </FadeUp>
            <StaggerChildren
              staggerDelay={0.08}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {siteConfig.values.map((v, i) => (
                <CardTiltLayer
                  key={v.title}
                  intensity={0.2}
                  lift={6}
                  className="rounded-2xl border border-ink/10 bg-white/40 p-6 transition-colors hover:border-ink/30 hover:bg-white/70"
                >
                  <div className="mb-2 font-mono text-xs text-ink/45">
                    0{i + 1}
                  </div>
                  <h3 className="mb-2 font-display text-xl text-ink">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/65">
                    {v.description}
                  </p>
                </CardTiltLayer>
              ))}
            </StaggerChildren>
          </section>

          {/* Manifesto */}
          <FadeUp distance={60}>
            <section className="mt-20 rounded-3xl border border-ink/10 bg-ink p-8 text-bg md:p-14">
              <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-citron">
                Our manifesto
              </div>
              <p className="font-display text-2xl italic leading-[1.3] text-bg/90 md:text-4xl">
                &ldquo;{siteConfig.manifesto}&rdquo;
              </p>
              <div className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-bg/55">
                — {siteConfig.company.name}
              </div>
            </section>
          </FadeUp>
        </div>
      </main>
    </>
  );
}
