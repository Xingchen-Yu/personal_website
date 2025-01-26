import Hero from "@/components/Hero";
import ResearchInterests from "@/components/ResearchInterests";
import TechnicalSkills from "@/components/TechnicalSkills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <ResearchInterests />
      <TechnicalSkills />
      <Contact />
    </div>
  );
}
