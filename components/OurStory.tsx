"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function OurStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="قصتنا"
      ref={ref}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #1A1616 50%, #0F0F0F 100%)",
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(201, 169, 97, 0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(166, 124, 82, 0.12) 0%, transparent 70%)",
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
                01
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

          {/* Main Heading */}
          <motion.div
            initial={fadeInUp.initial}
            animate={isInView ? fadeInUp.animate : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-none"
              style={{
                background:
                  "linear-gradient(135deg, #FFFFFF 0%, var(--secondary-light) 50%, var(--secondary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              قصتنا
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 origin-right"
            >
              <div
                className="h-0.5 w-24 rounded-full"
                style={{
                  background: "var(--gradient-gold)",
                  boxShadow: "0 4px 16px rgba(201, 169, 97, 0.4)",
                }}
              />
              <div className="w-2 h-2 bg-secondary rotate-45" />
              <div
                className="h-px w-16"
                style={{
                  background:
                    "linear-gradient(to left, var(--secondary), transparent)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="relative rounded-2xl p-8 md:p-10 overflow-hidden group"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                border: "1px solid rgba(201, 169, 97, 0.2)",
                boxShadow:
                  "0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden opacity-60">
                <div
                  className="absolute top-0 right-0 w-full h-full"
                  style={{
                    background:
                      "radial-gradient(circle at top right, var(--secondary) 0%, transparent 50%)",
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-28 h-28 overflow-hidden opacity-40">
                <div
                  className="absolute bottom-0 left-0 w-full h-full"
                  style={{
                    background:
                      "radial-gradient(circle at bottom left, var(--accent-bronze) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mb-4"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center text-4xl font-serif leading-none opacity-30"
                    style={{
                      background: "var(--gradient-gold)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    &ldquo;
                  </div>
                </motion.div>

                <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/95 font-light mb-6 text-pretty">
                  لأننا في{" "}
                  <span
                    className="font-bold relative inline-block px-1"
                    style={{
                      background: "var(--gradient-gold)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    IEDAR
                  </span>{" "}
                  نؤمن أن كل دار تبدأ بفكرة، وكل فكرة تحتاج مساحة تنبض بالحياة.
                  كونا منظومة لا تبني جدارًا فحسب، بل تصنع بيئات تلهم وتمنحك
                  شعور الإنتماء للدار
                </p>

                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-2 mt-8 origin-right"
                >
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  <div
                    className="h-px flex-1 max-w-[200px]"
                    style={{
                      background:
                        "linear-gradient(to left, var(--secondary), transparent)",
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-16 h-16 border border-secondary/30 rounded-xl pointer-events-none"
              style={{
                boxShadow: "inset 0 0 20px rgba(201, 169, 97, 0.1)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
