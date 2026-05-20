import { Container } from '../ui/Container';
import { AnimatedReveal } from '../animations/AnimatedReveal';
import { useTranslation } from 'react-i18next';
import { Shield, Users, Zap, TrendingUp, Award, Clock } from 'lucide-react';

export function ValuesSection() {
  const { t } = useTranslation();
  
  const values = [
    {
      key: 'quality',
      icon: <Award size={28} strokeWidth={2} />
    },
    {
      key: 'customer',
      icon: <Users size={28} strokeWidth={2} />
    },
    {
      key: 'agile',
      icon: <Zap size={28} strokeWidth={2} />
    },
    {
      key: 'integrity',
      icon: <Shield size={28} strokeWidth={2} />
    },
    {
      key: 'operational',
      icon: <Clock size={28} strokeWidth={2} />
    },
    {
      key: 'growth',
      icon: <TrendingUp size={28} strokeWidth={2} />
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">
          
          {/* Header Left */}
          <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col items-start md:sticky md:top-32 h-fit">
            <AnimatedReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-[2px] bg-industrial-blue" />
                  <div className="w-3 h-[2px] bg-primary-red ml-1" />
                </div>
                <h2 className="text-sm font-heading font-bold uppercase tracking-[0.3em] text-industrial-blue">
                  {t('about.values.subtitle')}
                </h2>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-dark-bg leading-tight mb-6">
                {t('about.values.title')}
              </h3>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <p className="text-base md:text-lg text-dark-bg/70 font-body leading-relaxed">
                {t('about.values.desc')}
              </p>
            </AnimatedReveal>
          </div>

          {/* Values Grid Right */}
          <div className="w-full md:w-7/12 lg:w-8/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {values.map((value, index) => (
                <AnimatedReveal key={index} delay={0.1 * index}>
                  <div className="group relative p-6 md:p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full flex flex-col">
                    {/* Startup-style subtle glow effect on hover */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-industrial-blue/5 to-primary-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="w-14 h-14 flex items-center justify-center bg-industrial-blue/5 text-industrial-blue rounded-2xl mb-6 group-hover:bg-industrial-blue group-hover:text-white group-hover:shadow-lg group-hover:-rotate-3 transition-all duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-dark-bg mb-3 group-hover:text-industrial-blue transition-colors duration-300">
                        {t(`about.values.items.${value.key}.title`)}
                      </h3>
                      <p className="text-dark-bg/60 font-body leading-relaxed">
                        {t(`about.values.items.${value.key}.desc`)}
                      </p>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
