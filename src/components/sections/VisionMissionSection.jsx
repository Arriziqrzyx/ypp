import { Container } from '../ui/Container';
import { AnimatedReveal } from '../animations/AnimatedReveal';
import logo from '../../assets/logo.png';

export function VisionMissionSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-off-white relative overflow-hidden">
      {/* Industrial watermark accents */}

      {/* 1. EPC Watermark - Top Right */}
      <div className="absolute top-0 lg:top-10 right-4 lg:right-10 opacity-[0.03] pointer-events-none select-none">
        <span className="font-heading font-extrabold text-[10rem] md:text-[15rem] lg:text-[20rem] uppercase leading-none tracking-tighter">
          EPC
        </span>
      </div>

      {/* 2. YPP Watermark - Bottom Left */}
      <div className="absolute bottom-0 lg:bottom-10 left-4 lg:left-10 opacity-[0.03] pointer-events-none select-none">
        <span className="font-heading font-extrabold text-[10rem] md:text-[15rem] lg:text-[20rem] uppercase leading-none tracking-tighter">
          YPP
        </span>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">

          {/* Vision Block */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <AnimatedReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-[2px] bg-industrial-blue" />
                  <div className="w-3 h-[2px] bg-primary-red ml-1" />
                </div>
                <h2 className="text-sm font-heading font-bold uppercase tracking-[0.3em] text-industrial-blue">
                  Our Vision
                </h2>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark-bg leading-tight mb-6">
                Delivering Trusted Local Content Solutions for Indonesia’s Geothermal, Oil & Gas, Power, Manufacturing, and Industrial Sectors.
              </p>
            </AnimatedReveal>
          </div>

          {/* Mission Block */}
          <div className="w-full md:w-1/2">
            <AnimatedReveal delay={0.3}>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-[2px] bg-industrial-blue" />
                  <div className="w-3 h-[2px] bg-primary-red ml-1" />
                </div>
                <h2 className="text-sm font-heading font-bold uppercase tracking-[0.3em] text-industrial-blue">
                  Our Mission
                </h2>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.4}>
              <ul className="space-y-6 md:space-y-8">
                <li className="flex gap-6">
                  <span className="font-heading font-bold text-4xl text-primary-red/20 leading-none">01</span>
                  <p className="text-base md:text-lg text-dark-bg/80 font-body leading-relaxed pt-1">
                    To deliver high-quality EPC (Engineering, Procurement, and Construction) services that meet client expectations.
                  </p>
                </li>
                <li className="flex gap-6">
                  <span className="font-heading font-bold text-4xl text-primary-red/20 leading-none">02</span>
                  <p className="text-base md:text-lg text-dark-bg/80 font-body leading-relaxed pt-1">
                    To prioritize safety, efficiency, and sustainability in every project we undertake.
                  </p>
                </li>
                <li className="flex gap-6">
                  <span className="font-heading font-bold text-4xl text-primary-red/20 leading-none">03</span>
                  <p className="text-base md:text-lg text-dark-bg/80 font-body leading-relaxed pt-1">
                    To foster a culture of continuous improvement, innovation, and professional growth for all employees.
                  </p>
                </li>
              </ul>
            </AnimatedReveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
