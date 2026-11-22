import Hero from "@/components/home/Hero";
import Results from "@/components/home/Results";
import BatchesPreview from "@/components/home/BatchesPreview";
import Faqs from "@/components/home/Faqs";
import Cta from "@/components/home/Cta";
import StickyBar from "@/components/home/StickyBar";

export default function Home() {
  return (
    <>
      <Hero />
      <Results />
      <BatchesPreview />
      <Faqs />
      <Cta />
      <StickyBar />
    </>
  );
}
