import type { Metadata } from "next";
import { SEOHead } from "@/components/seo/SEOHead";
import { siteConfig } from "@/content/site-config";

const company = siteConfig.company.name;
const email = siteConfig.company.email;
const jurisdiction = siteConfig.company.location;
const effectiveDate = new Date().toLocaleDateString("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of the ${company} website.`,
};

export default function TermsPage() {
  return (
    <>
      <SEOHead title={`Terms of Service — ${company}`} path="/terms" noindex />
      <main className="mx-auto max-w-3xl bg-bg px-5 pb-24 pt-36 text-ink md:px-8 md:pt-44">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
          Legal
        </p>
        <h1 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-ink/55">Effective {effectiveDate}</p>

        <div className="mt-12 space-y-8 leading-relaxed [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-medium [&_li]:text-ink/75 [&_p]:text-ink/75 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
          <p>
            These terms govern your use of the {company} website. By accessing
            or using the site you agree to be bound by them. If you do not agree,
            please do not use the site.
          </p>

          <div>
            <h2>Use of the site</h2>
            <p>
              You may use this site for lawful purposes only. You agree not to
              misuse it, interfere with its operation, or attempt to access it in
              any way other than through the interface we provide.
            </p>
          </div>

          <div>
            <h2>Intellectual property</h2>
            <p>
              All content on this site — including films, images, text, logos and
              branding — is owned by {company} or its licensors and is protected
              by copyright and other laws. You may not reproduce or distribute it
              without our written permission.
            </p>
          </div>

          <div>
            <h2>Enquiries &amp; projects</h2>
            <p>
              Submitting an enquiry does not create a contract. Any engagement is
              governed by a separate written agreement between you and {company}.
            </p>
          </div>

          <div>
            <h2>Disclaimer</h2>
            <p>
              The site is provided &ldquo;as is&rdquo; without warranties of any
              kind. We do not guarantee that it will be uninterrupted, error-free,
              or free of harmful components.
            </p>
          </div>

          <div>
            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, {company} will not be liable
              for any indirect or consequential losses arising from your use of
              this site.
            </p>
          </div>

          <div>
            <h2>Governing law</h2>
            <p>These terms are governed by the laws applicable in {jurisdiction}.</p>
          </div>

          <div>
            <h2>Contact us</h2>
            <p>
              Questions about these terms? Email{" "}
              <a className="underline" href={`mailto:${email}`}>
                {email}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
