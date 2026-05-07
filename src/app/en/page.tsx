import { getTranslations } from "@/lib/translations";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ProductSection from "@/components/ProductSection";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomeEN() {
  const t = getTranslations("en");

  return (
    <>
      <NavBar t={t} locale="en" />
      <main>
        <Hero t={t} />
        <FeatureSection t={t} />
        <ProductSection t={t} />
        <PricingSection t={t} locale="en" />
        <FAQ t={t} />
        <ContactForm t={t} />
      </main>
      <Footer t={t} locale="en" />
    </>
  );
}
