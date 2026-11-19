import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Path beginning with "/" — used for the canonical URL and Open Graph URL. */
  path: string;
  openGraphType?: "website" | "article";
};

/**
 * Builds page-specific metadata while letting the root layout supply the
 * site name template, metadata base and default social images.
 */
export function pageMetadata({
  title,
  description,
  path,
  openGraphType = "website",
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: openGraphType,
      url: path,
      title,
      description,
      siteName: "Arjun Joshi & Co.",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
