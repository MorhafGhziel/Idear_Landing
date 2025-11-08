"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MissionPillar {
  title: string;
  desc: string;
}

const MISSION_PILLARS: MissionPillar[] = [
  { title: "الهوية السعودية", desc: "نحتفي بتراثنا الغني ونعكسه في كل تصميم" },
  { title: "الاستدامة", desc: "نبني للمستقبل مع احترام البيئة والموارد" },
  { title: "الابتكار", desc: "نستشرف المستقبل بحلول معمارية رائدة" },
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
      className="relative py-32 bg-primary overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={fadeInUp.initial}
            animate={isInView ? fadeInUp.animate : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
          >
            رسالتنا
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-1 bg-secondary mb-12 mx-auto"
          />

          <motion.p
            initial={fadeInUp.initial}
            animate={isInView ? fadeInUp.animate : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl leading-relaxed text-white/90 mb-8 text-pretty"
          >
            نسعى لتحويل كل فكرة إلى فضاء حي يلهم الانتماء، حيث نجمع بين الهوية
            السعودية الأصيلة والابتكار المستدام لخلق تجارب معمارية استثنائية تحتفي
            بالماضي وتستشرف المستقبل
          </motion.p>

          <motion.div
            initial={fadeInUp.initial}
            animate={isInView ? fadeInUp.animate : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16"
          >
            {MISSION_PILLARS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={fadeInUp.initial}
                animate={isInView ? fadeInUp.animate : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -16,
                  transition: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="group relative rounded-3xl p-8 md:p-10 overflow-hidden cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                  border: "1px solid rgba(236, 211, 109, 0.2)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* Dynamic Shadow on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none -z-10"
                  initial={false}
                  transition={{ duration: 0.4 }}
                  style={{
                    boxShadow:
                      "0 20px 60px rgba(236, 211, 109, 0.15), 0 8px 24px rgba(0, 0, 0, 0.5)",
                  }}
                />

                {/* Animated Background Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.5 }}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(236, 211, 109, 0.08) 0%, rgba(236, 211, 109, 0.02) 100%)",
                  }}
                />

                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl"
                  initial={false}
                  transition={{ duration: 0.5 }}
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(236, 211, 109, 0.3) 0%, transparent 70%)",
                  }}
                />

                {/* Top Border Glow */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.5 }}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(236, 211, 109, 0.6), transparent)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-secondary mb-5 leading-tight"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    className="text-base md:text-lg text-white/80 leading-relaxed flex-grow"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.desc}
                  </motion.p>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="mt-6 h-[2px] w-0 group-hover:w-full origin-left"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(236, 211, 109, 0.6), transparent)",
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                {/* Corner Accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(236, 211, 109, 0.2), transparent 70%)",
                  }}
                />

                {/* Bottom Corner Accent */}
                <div
                  className="absolute bottom-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at bottom left, rgba(236, 211, 109, 0.15), transparent 70%)",
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

