import { Container } from "./Container";
import { Button } from "./Button";
import { SectionTitle } from "./SectionTitle";
import { AnimatedReveal } from "../animations/AnimatedReveal";

export function CTASection({ 
  title = "Ready to start your project?", 
  subtitle = "Contact Us Today",
  buttonText = "Request a Quote",
  buttonHref = "#"
}) {
  return (
    <section className="py-cinematic bg-off-white border-t border-dark-bg/10 relative overflow-hidden">
      {/* Industrial Overlay Pattern/Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-light-gray/10 via-dark-bg/80 to-dark-bg pointer-events-none" />
      
      <Container className="relative z-10">
        <AnimatedReveal alignment="center" className="max-w-3xl mx-auto text-center">
          <SectionTitle 
            title={title} 
            subtitle={subtitle} 
            alignment="center" 
          />
          <p className="text-primary-red mb-10 text-lg">
            Our team of engineering professionals is ready to support your industrial needs with high-quality materials and expert services.
          </p>
          <a href={buttonHref}>
            <Button variant="primary">{buttonText}</Button>
          </a>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
