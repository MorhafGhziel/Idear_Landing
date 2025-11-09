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
      className="relative py-32 bg-primary overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <motion.h2
            initial={fadeInUp.initial}
            animate={isInView ? fadeInUp.animate : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-center mb-8 text-white leading-tight"
          >
            قصتنا
          </motion.h2>

          {/* Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-[2px] bg-secondary mb-16 mx-auto"
          />

          {/* Description */}
          <motion.p
            initial={fadeInUp.initial}
            animate={isInView ? fadeInUp.animate : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl leading-relaxed text-white/80 text-center max-w-4xl mx-auto"
          >
            لأننا في <span className="text-secondary font-bold">IEDAR</span> نؤمن أن كل
            دار تبدأ بفكرة، وكل فكرة تحتاج مساحة تنبض بالحياة. كونا منظومة لا تبني
            جدارًا فحسب، بل تصنع بيئات تلهم وتمنحك شعور الإنتماء للدار
          </motion.p>
        </div>
      </div>
    </section>
  );
}

