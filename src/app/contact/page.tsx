import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Contact from "@/components/home/Contact";
import CtaBanner from "@/components/layout/CtaBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Arjun Joshi & Co. in Bhiwandi for insurance enquiries, claims, renewals and support. Call, WhatsApp, email or visit our office.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let’s find the right protection for you"
        description="Call, WhatsApp, email or visit our Bhiwandi office. Whether you are starting fresh or need help with an existing policy, our team will guide you."
        crumbs={[{ label: "Contact" }]}
      />

      <Contact />
      <CtaBanner />
    </>
  );
}
