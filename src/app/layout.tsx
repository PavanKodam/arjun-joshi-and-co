import type { Metadata, Viewport } from "next";
import { Fraunces, Poppins } from "next/font/google";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import EnquiryProvider from "@/components/forms/EnquiryProvider";
import StructuredData from "@/components/seo/StructuredData";
import { IS_LIVE_SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const TITLE = "Insurance Agency in Bhiwandi";
const DESCRIPTION =
  "Arjun Joshi & Co. helps families and businesses in Bhiwandi with health, life, motor and other insurance, plus investment plans. 20+ years of experience.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${TITLE} | Arjun Joshi & Co.`,
    template: "%s | Arjun Joshi & Co.",
  },
  description: DESCRIPTION,
  // Only ask Google to list the site when it is on the real domain
  robots: IS_LIVE_SITE
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Arjun Joshi & Co.",
    title: `${TITLE} | Arjun Joshi & Co.`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Arjun Joshi & Co.`,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f0e6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <StructuredData />
        <Preloader />
        <EnquiryProvider>
          <a
            href="#main-content"
            className="skip-link sr-only focus:not-sr-only"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <MobileActionBar />
        </EnquiryProvider>
      </body>
    </html>
  );
}
