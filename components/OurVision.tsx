"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const VISION_POINTS = [
  "الريادة في التصميم المعماري المستدام",
  "دمج الهوية السعودية مع الابتكار العالمي",
  "خلق فضاءات تلهم الأجيال القادمة",
];

export default function OurVision() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 1.05]
  );

  return (
    <section
      id="رؤيتنا"
      ref={ref}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #1A1616 50%, #0F0F0F 100%)",
      }}
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-5">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/images/build2black.jpg')` }}
        />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 max-w-6xl mx-auto"
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
              03
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

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <motion.div
                style={{
                  scale: imageScale,
                  boxShadow:
                    "0 30px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15)",
                }}
                className="relative rounded-2xl overflow-hidden group"
              >
                <Image
                  src="/images/build2.jpg"
                  alt="رؤية IEDAR"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />

                <div
                  className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(15, 15, 15, 0.6) 100%)",
                  }}
                />
              </motion.div>

              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-6 -right-6 w-20 h-20 border-2 border-secondary/30 rounded-full"
                style={{
                  boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.15)",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #FFFFFF 0%, var(--secondary-light) 50%, var(--secondary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: "1.1",
                  paddingBottom: "0.25rem",
                }}
              >
                رؤيتنا
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-2 origin-right mb-6"
              >
                <div
                  className="h-0.5 w-24 rounded-full"
                  style={{
                    background: "var(--gradient-gold)",
                    boxShadow: "0 4px 16px rgba(255, 255, 255, 0.25)",
                  }}
                />
                <div className="w-2 h-2 bg-secondary rotate-45" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-xl p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-white font-semibold mb-4">
                أن نكون الخيار الأول في المملكة لتحويل الأفكار إلى واقع معماري
                ملهم
              </p>

              <div
                className="absolute top-0 right-0 w-20 h-20"
                style={{
                  background:
                    "radial-gradient(circle at top right, var(--secondary) 0%, transparent 70%)",
                  opacity: 0.2,
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg leading-relaxed text-white/80"
            >
              نطمح لريادة قطاع التصميم المعماري في المملكة من خلال ابتكار فضاءات
              حية تعكس الهوية السعودية وتلبي تطلعات رؤية 2030.
            </motion.p>

            <div className="space-y-3 pt-2">
              {VISION_POINTS.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: -6 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="relative shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                      className="w-3 h-3 rounded-sm"
                      style={{
                        background: "var(--gradient-gold)",
                        boxShadow: "0 4px 12px rgba(255, 255, 255, 0.25)",
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <div
                      className="relative inline-block rounded-lg px-3 py-2 transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                      }}
                    >
                      <p className="text-white/90 font-medium text-base">
                        {item}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
