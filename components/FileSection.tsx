"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import Image from "next/image";

export default function FileSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.8,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section ref={sectionRef} className="gallery-section">
      {/* Wall texture */}
      <div className="gallery-wall-texture" />
      
      {/* Baseboard */}
      <div className="gallery-baseboard" />

      <div className="gallery-container">
        {/* Section header */}
        <motion.div
          className="gallery-header"
          custom={0.2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <div className="gallery-section-number">03 / 05</div>
          <h2 className="gallery-title">A PORTRAIT OF MAHEEN</h2>
          <p className="gallery-subtitle">
            Some people get photographed. Some people become the photograph.
          </p>
        </motion.div>

        {/* Left text content */}
        <motion.div
          className="gallery-content"
          custom={0.4}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <div className="gallery-content-label">THE SUBJECT</div>
          <h3 className="gallery-content-heading">
            Beautiful, unfortunately aware of it.
          </h3>
          <p className="gallery-content-text">
            Twenty-two years of existence, questionable mathematical decisions, excellent taste in flowers, and an apparently unlimited supply of things to talk about.
          </p>
          <div className="gallery-annotation">
            she would disagree with this description
          </div>
        </motion.div>

        {/* Portrait - completely static, no animation on the image itself */}
        <div className="gallery-portrait-wrapper">
          <div className="gallery-portrait">
            <Image
              src="/images/maheen1.png"
              alt="Portrait of Maheen"
              width={560}
              height={800}
              priority
              className="gallery-portrait-image"
            />
          </div>

          {/* Museum label */}
          <motion.div
            className="gallery-label"
            custom={0.6}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <div className="gallery-label-title">MAHEEN</div>
            <div className="gallery-label-year">2026</div>
            <div className="gallery-label-details">
              <div>Private portrait</div>
              <div>Mixed media / digital watercolor</div>
            </div>
          </motion.div>
        </div>

        {/* Subtle architectural details */}
        <motion.div
          className="gallery-archive-mark"
          custom={0.8}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <div className="gallery-archive-line" />
          <div className="gallery-archive-text">ARCHIVE / 03</div>
        </motion.div>

        <motion.div
          className="gallery-date"
          custom={0.9}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          02 OCTOBER 2026
        </motion.div>

        {/* Registration mark near portrait */}
        <div className="gallery-registration-mark" />

        {/* Section transition */}
        <motion.div
          className="gallery-transition"
          custom={1.0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          THE EXHIBITION CONTINUES ↓
        </motion.div>
      </div>
    </section>
  );
}
