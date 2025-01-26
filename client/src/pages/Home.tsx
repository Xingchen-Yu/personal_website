import Hero from "@/components/Hero";
import TechnicalSkills from "@/components/TechnicalSkills";
import ProjectExperience from "@/components/ProjectExperience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <TechnicalSkills />
      <ProjectExperience />
      <Contact />
    </div>
  );
}