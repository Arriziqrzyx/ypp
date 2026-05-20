import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { Container } from "../ui/Container";
import logo from "../../assets/logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // auto close on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Projects", href: "/projects" },
    { name: "Products", href: "/products" },
  ];

  return (
    <>
      <header
        className={cn(
          `
            fixed
            top-0
            left-0
            right-0
            z-50
            transition-all
            duration-500
          `,
          isScrolled || mobileMenuOpen
            ? `
              bg-off-white/95
              backdrop-blur-md
              border-b
              border-dark-bg/8
              shadow-[0_6px_30px_rgba(0,0,0,0.04)]
            `
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="h-[82px] md:h-[88px] flex items-center justify-between">
            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 relative z-[60] group"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <img
                src={logo}
                alt="Yuritech Putra Perkasa"
                className="
                  h-9
                  md:h-10
                  w-auto
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-[1.02]
                "
              />

              <div className="flex flex-col">
                <span
                  className={cn(
                    `
                      font-heading
                      font-black
                      uppercase
                      leading-none
                      tracking-[0.03em]
                      transition-colors
                      duration-300
                      text-[1.45rem]
                      md:text-[1.6rem]
                    `,
                    isScrolled || mobileMenuOpen
                      ? "text-dark-bg"
                      : "text-white"
                  )}
                >
                  Yuritech
                </span>

                <span
                  className={cn(
                    `
                      font-heading
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      mt-1
                      text-[10px]
                      md:text-[11px]
                      transition-colors
                      duration-300
                    `,
                    isScrolled || mobileMenuOpen
                      ? "text-industrial-blue"
                      : "text-white/75"
                  )}
                >
                  Putra Perkasa
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      `
                        relative
                        text-[13px]
                        font-heading
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        transition-all
                        duration-300
                        group
                      `,
                      isActive
                        ? "text-industrial-blue"
                        : isScrolled
                          ? "text-dark-bg hover:text-industrial-blue"
                          : "text-white hover:text-industrial-blue"
                    )}
                  >
                    {link.name}

                    <span
                      className={cn(
                        `
                          absolute
                          -bottom-2
                          left-0
                          h-[2px]
                          rounded-full
                          bg-industrial-blue
                          transition-all
                          duration-300
                          group-hover:w-full
                        `,
                        isActive ? "w-full" : "w-0"
                      )}
                    />
                  </Link>
                );
              })}

              <div
                className={cn(
                  "h-5 w-px mx-1",
                  isScrolled ? "bg-dark-bg/10" : "bg-white/20"
                )}
              />

              {/* CTA */}
              <a
                href="https://wa.me/6282125597520"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  h-11
                  rounded-full
                  bg-primary-red
                  text-white
                  text-[11px]
                  font-heading
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  transition-all
                  duration-300
                  hover:bg-dark-bg
                  hover:-translate-y-[1px]
                  shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                "
              >
                Contact Us
                <ArrowUpRight size={14} />
              </a>
            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={cn(
                `
                  lg:hidden
                  relative
                  z-[60]
                  w-11
                  h-11
                  rounded-full
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  border
                `,
                isScrolled || mobileMenuOpen
                  ? `
                    bg-dark-bg/[0.03]
                    border-dark-bg/10
                    text-dark-bg
                  `
                  : `
                    bg-white/10
                    border-white/10
                    text-white
                    backdrop-blur-md
                  `
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
                fixed
                inset-0
                z-40
                bg-black/45
                lg:hidden
              "
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* panel */}
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                top-[82px]
                md:top-[88px]
                left-0
                right-0
                z-50
                lg:hidden
              "
            >
              <div className="px-4 md:px-6">
                <div
                  className="
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-dark-bg/8
                    bg-off-white/98
                    backdrop-blur-xl
                    shadow-[0_24px_60px_rgba(0,0,0,0.14)]
                  "
                >
                  {/* subtle background */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-20%] right-[-10%] w-[240px] h-[240px] bg-industrial-blue/5 rounded-full blur-3xl" />

                    <div className="absolute bottom-[-20%] left-[-10%] w-[240px] h-[240px] bg-primary-red/5 rounded-full blur-3xl" />
                  </div>

                  <div className="relative z-10 px-6 py-7 md:px-8 md:py-8">
                    {/* nav links */}
                    <nav className="flex flex-col">
                      {navLinks.map((link, i) => {
                        const isActive =
                          location.pathname === link.href;

                        return (
                          <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{
                              duration: 0.35,
                              delay: i * 0.05,
                            }}
                          >
                            <Link
                              to={link.href}
                              onClick={() =>
                                setMobileMenuOpen(false)
                              }
                              className={cn(
                                `
                                  group
                                  flex
                                  items-center
                                  justify-between
                                  py-5
                                  border-b
                                  border-dark-bg/6
                                  transition-all
                                  duration-300
                                `,
                                isActive
                                  ? "text-industrial-blue"
                                  : "text-dark-bg"
                              )}
                            >
                              <div>
                                <p
                                  className="
                                    font-heading
                                    font-bold
                                    uppercase
                                    tracking-[0.14em]
                                    text-[1rem]
                                    md:text-[1.05rem]
                                  "
                                >
                                  {link.name}
                                </p>
                              </div>

                              <ArrowUpRight
                                size={18}
                                className="
                                  opacity-40
                                  transition-all
                                  duration-300
                                  group-hover:translate-x-1
                                  group-hover:-translate-y-1
                                "
                              />
                            </Link>
                          </motion.div>
                        );
                      })}
                    </nav>

                    {/* CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.25,
                      }}
                      className="pt-7"
                    >
                      <a
                        href="https://wa.me/6282125597520"
                        onClick={() =>
                          setMobileMenuOpen(false)
                        }
                        className="
                          w-full
                          h-[54px]
                          rounded-2xl
                          bg-primary-red
                          text-white
                          flex
                          items-center
                          justify-center
                          gap-2
                          font-heading
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-[12px]
                          transition-all
                          duration-300
                          hover:bg-dark-bg
                          shadow-[0_14px_30px_rgba(0,0,0,0.12)]
                        "
                      >
                        Contact Us
                        <ArrowUpRight size={16} />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}