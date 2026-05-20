import { Container } from '../ui/Container';
import { AnimatedReveal } from '../animations/AnimatedReveal';
import aboutImg from '../../assets/about.png';

export function IntroducingOurCompanySection() {
  return (
    <section className="py-16 md:py-cinematic bg-white overflow-hidden">
      <Container>
        <div className="mb-12 lg:mb-16">
          <AnimatedReveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-12 h-[2px] bg-industrial-blue" />
                <div className="w-3 h-[2px] bg-primary-red ml-1" />
              </div>
              <h2 className="text-sm font-heading font-bold uppercase tracking-[0.3em] text-industrial-blue">
                Introducing Our Company
              </h2>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-bg leading-tight max-w-4xl">
              PT. Yuritech Putra Perkasa
            </h3>
          </AnimatedReveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Text Content */}
          <div className="w-full lg:w-7/12 order-2 lg:order-1">
            <AnimatedReveal delay={0.4}>
              <div className="prose prose-sm md:prose-lg max-w-none text-dark-bg/70 font-body text-justify leading-relaxed border-l border-light-gray pl-4 md:pl-6 space-y-3 md:space-y-4">
                <p>
                  PT. Yuritech Putra Perkasa was incorporated on Jakarta established since year on 2005 as an Stockiest, Supplier, Trading & EPC Contractor/ Construction Services to fulfill any rapid development of diversed modern industries (Geothermal, Petrochemical, Oil & Gas, Industrial Supplies and Construction Services (EPC Contractor) an ever increasing needs for industrial plants.
                </p>
                <p>
                  PT. Yuritech Putra Perkasa not just an ordinary Stockist & Supplier company. The customer satisfactory and prompt delivery are our first policy. providing materials that are need on a Quick or Emergency requirements.
                </p>
                <p>
                  We strongly believe that we would be qualified as a good business partners of your respectable firm and would have a change to serve you with competitive cost/price and best quality product.
                </p>
                <p>
                  The goals is we strive efficiency in overall management and services system to ensure a reduced cost and satisfactory service for all our customers.
                </p>
                <p>
                  We committed to “By supplying better quality to fulfill increasingly diversified demands”, we dedicate ourselves to development of economical growth and improvement of national living standards.
                </p>
                <p>
                  We could support any industrial needs and provides all areas of industry with our stocks of high quality of many materials such as Pipes, Fittings, Flanges, Valves, Instrument Fittings / Controls and Steel Structures with reasonable best price.
                </p>
                <p>
                  We do also variety experienced services in construction and installation such as Assembling Interchange Piping, Tie-In/Hot Tapping Connection, Build the Road, Civil Works in Pipeline Supports, Insulation the Pipeline, etc. We welcome the opportunity to resolve difficult supply problems as well as
                </p>
              </div>
            </AnimatedReveal>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-5/12 order-1 lg:order-2">
            <AnimatedReveal delay={0.3} className="w-full h-full relative">
              <div className="absolute inset-0 bg-industrial-blue/10 translate-x-4 translate-y-4 z-0" />
              <div className="relative z-10 aspect-[4/3] md:aspect-[4/5] overflow-hidden bg-light-gray">
                <img
                  src={aboutImg}
                  alt="Industrial Engineering Construction"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </AnimatedReveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
