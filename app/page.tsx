import VideoHomepage from "@/components/VideoHomepage";
import { SEOHead } from "@/components/seo/SEOHead";
import { siteConfig } from "@/content/site-config";
import {
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/structured-data";

export default function HomePage() {
  return (
    <>
      <SEOHead
        path="/"
        jsonLd={[
          organizationSchema(
            { ...siteConfig.company, url: siteConfig.seo.siteUrl, socials: siteConfig.socials },
            siteConfig.seo.structuredData.address,
          ),
          websiteSchema({
            brand: { ...siteConfig.company, url: siteConfig.seo.siteUrl },
          }),
        ]}
      />
      <VideoHomepage />
    </>
  );
}
