"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,

    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/images/Pic1.jpg')`,
          }}
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/60 via-primary/40 to-primary/80" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-4">
            IEDAR
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-secondary mx-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-4xl lg:text-5xl text-white/95 font-light mb-6 leading-tight"
        >
          للفكرة دار
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-secondary font-medium mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          نحول الأفكار إلى فضاءات حية تلهم الانتماء
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(236, 211, 109, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
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
            className="px-10 py-5 bg-secondary text-primary rounded-xl font-bold text-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10">تعرف علينا</span>
            <motion.div
              className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-secondary rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
