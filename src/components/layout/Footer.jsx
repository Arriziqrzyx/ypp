import { Container } from "../ui/Container";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#f8f9fb] border-t border-dark-bg/8 overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] right-[-120px] w-[280px] h-[280px] bg-industrial-blue/5 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* YPP Watermark - Bottom Right */}
        <div className="absolute bottom-[-2rem] right-[-1rem] lg:right-4 opacity-[0.025] select-none">
          <span className="font-heading font-extrabold text-[8rem] md:text-[12rem] lg:text-[16rem] uppercase leading-none tracking-tighter">
            YPP
          </span>
        </div>
      </div>

      <Container className="relative z-10">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 py-10 md:py-14">
          {/* LEFT */}
          <div className="md:col-span-5 lg:col-span-4">
            {/* brand */}
            <div className="mb-6">
              <div className="flex flex-col">
                <span className="font-heading font-black text-4xl tracking-[0.04em] text-dark-bg uppercase leading-none">
                  Yuritech
                </span>

                <span className="font-heading font-semibold text-base tracking-[0.32em] text-industrial-blue uppercase mt-2">
                  Putra Perkasa
                </span>
              </div>

              <div className="w-14 h-[3px] bg-industrial-blue rounded-full mt-5" />
            </div>

            {/* description */}
            <p className="text-dark-bg/68 leading-relaxed text-sm max-w-md">
              Engineering, Procurement & Construction Solutions for Geothermal, Petrochemical, Oil & Gas, and Mining Sectors.
            </p>

            {/* contact */}
            <div className="mt-7 space-y-4">
              {/* address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-industrial-blue/10 flex items-center justify-center flex-shrink-0">
                  <MapPin
                    size={17}
                    className="text-industrial-blue"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-dark-bg/40 font-bold mb-1">
                    Head Office
                  </p>

                  <p className="text-dark-bg/68 text-sm leading-relaxed">
                    Jl. Pangeran Jayakarta Komplek Ruko 66 Blok B No. 9 Jakarta
                    Pusat 10730
                  </p>
                </div>
              </div>

              {/* phone */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-industrial-blue/10 flex items-center justify-center flex-shrink-0">
                  <Phone
                    size={16}
                    className="text-industrial-blue"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-dark-bg/40 font-bold mb-1">
                    Contact
                  </p>

                  <div className="flex flex-wrap gap-x-3 text-sm text-dark-bg/68">
                    <a
                      href="tel:02162202376"
                      className="hover:text-industrial-blue transition-colors"
                    >
                      021-62202376
                    </a>

                    {/* <span className="text-dark-bg/20">/</span>

                    <a
                      href="tel:62317674"
                      className="hover:text-industrial-blue transition-colors"
                    >
                      62317674
                    </a> */}
                  </div>
                </div>
              </div>

              {/* email */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-industrial-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail
                    size={16}
                    className="text-industrial-blue"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-dark-bg/40 font-bold mb-1">
                    Email Address
                  </p>

                  <a
                    href="mailto:marketingsales@yuritechpp.co.id"
                    className="text-sm text-dark-bg/68 hover:text-industrial-blue transition-colors break-all"
                  >
                    marketingsales@yuritechpp.co.id
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* EMPTY SPACE */}
          <div className="hidden md:block md:col-span-1 lg:col-span-2" />

          {/* RIGHT - CLEAN MAP */}
          <div className="md:col-span-6 lg:col-span-6">
            <div className="mb-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-industrial-blue font-bold mb-2">
                Office Location
              </p>

              <h4 className="font-heading font-bold text-dark-bg text-lg">
                Jakarta Headquarters
              </h4>
            </div>

            {/* cleaner map */}
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-dark-bg/8
                bg-white
                h-[200px]
                md:h-[260px]
              "
            >
              {/* subtle top accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-industrial-blue z-10" />

              {/* map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6089473740426!2d106.82872067474985!3d-6.1458467938411685!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f95e322921%3A0x9aff9f32886a97!2sPT.%20Yuritech%20Putra%20Perkasa!5e1!3m2!1sid!2sid!4v1779256858866!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PT. Yuritech Putra Perkasa Location"
                className="
                  grayscale-[20%]
                  contrast-[1.02]
                "
              />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-dark-bg/8 py-5 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.2em] text-dark-bg/45">
            © {new Date().getFullYear()} Yuritech Putra Perkasa — All Rights
            Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}