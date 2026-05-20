import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { VisionMissionSection } from '../components/sections/VisionMissionSection';
import { ValuesSection } from '../components/sections/ValuesSection';
import { ClientsSection } from '../components/sections/ClientsSection';
import { CTASectionFinal } from '../components/sections/CTASectionFinal';

export function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('meta.home.title')}</title>
        <meta name="description" content={t('meta.home.description')} />
        <link rel="canonical" href="https://yuritechpp.co.id/" />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <VisionMissionSection />
      <ValuesSection />
      <ClientsSection />
      <CTASectionFinal />
    </>
  );
}
