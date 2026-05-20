import { Helmet } from 'react-helmet-async';
import { AboutHeroSection } from '../components/sections/AboutHeroSection';
import { IntroducingOurCompanySection } from '../components/sections/CompanyOverviewSection';
import { VisionMissionSection } from '../components/sections/VisionMissionSection';
import { ValuesSection } from '../components/sections/ValuesSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { CTASectionFinal } from '../components/sections/CTASectionFinal';

export function About() {
  return (
    <>
      <Helmet>
        <title>About PT. Yuritech Putra Perkasa | Industrial Supply & Construction Company</title>
        <meta name="description" content="Learn about PT. Yuritech Putra Perkasa, incorporated in Jakarta in 2005 as a stockist, trading, supplier, and EPC contractor / construction service provider fulfilling the rapid development of diverse modern industries." />
        <link rel="canonical" href="https://yuritechpp.co.id/about-us" />
      </Helmet>
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
