import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import OurStory from "@/components/OurStory";
import OurMission from "@/components/OurMission";
import OurVision from "@/components/OurVision";
import OurValues from "@/components/OurValues";
import OurPillars from "@/components/OurPillars";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <OurStory />
      <OurMission />
      <OurVision />
      <OurValues />
      <OurPillars />
      <Footer />
    </>
  );
}
