import { AboutHeroSection } from '../components/sections/AboutHeroSection';
import { IntroducingOurCompanySection } from '../components/sections/CompanyOverviewSection';
import { VisionMissionSection } from '../components/sections/VisionMissionSection';
import { ValuesSection } from '../components/sections/ValuesSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { CTASectionFinal } from '../components/sections/CTASectionFinal';

export function About() {
  return (
    <>
      <AboutHeroSection />
      <IntroducingOurCompanySection />
      <VisionMissionSection />
      <ValuesSection />
      <CertificationsSection />
      <CTASectionFinal 
        subtitle="Get in Touch"
        title="For Inquiries and Further Information, Reach Out to Us!"
        description=""
        buttonText="Contact Us"
      />
    </>
  );
}
