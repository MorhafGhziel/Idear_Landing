"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MissionPillar {
  title: string;
  desc: string;
  icon: string;
}

const MISSION_PILLARS: MissionPillar[] = [
  {
    title: "الهوية السعودية",
    desc: "نحتفي بتراثنا الغني ونعكسه في كل تصميم",
    icon: "🏛️",
  },
  {
    title: "الاستدامة",
    desc: "نبني للمستقبل مع احترام البيئة والموارد",
    icon: "🌱",
  },
  {
    title: "الابتكار",
    desc: "نستشرف المستقبل بحلول معمارية رائدة",
    icon: "💡",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function OurMission() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="رسالتنا"
      ref={ref}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #1A1616 50%, #0F0F0F 100%)",
      }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Number */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4"
          >
            <div className="flex items-center gap-3">
              <span
                className="text-4xl md:text-5xl font-bold opacity-20"
                style={{
                  background: "var(--gradient-gold)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ٢
              </span>
              <div
                className="h-px flex-1 max-w-[150px]"
                style={{
                  background:
                    "linear-gradient(to right, var(--secondary), transparent)",
                }}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <div className="text-center mb-12">
            <motion.h2
              initial={fadeInUp.initial}
              animate={isInView ? fadeInUp.animate : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              رسالتنا
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <div
                className="h-0.5 w-16 rounded-full"
                style={{
                  background: "var(--gradient-gold)",
                  boxShadow: "0 4px 16px rgba(255, 255, 255, 0.2)",
                }}
              />
              <div className="w-2 h-2 bg-secondary rotate-45" />
              <div
                className="h-0.5 w-16 rounded-full"
                style={{
                  background: "var(--gradient-gold)",
                  boxShadow: "0 4px 16px rgba(255, 255, 255, 0.2)",
                }}
              />
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={fadeInUp.initial}
              animate={isInView ? fadeInUp.animate : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div
                className="relative inline-block rounded-2xl p-8 md:p-10 max-w-4xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.04) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow:
                    "0 20px 60px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 font-light text-pretty">
                  نسعى لتحويل كل فكرة إلى فضاء حي يلهم الانتماء، حيث نجمع بين{" "}
                  <span
                    className="font-bold"
                    style={{
                      background: "var(--gradient-gold)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    الهوية السعودية الأصيلة
                  </span>{" "}
                  و
                  <span
                    className="font-bold"
                    style={{
                      background: "var(--gradient-bronze)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    الابتكار المستدام
                  </span>{" "}
                  لخلق تجارب معمارية استثنائية
                </p>

                <div
                  className="absolute top-0 right-0"
                  style={{
                    pointerEvents: "none",
                    top: "1px",
                    right: "1px",
                    width: "80px",
                    height: "80px",
                    borderRadius: "0 1rem 0 0",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-full h-full"
                    style={{
                      background:
                        "radial-gradient(circle at top right, var(--secondary) 0%, transparent 70%)",
                      opacity: 0.3,
                    }}
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0"
                  style={{
                    pointerEvents: "none",
                    bottom: "1px",
                    left: "1px",
                    width: "80px",
                    height: "80px",
                    borderRadius: "0 0 0 1rem",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 w-full h-full"
                    style={{
                      background:
                        "radial-gradient(circle at bottom left, var(--accent-bronze) 0%, transparent 70%)",
                      opacity: 0.2,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission Pillars */}
          <motion.div
            initial={fadeInUp.initial}
            animate={isInView ? fadeInUp.animate : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {MISSION_PILLARS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={fadeInUp.initial}
                animate={isInView ? fadeInUp.animate : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.7 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="group relative rounded-2xl p-6 overflow-hidden cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow:
                    "0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                }}
              >
                {/* Decorative Element */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg relative"
                  style={{
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <div
                    className="absolute inset-2 rounded-sm flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <span
                      className="text-xl font-bold"
                      style={{
                        color: "rgba(255, 255, 255, 0.95)",
                        fontFamily: "var(--font-arabic), Arial, sans-serif",
                      }}
                    >
                      {String(i + 1).replace(
                        /\d/g,
                        (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]
                      )}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <h3
                  className="text-xl md:text-2xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.title}
                </h3>

                <p className="text-base text-white/80 leading-relaxed transition-all duration-300 group-hover:translate-x-1">
                  {item.desc}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full origin-right transition-all duration-500"
                  style={{
                    background: "var(--gradient-gold)",
                  }}
                />

                {/* Corner decoration */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at top right, var(--secondary) 0%, transparent 60%)",
                    opacity: 0.15,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
