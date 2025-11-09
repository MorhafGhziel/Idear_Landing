"use client";

import { motion, useInView } from "framer-motion";

import { useRef } from "react";

export default function OurValues() {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      title: "الأصالة",
      desc: "نحتفي بالهوية السعودية ونعكس تراثنا في كل تصميم نبدعه",
    },
    {
      title: "الابتكار",
      desc: "نستشرف المستقبل بحلول معمارية رائدة تواكب العصر",
    },
    {
      title: "الاستدامة",
      desc: "نلتزم بحماية البيئة وبناء مستقبل أخضر للأجيال القادمة",
    },
    {
      title: "التميز",
      desc: "نسعى للكمال في كل تفصيلة ونقدم أعلى معايير الجودة",
    },
    {
      title: "الانتماء",
      desc: "نخلق فضاءات تعزز الروابط الإنسانية وتحتضن المجتمع",
    },
    {
      title: "الإلهام",
      desc: "نصمم بيئات تحفز الإبداع وتلهم العقول والقلوب",
    },
  ];

  return (
    <section
      id="قيمنا"
      ref={ref}
      className="relative py-32 bg-linear-to-b from-background to-primary/5 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-secondary to-transparent" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/3 rounded-full blur-3xl"
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            y: [0, -30, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-32 right-20 w-32 h-32 border border-secondary/10 rounded-lg"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, 40, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-40 left-16 w-24 h-24 border border-secondary/10 rounded-full"
        />

        {/* Animated Gradient Mesh */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(236, 211, 109, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(236, 211, 109, 0.08) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            قيمنا
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
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            القيم التي نؤمن بها وتوجه عملنا في كل تصميم نبدعه
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * i,
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
                  "linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.85) 100%)",
                border: "1px solid rgba(236, 211, 109, 0.15)",
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
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.5 }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(236, 211, 109, 0.6), transparent)",
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Title */}
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {value.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-base md:text-lg text-white/75 leading-relaxed grow"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {value.desc}
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
        </div>
      </div>
    </section>
  );
}
