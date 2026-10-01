"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useAudio } from "./BackgroundMusic";

export default function HeroModule() {
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { startMusic } = useAudio();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.7,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const floatVariants = {
    animate: prefersReducedMotion
      ? {}
      : {
          y: [0, -5, 0],
          transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        },
  };

  const scrollIndicatorVariants = {
    animate: prefersReducedMotion
      ? {}
      : {
          y: [0, 8, 0],
          transition: {
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        },
  };

  return (
    <section className="hero-section">
      {/* Background texture and shape */}
      <div className="hero-bg-texture" />
      <div className="hero-bg-shape" />

      {/* Top Header */}
      <motion.header
        className="hero-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="hero-header-left">
          <div className="hero-label">PRIVATE CORRESPONDENCE</div>
          <div className="hero-label-line" />
        </div>
        <div className="hero-header-right">
          <div className="hero-date">OCTOBER 02 / 2026</div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="hero-content">
        <motion.div
          className="hero-eyebrow"
          custom={0.3}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          SUBJECT: MAHEEN
        </motion.div>

        <motion.h1
          className="hero-title"
          custom={0.5}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          MAHEEN
        </motion.h1>

        <motion.div
          className="hero-age"
          custom={0.85}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          22.
        </motion.div>

        <motion.p
          className="hero-joke"
          custom={1.1}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          Unfortunately, she also thinks she's funny.
        </motion.p>

        <motion.a
          href="#gift"
          className="hero-cta"
          custom={1.3}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeUpVariants}
          onClick={(e) => {
            e.preventDefault();
            startMusic();
            document.querySelector('#gift')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="hero-cta-text">OPEN YOUR GIFT</span>
          <span className="hero-cta-arrow">→</span>
          <span className="hero-cta-underline" />
        </motion.a>
      </div>

      {/* Botanical Illustration */}
      <motion.div
        className="hero-botanical"
        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
        animate={
          isLoaded
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: prefersReducedMotion ? 0 : 30 }
        }
        transition={{
          duration: prefersReducedMotion ? 0.5 : 1.4,
          delay: prefersReducedMotion ? 0 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.svg
          className="hero-flowers"
          viewBox="0 0 400 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={floatVariants}
          animate="animate"
        >
          {/* Main lily stem */}
          <motion.path
            d="M200 700 L200 150"
            stroke="#2D3A2E"
            strokeWidth="2.5"
            strokeLinecap="round"
            variants={{
              animate: prefersReducedMotion
                ? {}
                : {
                    y: [0, -3, 0],
                    transition: { duration: 7.2, repeat: Infinity, ease: "easeInOut" as const },
                  },
            }}
            animate="animate"
          />

          {/* Lily leaves */}
          <motion.path
            d="M200 400 Q160 380 140 360"
            stroke="#2D3A2E"
            strokeWidth="2"
            fill="none"
            variants={{
              animate: prefersReducedMotion
                ? {}
                : {
                    y: [0, -4, 0],
                    transition: { duration: 6.8, repeat: Infinity, ease: "easeInOut" as const },
                  },
            }}
            animate="animate"
          />
          <motion.path
            d="M200 350 Q240 340 260 330"
            stroke="#2D3A2E"
            strokeWidth="2"
            fill="none"
            variants={{
              animate: prefersReducedMotion
                ? {}
                : {
                    y: [0, -5, 0],
                    transition: { duration: 7.5, repeat: Infinity, ease: "easeInOut" as const },
                  },
            }}
            animate="animate"
          />

          {/* Lily flower */}
          <motion.g
            variants={{
              animate: prefersReducedMotion
                ? {}
                : {
                    y: [0, -6, 0],
                    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const },
                  },
            }}
            animate="animate"
          >
            {/* Lily petals */}
            <path
              d="M200 150 Q185 130 180 100 Q190 110 200 115"
              fill="#F7F3ED"
              stroke="#E8DFD0"
              strokeWidth="1.5"
            />
            <path
              d="M200 150 Q215 130 220 100 Q210 110 200 115"
              fill="#F7F3ED"
              stroke="#E8DFD0"
              strokeWidth="1.5"
            />
            <path
              d="M200 150 Q195 125 185 95 Q195 105 200 110"
              fill="#FBF8F3"
              stroke="#E8DFD0"
              strokeWidth="1.5"
            />
            <path
              d="M200 150 Q205 125 215 95 Q205 105 200 110"
              fill="#FBF8F3"
              stroke="#E8DFD0"
              strokeWidth="1.5"
            />
            {/* Lily center */}
            <circle cx="200" cy="145" r="4" fill="#C9A96E" />
          </motion.g>

          {/* Rose stem */}
          <motion.path
            d="M320 700 L320 500"
            stroke="#2D3A2E"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              animate: prefersReducedMotion
                ? {}
                : {
                    y: [0, -4, 0],
                    transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut" as const },
                  },
            }}
            animate="animate"
          />

          {/* Rose leaves */}
          <motion.ellipse
            cx="305"
            cy="580"
            rx="15"
            ry="8"
            fill="#2D3A2E"
            opacity="0.8"
            variants={{
              animate: prefersReducedMotion
                ? {}
                : {
                    y: [0, -3, 0],
                    transition: { duration: 6.8, repeat: Infinity, ease: "easeInOut" as const },
                  },
            }}
            animate="animate"
          />
          <motion.ellipse
            cx="335"
            cy="550"
            rx="15"
            ry="8"
            fill="#2D3A2E"
            opacity="0.8"
            variants={{
              animate: prefersReducedMotion
                ? {}
                : {
                    y: [0, -4, 0],
                    transition: { duration: 7.2, repeat: Infinity, ease: "easeInOut" as const },
                  },
            }}
            animate="animate"
          />

          {/* Deep maroon rose */}
          <motion.g
            variants={{
              animate: prefersReducedMotion
                ? {}
                : {
                    y: [0, -5, 0],
                    transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut" as const },
                  },
            }}
            animate="animate"
          >
            {/* Outer petals */}
            <ellipse cx="320" cy="500" rx="28" ry="26" fill="#641C2D" opacity="0.9" />
            <ellipse cx="310" cy="495" rx="22" ry="20" fill="#5A1826" opacity="0.95" />
            <ellipse cx="330" cy="495" rx="22" ry="20" fill="#5A1826" opacity="0.95" />
            {/* Inner petals */}
            <ellipse cx="320" cy="495" rx="18" ry="16" fill="#4D1420" />
            <ellipse cx="320" cy="500" rx="12" ry="10" fill="#3D0F18" />
            {/* Center */}
            <circle cx="320" cy="498" r="6" fill="#2A0A10" />
          </motion.g>

          {/* Tulip stems */}
          <motion.path
            d="M250 700 L260 400"
            stroke="#2D3A2E"
            strokeWidth="1.8"
            strokeLinecap="round"
            variants={{
              animate: prefersReducedMotion
                ? {}
                : {
                    y: [0, -5, 0],
                    transition: { duration: 7.8, repeat: Infinity, ease: "easeInOut" as const },
                  },
            }}
            animate="animate"
          />
          <motion.path
            d="M280 700 L275 450"
            stroke="#2D3A2E"
            strokeWidth="1.8"
            strokeLinecap="round"
            variants={{
              animate: prefersReducedMotion
                ? {}
                : {
                    y: [0, -4, 0],
                    transition: { duration: 7.3, repeat: Infinity, ease: "easeInOut" as const },
                  },
            }}
            animate="animate"
          />

          {/* Tulip 1 - dusty rose */}
          <motion.g
            variants={{
              animate: prefersReducedMotion
                ? {}
                : {
                    y: [0, -6, 0],
                    transition: { duration: 7.8, repeat: Infinity, ease: "easeInOut" as const },
                  },
            }}
            animate="animate"
          >
            <ellipse cx="260" cy="385" rx="16" ry="24" fill="#7D3D4A" opacity="0.85" />
            <ellipse cx="255" cy="390" rx="12" ry="18" fill="#6B2E3A" />
            <ellipse cx="265" cy="390" rx="12" ry="18" fill="#6B2E3A" />
          </motion.g>

          {/* Tulip 2 - muted burgundy */}
          <motion.g
            variants={{
              animate: prefersReducedMotion
                ? {}
                : {
                    y: [0, -5, 0],
                    transition: { duration: 7.3, repeat: Infinity, ease: "easeInOut" as const },
                  },
            }}
            animate="animate"
          >
            <ellipse cx="275" cy="435" rx="14" ry="22" fill="#8B4450" opacity="0.8" />
            <ellipse cx="270" cy="440" rx="10" ry="16" fill="#753842" />
            <ellipse cx="280" cy="440" rx="10" ry="16" fill="#753842" />
          </motion.g>
        </motion.svg>
      </motion.div>

      {/* Bottom metadata */}
      <motion.div
        className="hero-meta-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        FILE 01 / 05
      </motion.div>

      <motion.div
        className="hero-meta-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="hero-meta-line" />
        EST. 2004
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-scroll-text">SCROLL TO CONTINUE</div>
        <motion.div
          className="hero-scroll-line"
          variants={scrollIndicatorVariants}
          animate="animate"
        />
      </motion.div>
    </section>
  );
}
