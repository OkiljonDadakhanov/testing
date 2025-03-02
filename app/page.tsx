import { CompetitionSection } from "@/components/competetion";
import { FAQSection } from "@/components/faq";
import Hero from "@/components/hero";
import { TimelineSection } from "@/components/timeline";

export default function Home() {
  return (
    <section>
      <Hero />
      <CompetitionSection />
      <TimelineSection />
      <FAQSection />
    </section>
  );
}
