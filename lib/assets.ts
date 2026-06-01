import assetManifest from "@/content/asset-manifest.json";
import { resolveImage } from "@/lib/image-fallback";
import { siteConfig } from "@/content/site-config";

const images = (assetManifest.images || {}) as Record<string, string>;

/**
 * Resolve a section/service image slot from the asset manifest, falling back to
 * a brand-coloured gradient placeholder so inner-page heroes never render empty.
 */
export function sectionImage(slot: string, keyword?: string): string {
  return resolveImage({
    src: images[slot],
    industry: "photography",
    keyword,
    brandColor: siteConfig.brand.primary,
    fallbackTier: "gradient",
  });
}
