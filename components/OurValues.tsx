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
      icon: "🏛️",
      gradient: "from-[#C9A961] to-[#B89750]",
    },
    {
      title: "الابتكار",
      desc: "نستشرف المستقبل بحلول معمارية رائدة تواكب العصر",
      icon: "💡",
      gradient: "from-[#E5C570] to-[#C9A961]",
    },
    {
      title: "الاستدامة",
      desc: "نلتزم بحماية البيئة وبناء مستقبل أخضر للأجيال القادمة",
      icon: "🌱",
      gradient: "from-[#A67C52] to-[#8B6F47]",
    },
    {
      title: "التميز",
      desc: "نسعى للكمال في كل تفصيلة ونقدم أعلى معايير الجودة",
      icon: "⭐",
      gradient: "from-[#D4B96A] to-[#C9A961]",
    },
    {
      title: "الانتماء",
      desc: "نخلق فضاءات تعزز الروابط الإنسانية وتحتضن المجتمع",
      icon: "🤝",
      gradient: "from-[#C9A961] to-[#A67C52]",
    },
    {
      title: "الإلهام",
      desc: "نصمم بيئات تحفز الإبداع وتلهم العقول والقلوب",
      icon: "✨",
      gradient: "from-[#E5C570] to-[#B89750]",
    },
  ];

  return (
    <section
      id="قيمنا"
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
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.12, 0.06],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(201, 169, 97, 0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(166, 124, 82, 0.12) 0%, transparent 70%)",
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
              04
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              قيمنا
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
                  boxShadow: "0 4px 16px rgba(201, 169, 97, 0.3)",
                }}
              />
              <div className="w-2 h-2 bg-secondary rotate-45" />
              <div
                className="h-0.5 w-16 rounded-full"
                style={{
                  background: "var(--gradient-gold)",
                  boxShadow: "0 4px 16px rgba(201, 169, 97, 0.3)",
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              القيم التي نؤمن بها وتوجه عملنا في كل تصميم نبدعه
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -12,
                  transition: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="group relative cursor-pointer"
              >
                <div
                  className="relative rounded-2xl p-6 h-full overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                    border: "1px solid rgba(201, 169, 97, 0.2)",
                    boxShadow:
                      "0 10px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className={`mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${value.gradient} relative overflow-hidden`}
                    style={{
                      boxShadow: "0 8px 32px rgba(201, 169, 97, 0.25)",
                    }}
                  >
                    <span className="text-2xl relative z-10 filter drop-shadow-sm">
                      {value.icon}
                    </span>
                  </motion.div>

                  <h3
                    className={`text-xl md:text-2xl font-bold mb-3 transition-all duration-300 group-hover:translate-y-[-2px]`}
                    style={{
                      background: "var(--gradient-gold)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value.title}
                  </h3>

                  <p className="text-base text-white/80 leading-relaxed transition-all duration-300 group-hover:text-white/90">
                    {value.desc}
                  </p>

                  <motion.div
                    className={`mt-4 h-0.5 w-0 group-hover:w-full rounded-full origin-right transition-all duration-500 bg-linear-to-r ${value.gradient}`}
                  />

                  <div
                    className={`absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br ${value.gradient}`}
                    style={{
                      maskImage:
                        "radial-gradient(circle at top right, black 0%, transparent 60%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at top right, black 0%, transparent 60%)",
                      opacity: 0.1,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
