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
