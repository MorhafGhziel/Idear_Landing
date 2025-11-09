"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between flex-row-reverse">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="text-2xl font-bold text-white">IEDAR</div>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map((item) => {
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
                  whileHover={{ y: -2 }}
                  className={`transition-colors cursor-pointer relative ${
                    isActive
                      ? "text-secondary font-bold"
                      : "text-foreground/70 hover:text-secondary"
                  }`}
                >
                  {item}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
