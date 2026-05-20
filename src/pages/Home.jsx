import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { VisionMissionSection } from '../components/sections/VisionMissionSection';
import { ValuesSection } from '../components/sections/ValuesSection';
import { ClientsSection } from '../components/sections/ClientsSection';
import { CTASectionFinal } from '../components/sections/CTASectionFinal';

export function Home() {
  return (
    <>
      <Helmet>
        <title>PT. Yuritech Putra Perkasa | Industrial Stockist, Supplier & EPC Contractor</title>
        <meta name="description" content="PT. Yuritech Putra Perkasa is a trusted industrial supplier, stockist, and EPC contractor since 2005. Supplying high-quality industrial valves, flanges, gaskets, fittings, pipes, and steel materials in Jakarta and across Indonesia." />
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
