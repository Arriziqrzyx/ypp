import { Container } from '../ui/Container';
import { AnimatedReveal } from '../animations/AnimatedReveal';
import { useTranslation } from 'react-i18next';
import aboutImg from '../../assets/about.png';

export function IntroducingOurCompanySection() {
  const { t } = useTranslation();
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
                {t('about.overview.subtitle')}
              </h2>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark-bg leading-tight max-w-4xl">
              {t('about.overview.title')}
            </h3>
          </AnimatedReveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Text Content */}
          <div className="w-full lg:w-7/12 order-2 lg:order-1">
            <AnimatedReveal delay={0.4}>
              <div className="prose prose-sm md:prose-lg max-w-none text-dark-bg/70 font-body text-justify leading-relaxed border-l border-light-gray pl-4 md:pl-6 space-y-3 md:space-y-4">
                <p>
                  {t('about.overview.p1')}
                </p>
                <p>
                  {t('about.overview.p2')}
                </p>
                <p>
                  {t('about.overview.p3')}
                </p>
                <p>
                  {t('about.overview.p4')}
                </p>
                <p>
                  {t('about.overview.p5')}
                </p>
                <p>
                  {t('about.overview.p6')}
                </p>
                <p>
                  {t('about.overview.p7')}
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
