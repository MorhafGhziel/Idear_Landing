"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SocialLink {
  name: string;
  icon: React.ReactElement;
  href: string;
}

const NAV_LINKS = ["قصتنا", "رسالتنا", "رؤيتنا", "قيمنا", "ركائزنا"];

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "twitter",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "instagram",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-.97.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.887-.344 1.857-.049 1.023-.06 1.351-.06 3.807v.468c0 2.456.011 2.784.06 3.807.045.97.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.887.3 1.857.344 1.054.048 1.37.06 4.041.06h.08c2.597 0 2.917-.012 3.96-.06.97-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.887.344-1.857.048-1.055.06-1.37.06-4.041v-.08c0-2.597-.012-2.917-.06-3.96-.045-.97-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.887-.3-1.857-.344-1.023-.049-1.351-.06-3.807-.06zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "tiktok",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 010-3.49 2.89 2.89 0 013.7-.33V6.4a6.27 6.27 0 00-1-.08A6.15 6.15 0 006.17 18.1a6.15 6.15 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
];

const CONTACT_INFO = [
  { icon: "📍", text: "الرياض، المملكة العربية السعودية" },
  { icon: "📧", text: "info@iedar.sa" },
  { icon: "📞", text: "+966 XX XXX XXXX" },
];

export default function Footer() {
  return (
    <footer
      className="relative text-white py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0F0F0F 0%, #1A1616 50%, #0F0F0F 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--secondary), transparent)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(201, 169, 97, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <Image
                  src="/icons/iedar.svg"
                  alt="IEDAR Logo"
                  width={180}
                  height={60}
                  className="h-12 md:h-14 w-auto object-contain mb-4"
                />

                <div
                  className="h-0.5 w-20 rounded-full mb-4"
                  style={{
                    background: "var(--gradient-gold)",
                    boxShadow: "0 4px 16px rgba(201, 169, 97, 0.3)",
                  }}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white/70 leading-relaxed mb-6 max-w-md text-base"
              >
                نحول الأفكار إلى فضاءات حية تلهم الانتماء، جامعين بين الهوية
                السعودية والابتكار المستدام
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-2"
              >
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(201, 169, 97, 0.15) 0%, rgba(201, 169, 97, 0.08) 100%)",
                      border: "1px solid rgba(201, 169, 97, 0.2)",
                    }}
                    aria-label={social.name}
                  >
                    <span className="text-secondary group-hover:text-secondary-light transition-colors duration-300">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <div className="md:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3
                  className="text-lg font-bold mb-4"
                  style={{
                    background: "var(--gradient-gold)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  روابط سريعة
                </h3>
                <ul className="space-y-2">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                      whileHover={{ x: -4 }}
                    >
                      <a
                        href={`#${link}`}
                        className="text-white/60 hover:text-secondary transition-colors duration-300 inline-flex items-center gap-2 text-sm group"
                      >
                        <motion.span
                          className="w-1 h-1 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors duration-300"
                          whileHover={{ scale: 1.5 }}
                        />
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="md:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3
                  className="text-lg font-bold mb-4"
                  style={{
                    background: "var(--gradient-gold)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  تواصل معنا
                </h3>
                <ul className="space-y-3">
                  {CONTACT_INFO.map((info, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3 group"
                    >
                      <span className="text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </span>
                      <span className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-sm">
                        {info.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <div
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201, 169, 97, 0.3), transparent)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-xs"
          >
            <p className="flex items-center gap-2">
              <span>© 2025 IEDAR</span>
              <span className="w-1 h-1 rounded-full bg-secondary/50" />
              <span>جميع الحقوق محفوظة</span>
            </p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="hover:text-secondary transition-all duration-300"
              >
                سياسة الخصوصية
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="hover:text-secondary transition-all duration-300"
              >
                الشروط والأحكام
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
