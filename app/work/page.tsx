import { siteConfig } from "@/content/site-config";
import { SEOHead } from "@/components/seo/SEOHead";
import PageHero from "@/components/PageHero";
import { sectionImage } from "@/lib/assets";
import { StaggerChildren, CardTiltLayer } from "@/components/motion";

export default function WorkPage() {
  return (
    <>
      <SEOHead
        title={`Work — ${siteConfig.company.name}`}
        description={`Selected films and campaigns by ${siteConfig.company.name} — commercials, documentaries, features and branded content.`}
        path="/work"
      />

      <PageHero
        eyebrow="Selected Work"
        title={<>Films that lingered.</>}
        image={sectionImage("section-work", "cinema film still moody")}
      />

      <main className="bg-bg px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <StaggerChildren
            staggerDelay={0.1}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {siteConfig.work.map((c, i) => (
              <CardTiltLayer key={c.title} intensity={0.15} lift={8} className="group">
                <article className="overflow-hidden rounded-2xl border border-ink/10 bg-white/40 transition-all hover:border-ink/30 hover:bg-white/70">
                  <div
                    className="flex aspect-video items-end p-6"
                    style={{
                      backgroundImage: `url(${sectionImage(
                        `work-${i + 1}`,
                        `${c.service} film still`,
                      )})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span className="rounded-full bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-bg">
                      {c.service}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h2 className="font-display text-2xl text-ink transition-colors group-hover:text-ink/70">
                        {c.title}
                      </h2>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
                        {c.client}
                      </span>
                    </div>
                    <p className="text-sm text-ink/65">{c.result}</p>
                  </div>
                </article>
              </CardTiltLayer>
            ))}
          </StaggerChildren>
        </div>
      </main>
    </>
  );
}
