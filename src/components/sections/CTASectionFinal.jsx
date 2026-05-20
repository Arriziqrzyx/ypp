import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { AnimatedReveal } from '../animations/AnimatedReveal';

export function CTASectionFinal({
  subtitle = "Ready to Start Your Project?",
  title = "Partner With Us For Your Next Industrial Expansion",
  description = "For inquiries and further information regarding our stockist availability, EPC services, or general supplies, reach out to our team of engineering professionals.",
  buttonText = "Contact Us Today"
}) {
  return (
    <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden bg-dark-bg">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-bg/90 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-industrial-blue/20 via-transparent to-transparent z-10 mix-blend-overlay" />
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          alt="Industrial Engineering Background"
          className="w-full h-full object-cover grayscale opacity-50"
        />
      </div>

      <Container className="relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedReveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-12 h-[2px] bg-industrial-blue" />
                <div className="w-3 h-[2px] bg-primary-red ml-1" />
              </div>
              <span className="inline-block uppercase tracking-[0.3em] text-industrial-blue text-sm font-bold">
                {subtitle}
              </span>
              <div className="flex items-center">
                <div className="w-3 h-[2px] bg-primary-red mr-1" />
                <div className="w-12 h-[2px] bg-industrial-blue" />
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tighter uppercase leading-tight mb-6 md:mb-8">
              {title}
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={0.4}>
            <p className="text-white/70 text-base md:text-lg lg:text-xl mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto font-body">
              {description}
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.6}>
            <a href="https://wa.me/6282125597520" target="_blank" rel="noreferrer">
              <Button variant="primary" className="px-10 py-5 text-base hover:scale-105 bg-primary-red hover:bg-primary-red/90 border-primary-red">
                {buttonText}
              </Button>
            </a>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
