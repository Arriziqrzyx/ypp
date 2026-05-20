import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedReveal } from '../animations/AnimatedReveal';

// Import all customer logos
import logoPertamina from '../../assets/CustomerLogo/pertamina-logo.png';
import logoElnusa from '../../assets/CustomerLogo/elnusa-petrofin.png';
import logoSeiwa from '../../assets/CustomerLogo/seiwa.png';
import logoPertaminaEP from '../../assets/CustomerLogo/pertamina-ep.webp';
import logoYuasa from '../../assets/CustomerLogo/yuasa.png';
import logoPetrosea from '../../assets/CustomerLogo/petrosea.png';
import logoNipponSteel from '../../assets/CustomerLogo/nippon-steel.png';
import logoAdigunaSE from '../../assets/CustomerLogo/adiguna-se.png';
import logoAlstom from '../../assets/CustomerLogo/alstom.png';
import logoAtamora from '../../assets/CustomerLogo/atamora-tehnik-makmur.png';
import logoConocoPhillips from '../../assets/CustomerLogo/conocophillips.png';
import logoFajarGemilang from '../../assets/CustomerLogo/fajar-gemilang-semesta.png';
import logoIntirub from '../../assets/CustomerLogo/intirub.png';
import logoJGC from '../../assets/CustomerLogo/jgc-indonesia.png';
import logoTaiyoSinar from '../../assets/CustomerLogo/taiyo-sinar-raya.png';
import logoTropicana from '../../assets/CustomerLogo/tropicana.png';
import logoUnggulIndah from '../../assets/CustomerLogo/unggul-indah-cahaya.png';
import logoIndorama from '../../assets/CustomerLogo/indorama.png';
import logoNew from '../../assets/CustomerLogo/logo-new.png';
import logoLuckyPrint from '../../assets/CustomerLogo/lucky-print-abadi.png';
import logoQT from '../../assets/CustomerLogo/qt-q95.png';
import logoWasaMitra from '../../assets/CustomerLogo/wasa-mitra-engineering.png';

export function ClientsSection() {
  const clients = [
    { name: 'Pertamina', logo: logoPertamina },
    { name: 'Elnusa Petrofin', logo: logoElnusa },
    { name: 'Seiwa', logo: logoSeiwa },
    { name: 'Pertamina EP', logo: logoPertaminaEP },
    { name: 'Yuasa', logo: logoYuasa },
    { name: 'Petrosea', logo: logoPetrosea },
    { name: 'Nippon Steel', logo: logoNipponSteel },
    { name: 'Adiguna SE', logo: logoAdigunaSE },
    { name: 'Alstom', logo: logoAlstom },
    { name: 'Atamora Tehnik Makmur', logo: logoAtamora },
    { name: 'ConocoPhillips', logo: logoConocoPhillips },
    { name: 'Fajar Gemilang Semesta', logo: logoFajarGemilang },
    { name: 'Intirub', logo: logoIntirub },
    { name: 'JGC Indonesia', logo: logoJGC },
    { name: 'Taiyo Sinar Raya', logo: logoTaiyoSinar },
    { name: 'Tropicana', logo: logoTropicana },
    { name: 'Unggul Indah Cahaya', logo: logoUnggulIndah },
    { name: 'Indorama', logo: logoIndorama },
    { name: 'Logo New', logo: logoNew },
    { name: 'Lucky Print Abadi', logo: logoLuckyPrint },
    { name: 'QT', logo: logoQT },
    { name: 'Wasa Mitra Engineering', logo: logoWasaMitra },
  ];

  // Render one set of logos — used twice for seamless loop
  const LogoTrack = () => (
    <>
      {clients.map((client, index) => (
        <div 
          key={index} 
          className="clients-logo-item"
        >
          <img 
            src={client.logo} 
            alt={client.name} 
            draggable={false}
          />
        </div>
      ))}
    </>
  );

  return (
    <section className="py-12 md:py-cinematic bg-white border-y border-light-gray overflow-hidden">
      <Container>
        <AnimatedReveal>
          <SectionTitle 
            title="Clients & Partners" 
            subtitle="Trusted By" 
            alignment="center"
          />
        </AnimatedReveal>
      </Container>

      <div className="clients-marquee-wrapper">
        {/* Fade edges */}
        <div className="clients-fade clients-fade--left" />
        <div className="clients-fade clients-fade--right" />
        
        {/* Two identical tracks side-by-side for seamless infinite loop */}
        <div className="clients-marquee-track">
          <LogoTrack />
          <LogoTrack />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .clients-marquee-wrapper {
          position: relative;
          margin-top: 2rem;
          width: 100%;
          overflow: hidden;
        }

        .clients-marquee-wrapper:hover .clients-marquee-track {
          animation-play-state: paused;
        }

        .clients-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3rem;
          z-index: 10;
          pointer-events: none;
        }

        .clients-fade--left {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .clients-fade--right {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }

        .clients-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: clientsMarquee 45s linear infinite;
        }

        @keyframes clientsMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .clients-logo-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 180px;
          height: 70px;
          margin: 0 2rem;
          filter: grayscale(100%);
          opacity: 0.45;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .clients-logo-item:hover {
          filter: grayscale(0%);
          opacity: 1;
        }

        .clients-logo-item img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .clients-logo-item {
            width: 120px;
            height: 50px;
            margin: 0 1rem;
          }

          .clients-fade {
            width: 2rem;
          }

          .clients-marquee-track {
            animation-duration: 30s;
          }
        }

        @media (min-width: 769px) {
          .clients-fade {
            width: 6rem;
          }

          .clients-marquee-wrapper {
            margin-top: 4rem;
          }
        }
      `}} />
    </section>
  );
}
