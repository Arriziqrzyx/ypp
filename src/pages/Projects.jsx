import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ProjectsHeroSection } from "../components/sections/projects/ProjectsHeroSection";
import { ProjectsListSection } from "../components/sections/projects/ProjectsListSection";
import { projectsData } from "../data/projectsData";

export function Projects() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen bg-off-white">
      <Helmet>
        <title>{t('meta.projects.title')}</title>
        <meta name="description" content={t('meta.projects.description')} />
        <link rel="canonical" href="https://yuritechpp.co.id/projects" />
      </Helmet>
      <ProjectsHeroSection />
      <ProjectsListSection projects={projectsData} />
    </main>
  );
}
