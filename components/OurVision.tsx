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

  return (
    <section
      id="رؤيتنا"
      ref={ref}
      className="relative py-32 bg-background overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('/images/2.jpg')` }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/3.jpg"
                alt="رؤية IDEAR"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 w-24 h-24 bg-secondary/30 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              رؤيتنا
            </h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-1 bg-secondary mb-8 origin-right"
            />

            <p className="text-xl leading-relaxed text-white/90 mb-6 font-medium text-pretty">
              أن نكون الخيار الأول في المملكة لتحويل الأفكار إلى واقع معماري ملهم
            </p>

            <p className="text-lg leading-relaxed text-white/70 mb-8">
              نطمح لريادة قطاع التصميم المعماري في المملكة من خلال ابتكار فضاءات حية
              تعكس الهوية السعودية وتلبي تطلعات رؤية 2030. نسعى لأن نكون جسراً يربط
              بين التراث الأصيل والحداثة المستدامة، ونخلق بيئات ملهمة تحفز الإبداع
              وتعزز الانتماء.
            </p>

            <div className="space-y-4">
              {VISION_POINTS.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-3 h-3 bg-secondary rounded-full" />
                  <p className="text-white/80 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

