import HeroGrid from "./components/hero/HeroGrid";
import AboutSection from "./components/about/AboutSection";
import SkillsGrid from "./components/skills/SkillsGrid";
import ProjectsGrid from "./components/projects/ProjectsGrid";
import Timeline from "./components/experience/Timeline";
import EducationSection from "./components/education/EducationSection";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="pt-16">
        <HeroGrid />
        <AboutSection />
        <SkillsGrid />
        <ProjectsGrid />
        <Timeline />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
