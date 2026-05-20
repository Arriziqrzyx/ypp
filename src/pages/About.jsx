import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { AboutHeroSection } from '../components/sections/AboutHeroSection';
import { IntroducingOurCompanySection } from '../components/sections/CompanyOverviewSection';
import { VisionMissionSection } from '../components/sections/VisionMissionSection';
import { ValuesSection } from '../components/sections/ValuesSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { CTASectionFinal } from '../components/sections/CTASectionFinal';

export function About() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('meta.about.title')}</title>
        <meta name="description" content={t('meta.about.description')} />
        <link rel="canonical" href="https://yuritechpp.co.id/about-us" />
      </Helmet>
      <AboutHeroSection />
      <IntroducingOurCompanySection />
      <VisionMissionSection />
      <ValuesSection />
      <CertificationsSection />
      <CTASectionFinal 
        subtitle={t('cta.about.subtitle')}
        title={t('cta.about.title')}
        description={t('cta.about.description')}
        buttonText={t('cta.about.buttonText')}
      />
    </>
  );
}
