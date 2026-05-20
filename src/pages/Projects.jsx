import { ProjectsHeroSection } from "../components/sections/projects/ProjectsHeroSection";
import { ProjectsListSection } from "../components/sections/projects/ProjectsListSection";
import { projectsData } from "../data/projectsData";

export function Projects() {
  return (
    <main className="min-h-screen bg-off-white">
      <ProjectsHeroSection />
      <ProjectsListSection projects={projectsData} />
    </main>
  );
}
