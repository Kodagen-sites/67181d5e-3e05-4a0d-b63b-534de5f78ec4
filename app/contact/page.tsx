import { siteConfig } from "@/content/site-config";
import { SEOHead } from "@/components/seo/SEOHead";
import PageHero from "@/components/PageHero";
import { sectionImage } from "@/lib/assets";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title={`Contact — ${siteConfig.company.name}`}
        description={siteConfig.ctaBlock.description.slice(0, 158)}
        path="/contact"
      />

      <PageHero
        eyebrow="Get in touch"
        title={siteConfig.ctaBlock.heading}
        image={sectionImage("section-contact", "film studio workspace")}
        intro={siteConfig.ctaBlock.description}
      />

      <main className="bg-bg px-6 py-24 md:py-28">
        <div className="mx-auto max-w-5xl">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
