import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/services/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaBanner from "@/components/layout/CtaBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insurance Agency in Bhiwandi",
  description:
    "Arjun Joshi & Co. helps families and businesses in Bhiwandi with health, life, motor, fire, worker, transit and marine insurance, plus investment plans. 20+ years of experience.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs showLink />
      <CtaBanner />
    </>
  );
}
