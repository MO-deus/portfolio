import PillNav from "@/components/layout/PillNav";
import Sidebar from "@/components/layout/Sidebar";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <PillNav />
      <div className="page-layout">
        {/* Sticky left sidebar */}
        <aside className="sidebar-col">
          <Sidebar />
        </aside>

        {/* Scrollable right content */}
        <main className="main-col">
          <HeroSection />
          <WorkSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
