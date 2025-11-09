"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_LINKS = ["قصتنا", "رسالتنا", "رؤيتنا", "قيمنا", "ركائزنا"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkActiveSection = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const firstSection = document.getElementById(NAV_LINKS[0]);

      // If we're in the hero section (before first section), clear active
      if (firstSection) {
        const firstSectionTop = firstSection.offsetTop;
        if (scrollY < firstSectionTop - 300) {
          setActiveSection("");
          return;
        }
      }

      // Find which section is currently in view
      let currentSection = "";
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_LINKS[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + scrollY;
          const sectionBottom = sectionTop + rect.height;

          // Check if section is in viewport (with some margin)
          if (scrollY >= sectionTop - 200 && scrollY < sectionBottom - 100) {
            currentSection = NAV_LINKS[i];
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Check on scroll
    window.addEventListener("scroll", checkActiveSection);
    // Initial check
    checkActiveSection();

    return () => {
      window.removeEventListener("scroll", checkActiveSection);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (item: string) => {
    const section = document.getElementById(item);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-100 transition-all duration-500",
        scrolled
          ? "bg-primary/95 backdrop-blur-2xl border-b border-secondary/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-white/5"
      )}
      style={{
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
      }}
    >
      {/* Subtle gradient overlay when scrolled */}
      {scrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-linear-to-b from-primary/10 to-transparent pointer-events-none"
        />
      )}

      <div className="container mx-auto px-6 py-3 relative">
        <div className="flex items-center justify-between flex-row-reverse">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 relative group"
          >
            <Image
              src="/icons/iedar.svg"
              alt="IEDAR Logo"
              width={200}
              height={70}
              className="h-11 md:h-14 w-auto object-contain relative z-10 transition-all duration-300 group-hover:brightness-110"
              priority
            />
            {/* Logo glow effect */}
            <div className="absolute inset-0 bg-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-all duration-300 group"
            style={{
              background: scrolled
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(255, 255, 255, 0.1)",
            }}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 rounded-full origin-center"
              style={{
                background: "var(--gradient-gold)",
                boxShadow: "0 2px 8px rgba(201, 169, 97, 0.3)",
              }}
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 rounded-full"
              style={{
                background: "var(--gradient-gold)",
                boxShadow: "0 2px 8px rgba(201, 169, 97, 0.3)",
              }}
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 rounded-full origin-center"
              style={{
                background: "var(--gradient-gold)",
                boxShadow: "0 2px 8px rgba(201, 169, 97, 0.3)",
              }}
            />
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((item, index) => {
              const isActive = activeSection === item;
              const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                handleNavClick(item);
              };

              return (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={handleClick}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -2 }}
                  className={cn(
                    "relative px-4 py-2.5 text-sm lg:text-base font-semibold cursor-pointer transition-all duration-300 rounded-lg group",
                    isActive
                      ? "text-primary"
                      : scrolled
                      ? "text-neutral-200 hover:text-secondary-light"
                      : "text-white/90 hover:text-secondary-light"
                  )}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "var(--gradient-gold)",
                        boxShadow: "0 4px 24px rgba(201, 169, 97, 0.4)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover background for inactive items */}
                  {!isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: "inset 0 0 20px rgba(201, 169, 97, 0.1)",
                      }}
                    />
                  )}

                  <span className="relative z-10">{item}</span>

                  {/* Bottom indicator line */}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"
                      layoutId="activeNavLine"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Subtle shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100"
                    initial={false}
                  >
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom border glow effect when scrolled */}
      {scrolled && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-secondary/30 to-transparent"
        />
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-9998 md:hidden"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed top-0 right-0 h-screen w-80 max-w-[85vw] z-9999 md:hidden overflow-y-auto"
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 15, 15, 0.99) 0%, rgba(26, 22, 22, 0.99) 100%)",
          borderLeft: "1px solid rgba(201, 169, 97, 0.2)",
          boxShadow: "-8px 0 32px rgba(0, 0, 0, 0.8)",
          top: 0,
          right: 0,
          height: "100vh",
        }}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-secondary/20">
          <Image
            src="/icons/iedar.svg"
            alt="IEDAR Logo"
            width={150}
            height={50}
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-secondary/10"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <nav className="p-6 space-y-2">
          {NAV_LINKS.map((item, index) => {
            const isActive = activeSection === item;
            return (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 20,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className={cn(
                  "w-full text-right px-6 py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group",
                  isActive
                    ? "text-primary"
                    : "text-white/80 hover:text-secondary-light"
                )}
                style={{
                  background: isActive
                    ? "var(--gradient-gold)"
                    : "rgba(255, 255, 255, 0.05)",
                  border: isActive
                    ? "none"
                    : "1px solid rgba(201, 169, 97, 0.1)",
                }}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveIndicator"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      boxShadow: "0 4px 24px rgba(201, 169, 97, 0.4)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover effect */}
                {!isActive && (
                  <motion.div className="absolute inset-0 rounded-xl bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}

                <span className="relative z-10 flex items-center justify-between">
                  <span>{item}</span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-primary"
                    />
                  )}
                </span>

                {/* Bottom accent line for active */}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 right-0 left-0 h-0.5 bg-primary rounded-b-xl"
                    layoutId="mobileActiveLine"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-secondary/20">
          <div
            className="h-px w-full mb-4"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--secondary), transparent)",
            }}
          />
          <p className="text-xs text-white/50 text-center">© 2025 IEDAR</p>
        </div>
      </motion.div>
    </motion.nav>
  );
}
