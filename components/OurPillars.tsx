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
}

const PILLARS: Pillar[] = [
  {
    title: "التصميم المتميز",
    desc: "نبدع تصاميم معمارية فريدة تجمع بين الجمال والوظيفية، مع الاهتمام بكل تفصيلة لتحقيق رؤية عملائنا وتجاوز توقعاتهم",
    image: "/images/2.jpg",
    stats: { value: "500+", label: "مشروع تصميم" },
  },
  {
    title: "الاستشارات الهندسية",
    desc: "نقدم استشارات هندسية متخصصة تضمن تنفيذ المشاريع بأعلى معايير الجودة والكفاءة، مع الالتزام بالمعايير الدولية والمحلية",
    image: "/images/3.jpg",
    stats: { value: "1000+", label: "استشارة هندسية" },
  },
  {
    title: "إدارة المشاريع",
    desc: "نتولى إدارة شاملة للمشاريع من البداية حتى التسليم، مع ضمان الالتزام بالجداول الزمنية والميزانيات المحددة",
    image: "/images/33.jpg",
    stats: { value: "300+", label: "مشروع منجز" },
  },
  {
    title: "التطوير المستدام",
    desc: "نلتزم بممارسات البناء المستدام والتصميم الأخضر، لخلق بيئات صحية تحافظ على الموارد وتحترم الطبيعة",
    image: "/images/2.jpg",
    stats: { value: "95%", label: "كفاءة طاقة" },
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
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const currentPillar = PILLARS[activePillar];

  // Clean up interval when paused or not in view
  useEffect(() => {
    if (!isInView || isPaused) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    }
  }, [isInView, isPaused]);

  // Progress tracking
  useEffect(() => {
    if (!isInView || isPaused) {
      return;
    }

    const startTime = Date.now();
    const duration = 5000;

    // Reset progress asynchronously to avoid cascading renders
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

  // Auto-switch logic
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
      }, 5000);
    };

    // Start auto-switch when section is in view
    startAutoSwitch();

    // Cleanup on unmount or when out of view
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isInView, isPaused]);

  const handlePillarClick = (index: number) => {
    setActivePillar(index);
    setProgress(0);
    // Pause auto-switch temporarily
    setIsPaused(true);
    // Resume after 10 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <section
      id="ركائزنا"
      ref={ref}
      className="relative py-32 bg-primary overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            ركائزنا
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-1 bg-secondary mb-8 mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            الأسس التي نبني عليها نجاحنا ونقدم من خلالها خدماتنا المتميزة
          </motion.p>
        </div>

        {/* Pillars Navigation */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
            {PILLARS.map((pillar, i) => (
              <motion.button
                key={pillar.title}
                ref={(el) => {
                  buttonsRef.current[i] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePillarClick(i)}
                className={`relative px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer ${
                  activePillar === i
                    ? "bg-secondary text-primary shadow-lg"
                    : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="relative z-10">{pillar.title}</span>

                {/* Active indicator dot */}
                {activePillar === i && (
                  <motion.div
                    layoutId="activePillarDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-secondary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Clean Progress Bar - RTL aligned */}
          <div className="max-w-2xl mx-auto">
            <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
              {!isPaused && isInView && (
                <motion.div
                  className="absolute right-0 top-0 h-full bg-secondary rounded-full"
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
                    boxShadow: "0 0 10px rgba(236, 211, 109, 0.5)",
                  }}
                />
              )}
              {isPaused && (
                <motion.div
                  className="absolute right-0 top-0 h-full bg-secondary/30 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    width: `${((activePillar + 1) / PILLARS.length) * 100}%`,
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Active Pillar Content */}
        <motion.div
          key={activePillar}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {currentPillar.title}
            </h3>

            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {currentPillar.desc}
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-5xl font-bold text-secondary">
                {currentPillar.stats.value}
              </div>
              <div className="text-white/80 font-medium">
                {currentPillar.stats.label}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={currentPillar.image}
                alt={currentPillar.title}
                width={800}
                height={600}
                className="w-full h-auto"
                priority={activePillar === 0}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10, 10, 10, 0.8), transparent)",
                }}
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-secondary/30 rounded-full blur-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
