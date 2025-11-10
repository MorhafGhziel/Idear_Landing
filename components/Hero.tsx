"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"], {
    clamp: false,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1], {
    clamp: false,
  });

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #1A1A1A 50%, #0F0F0F 100%)",
      }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          y: isMobile ? 0 : y,
          scale: isMobile ? 1 : scale,
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 z-0"
        initial={false}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero.png')`,
            filter: "brightness(0.4) contrast(1.1)",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            WebkitTransform: "translate3d(0, 0, 0)",
            willChange: "transform",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15, 15, 15, 0.4) 0%, rgba(15, 15, 15, 0.2) 40%, rgba(15, 15, 15, 0.3) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(15, 15, 15, 0.5) 100%)",
          }}
        />
      </motion.div>

      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.25, 0.45, 0.25],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Decorative Line Top */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-3">
            <div
              className="h-px w-16 md:w-24"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--secondary), transparent)",
              }}
            />
            <div className="w-1.5 h-1.5 bg-secondary rotate-45" />
            <div
              className="h-px w-16 md:w-24"
              style={{
                background:
                  "linear-gradient(to left, transparent, var(--secondary), transparent)",
              }}
            />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 relative"
            style={{
              background: "var(--gradient-gold)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 80px rgba(255, 255, 255, 0.2)",
            }}
          >
            IEDAR
          </h1>

          {/* Decorative Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 w-20 mx-auto rounded-full origin-center"
            style={{
              background: "var(--gradient-gold)",
              boxShadow: "0 4px 24px rgba(255, 255, 255, 0.3)",
            }}
          />
        </motion.div>

        {/* Arabic Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-wide">
            للفكرة دار
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl lg:text-2xl font-medium mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{
            background:
              "linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 50%, var(--accent-bronze) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          نحول الأفكار إلى فضاءات حية تلهم الانتماء
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(255, 255, 255, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const section = document.getElementById("قصتنا");
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
            }}
            className="group relative px-8 py-4 text-base md:text-lg font-bold text-primary rounded-xl cursor-pointer overflow-hidden transition-all duration-300"
            style={{
              background: "var(--gradient-gold)",
              boxShadow: "0 8px 32px rgba(255, 255, 255, 0.2)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%", opacity: 0 }}
              whileHover={{ x: "100%", opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            <span className="relative z-10 flex items-center gap-2">
              تعرف علينا
              <motion.span
                animate={{ x: [0, -5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ←
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Decorative Line Bottom */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-3">
            <div
              className="h-px w-12 md:w-20"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--accent-bronze))",
              }}
            />
            <div className="flex gap-2">
              <div className="w-1 h-1 bg-secondary rounded-full" />
              <div className="w-1 h-1 bg-accent-bronze rounded-full" />
              <div className="w-1 h-1 bg-secondary rounded-full" />
            </div>
            <div
              className="h-px w-12 md:w-20"
              style={{
                background:
                  "linear-gradient(to left, transparent, var(--accent-bronze))",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="text-xs text-neutral-400 tracking-widest">تصفح</div>
          <div
            className="w-5 h-10 border-2 rounded-full flex items-start justify-center p-1.5"
            style={{
              borderColor: "var(--secondary)",
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
            }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{
                background: "var(--gradient-gold)",
                boxShadow: "0 2px 8px rgba(255, 255, 255, 0.3)",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
