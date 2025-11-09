"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface Pillar {
  title: string;
  desc: string;
  image: string;
  stats: {
    value: string;
    label: string;
  };
  color: string;
}

const PILLARS: Pillar[] = [
  {
    title: "التصميم المتميز",
    desc: "نبدع تصاميم معمارية فريدة تجمع بين الجمال والوظيفية، مع الاهتمام بكل تفصيلة لتحقيق رؤية عملائنا وتجاوز توقعاتهم",
    image: "/images/build4.jpg",
    stats: { value: "500+", label: "تصميم متميز" },
    color: "#FFFFFF",
  },
  {
    title: "التطوير المعماري",
    desc: "نطور مشاريع معمارية متكاملة من المفهوم إلى التنفيذ، باستخدام أحدث التقنيات والمواد لتحويل الأفكار إلى واقع ملموس",
    image: "/images/build5.jpg",
    stats: { value: "200+", label: "مشروع مطور" },
    color: "#F5F5F5",
  },
  {
    title: "التطوير الحضري",
    desc: "نساهم في تطوير المجتمعات والمناطق الحضرية من خلال تصميم فضاءات متكاملة تعزز جودة الحياة وتنمي الانتماء المجتمعي",
    image: "/images/build6.jpg",
    stats: { value: "50+", label: "مشروع حضري" },
    color: "#E5E5E5",
  },
  {
    title: "التطوير المستدام",
    desc: "نلتزم بممارسات البناء المستدام والتصميم الأخضر، لخلق بيئات صحية تحافظ على الموارد وتحترم الطبيعة",
    image: "/images/build1.jpg",
    stats: { value: "95%", label: "كفاءة طاقة" },
    color: "#808080",
  },
];

export default function OurPillars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePillar, setActivePillar] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentPillar = PILLARS[activePillar];

  useEffect(() => {
    if (!isInView || isPaused) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    }
  }, [isInView, isPaused]);

  useEffect(() => {
    if (!isInView || isPaused) {
      return;
    }

    const startTime = Date.now();
    const duration = 6000;

    const rafId = requestAnimationFrame(() => {
      setProgress(0);
    });

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
      }
    };

    progressIntervalRef.current = setInterval(updateProgress, 16);

    return () => {
      cancelAnimationFrame(rafId);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, [isInView, activePillar, isPaused]);

  useEffect(() => {
    if (!isInView) return;

    const startAutoSwitch = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setActivePillar((prev) => (prev + 1) % PILLARS.length);
          setProgress(0);
        }
      }, 6000);
    };

    startAutoSwitch();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isInView, isPaused]);

  const handlePillarClick = (index: number) => {
    setActivePillar(index);
    setProgress(0);
    setIsPaused(true);
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <section
      id="ركائزنا"
      ref={ref}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #1A1616 50%, #0F0F0F 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
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
              ٥
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

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
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
              ركائزنا
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <div
                className="h-0.5 w-16 rounded-full"
                style={{
                  background: "var(--gradient-gold)",
                  boxShadow: "0 4px 16px rgba(255, 255, 255, 0.25)",
                }}
              />
              <div className="w-2 h-2 bg-secondary rotate-45" />
              <div
                className="h-0.5 w-16 rounded-full"
                style={{
                  background: "var(--gradient-gold)",
                  boxShadow: "0 4px 16px rgba(255, 255, 255, 0.25)",
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              الأسس التي نبني عليها نجاحنا ونقدم من خلالها خدماتنا المتميزة
            </motion.p>
          </div>

          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
              {PILLARS.map((pillar, i) => (
                <motion.button
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePillarClick(i)}
                  className="relative px-5 py-2.5 rounded-xl font-bold text-sm md:text-base transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{
                    background:
                      activePillar === i
                        ? "var(--gradient-gold)"
                        : "rgba(255, 255, 255, 0.05)",
                    color: activePillar === i ? "#0F0F0F" : "#FFFFFF",
                    border:
                      activePillar === i
                        ? "1px solid transparent"
                        : "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow:
                      activePillar === i
                        ? "0 8px 32px rgba(255, 255, 255, 0.25)"
                        : "none",
                  }}
                >
                  <span className="relative z-10">{pillar.title}</span>
                </motion.button>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <div
                className="relative h-1 rounded-full overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                {!isPaused && isInView && (
                  <motion.div
                    className="absolute right-0 top-0 h-full rounded-full"
                    initial={false}
                    animate={{
                      width: `${
                        ((activePillar + progress / 100) / PILLARS.length) * 100
                      }%`,
                    }}
                    transition={{
                      width: { duration: 0.1, ease: "linear" },
                    }}
                    style={{
                      background: "var(--gradient-gold)",
                      boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)",
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-10 items-center min-h-[300px] lg:min-h-[500px]"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {currentPillar.title}
                </h3>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-0.5 w-24 rounded-full origin-right"
                  style={{
                    background: `linear-gradient(to right, ${currentPillar.color}, transparent)`,
                  }}
                />
              </div>

              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                {currentPillar.desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-2xl overflow-hidden group w-full min-h-[250px] lg:min-h-[400px] aspect-4/3"
                style={{
                  boxShadow:
                    "0 30px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                }}
              >
                <Image
                  src={currentPillar.image}
                  alt={currentPillar.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority={activePillar === 0}
                />

                <div
                  className="absolute inset-0 opacity-50 group-hover:opacity-30 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${currentPillar.color}40 0%, rgba(15, 15, 15, 0.7) 100%)`,
                  }}
                />
              </motion.div>

              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${currentPillar.color}40 0%, transparent 70%)`,
                  boxShadow: `0 0 40px ${currentPillar.color}30`,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
