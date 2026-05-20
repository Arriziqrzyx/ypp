import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "../../ui/Container";
import { ProjectShowcaseCard } from "./ProjectShowcaseCard";
import { ProjectModal } from "../../ui/ProjectModal";

export function ProjectsListSection({ projects }) {
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState(null);

  // Check if we navigated here with a specific project to open
  useEffect(() => {
    if (location.state?.activeProjectId) {
      const projectToOpen = projects.find(p => p.id === location.state.activeProjectId);
      if (projectToOpen) {
        setSelectedProject(projectToOpen);
        // Clean up state so refreshing doesn't keep opening it if unwanted, though optional
      }
    }
  }, [location.state?.activeProjectId, projects]);

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = selectedProject ? "hidden" : "unset";
    }

    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, [selectedProject]);

  return (
    <section className="py-24 bg-white relative">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#DCDCDC 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }} />
      
      <Container className="relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                <div className="w-12 h-[2px] bg-industrial-blue" />
                <div className="w-3 h-[2px] bg-primary-red ml-1" />
              </div>
              <h2 className="font-heading font-black text-3xl md:text-4xl text-dark-bg uppercase tracking-tight">
                Project Portfolio
              </h2>
              <div className="flex items-center">
                <div className="w-3 h-[2px] bg-primary-red mr-1" />
                <div className="w-12 h-[2px] bg-industrial-blue" />
              </div>
            </div>
            <p className="font-body text-dark-bg/60 max-w-2xl mx-auto">
              Explore our diverse range of engineering, procurement, and construction projects. Click on any project to view detailed specifications and galleries.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectShowcaseCard 
                key={project.id} 
                project={project} 
                index={index} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

        </div>
      </Container>

      {/* Detail Modal */}
      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
}
