import { CompetitionSection } from "@/components/competetion";
import { FAQSection } from "@/components/faq";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <section>
      <Hero />
      <CompetitionSection />
      <FAQSection />
    </section>
  );
}
