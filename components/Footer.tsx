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
    href: "https://x.com/iedar_sa",
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
    href: "https://www.instagram.com/iedar.sa/",
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
    name: "linkedin",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const CONTACT_INFO = [
  { icon: "📍", text: "الرياض، المملكة العربية السعودية" },
  { icon: "📧", text: "info@iedar.sa" },
  { icon: "📞", text: "+966 571077778" },
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
              "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%)",
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
                    boxShadow: "0 4px 16px rgba(255, 255, 255, 0.2)",
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
                    target="_blank"
                    rel="noopener noreferrer"
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
                      transition: { duration: 0.15, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-10 h-10 rounded-lg flex items-center justify-center group cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      transition:
                        "background 0.15s ease-out, border-color 0.15s ease-out",
                    }}
                    aria-label={social.name}
                  >
                    <span
                      className="relative z-10 text-secondary group-hover:text-secondary-light"
                      style={{ transition: "color 0.15s ease-out" }}
                    >
                      {social.icon}
                    </span>
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        boxShadow: "0 0 24px rgba(255, 255, 255, 0.25)",
                        transition: "opacity 0.15s ease-out",
                      }}
                    />
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
                      whileHover={{
                        x: -4,
                        transition: { duration: 0.15, ease: "easeOut" },
                      }}
                    >
                      <a
                        href={`#${link}`}
                        className="text-white/60 hover:text-secondary inline-flex items-center gap-2 text-sm group cursor-pointer"
                        style={{ transition: "color 0.15s ease-out" }}
                      >
                        <motion.span
                          className="w-1 h-1 rounded-full bg-secondary/50 group-hover:bg-secondary"
                          whileHover={{
                            scale: 1.5,
                            transition: { duration: 0.15, ease: "easeOut" },
                          }}
                          style={{
                            transition: "background-color 0.15s ease-out",
                          }}
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
                      whileHover={{
                        x: 4,
                        transition: { duration: 0.15, ease: "easeOut" },
                      }}
                      className="flex items-start gap-3 group cursor-pointer"
                    >
                      <span
                        className="text-lg shrink-0 group-hover:scale-110"
                        style={{ transition: "transform 0.15s ease-out" }}
                      >
                        {info.icon}
                      </span>
                      <span
                        className="text-white/70 group-hover:text-white/90 text-sm"
                        style={{
                          transition: "color 0.15s ease-out",
                          direction: info.icon === "📞" ? "ltr" : "rtl",
                        }}
                      >
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
                  "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center text-white/50 text-xs"
          >
            <p className="flex items-center gap-2">
              <span>© 2025 IEDAR</span>
              <span className="w-1 h-1 rounded-full bg-secondary/50" />
              <span>جميع الحقوق محفوظة</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
