"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_LINKS = ["قصتنا", "رسالتنا", "رؤيتنا", "قيمنا", "ركائزنا"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((item, index) => {
              const isActive = activeSection === item;
              const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
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
    </motion.nav>
  );
}
