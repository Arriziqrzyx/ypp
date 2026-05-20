import { Helmet } from 'react-helmet-async';
import { ProjectsHeroSection } from "../components/sections/projects/ProjectsHeroSection";
import { ProjectsListSection } from "../components/sections/projects/ProjectsListSection";
import { projectsData } from "../data/projectsData";

export function Projects() {
  return (
    <main className="min-h-screen bg-off-white">
      <Helmet>
        <title>Our Projects | PT. Yuritech Putra Perkasa</title>
        <meta name="description" content="Explore our featured projects and proven track record in EPC contracting and industrial construction services across Indonesia." />
        <link rel="canonical" href="https://yuritechpp.co.id/projects" />
      </Helmet>
      <ProjectsHeroSection />
      <ProjectsListSection projects={projectsData} />
    </main>
  );
}
