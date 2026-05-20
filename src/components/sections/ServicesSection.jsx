import { useNavigate } from 'react-router-dom';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { AnimatedReveal } from '../animations/AnimatedReveal';
import { Button } from '../ui/Button';
import { projectsData } from '../../data/projectsData';

export function ServicesSection() {
  const navigate = useNavigate();
  // Get up to 3 projects for the home page showcase
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section id="services" className="py-16 md:py-cinematic bg-off-white relative">
      <Container>
        <AnimatedReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionTitle
              title="Featured Projects"
              subtitle="What We Do?"
              className="mb-0"
            />
            <Button
              onClick={() => navigate('/projects')}
              variant="outline"
              className="hidden md:inline-flex border-dark-bg/20 text-dark-bg hover:bg-dark-bg hover:text-off-white cursor-pointer"
            >
              View All Projects
            </Button>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedReveal key={project.id} delay={0.2 * (index + 1)}>
              <Card
                imageSrc={project.images[0]}
                imageAlt={project.title}
                className="h-full flex flex-col bg-white border-light-gray group-hover:border-industrial-blue transition-colors duration-300 cursor-pointer"
                onClick={() => {
                  navigate('/projects', { state: { activeProjectId: project.id } });
                  window.scrollTo(0, 0);
                }}
              >
                <div className="flex-grow">
                  <div className="text-xs font-heading font-bold text-industrial-blue uppercase tracking-widest mb-3">
                    {project.location}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark-bg mb-4 uppercase tracking-wide line-clamp-3">
                    {project.title}
                  </h3>
                  <p className="text-dark-bg/70 leading-relaxed text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-light-gray/50">
                  <a className="inline-flex items-center text-industrial-blue font-heading font-semibold text-xs uppercase tracking-widest group-hover/link:text-dark-bg transition-colors">
                    Explore Details
                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </Card>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={0.8} className="mt-12 text-center md:hidden">
          <Button
            onClick={() => navigate('/projects')}
            variant="outline"
            className="w-full border-dark-bg/20 text-dark-bg hover:bg-dark-bg hover:text-off-white"
          >
            View All Projects
          </Button>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
