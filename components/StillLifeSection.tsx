"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

export default function StillLifeSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.9,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section ref={sectionRef} className="stilllife-section">
      {/* Paper texture */}
      <div className="stilllife-texture" />

      <div className="stilllife-container">
        {/* Header */}
        <motion.div
          className="stilllife-header"
          custom={0.2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <div className="stilllife-number">04 / 05</div>
          <h2 className="stilllife-title">THE THINGS SHE LIKES</h2>
          <p className="stilllife-intro">
            A small collection of things that somehow became very Maheen.
          </p>
        </motion.div>

        {/* Left observations */}
        <motion.div
          className="stilllife-observations"
          custom={0.4}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <div className="stilllife-observation">
            <div className="stilllife-obs-label">01 / FLOWERS</div>
            <div className="stilllife-obs-title">Tulips. Lilies. Roses.</div>
            <div className="stilllife-obs-note">
              Apparently, choosing just one was never an option.
            </div>
          </div>

          <div className="stilllife-observation">
            <div className="stilllife-obs-label">02 / PHOTOGRAPHY</div>
            <div className="stilllife-obs-title">Always behind the camera.</div>
            <div className="stilllife-obs-note">
              And somehow still manages to look good in front of it.
            </div>
          </div>

          <div className="stilllife-observation">
            <div className="stilllife-obs-label">03 / COLORS</div>
            <div className="stilllife-obs-title">Maroon. Navy. White.</div>
            <div className="stilllife-obs-note">
              Her wardrobe has apparently signed a contract.
            </div>
          </div>
        </motion.div>

        {/* Right still-life composition */}
        <motion.div
          className="stilllife-composition"
          custom={0.3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          {/* Camera element */}
          <div className="stilllife-camera">
            <svg
              viewBox="0 0 200 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stilllife-camera-svg"
            >
              {/* Camera body */}
              <rect
                x="20"
                y="40"
                width="160"
                height="100"
                rx="4"
                fill="#101C35"
                opacity="0.95"
              />
              {/* Lens */}
              <circle cx="100" cy="90" r="32" fill="#2A2930" />
              <circle cx="100" cy="90" r="24" fill="#101C35" />
              <circle cx="100" cy="90" r="16" fill="#3A3A40" />
              {/* Viewfinder */}
              <rect x="140" y="50" width="30" height="20" rx="2" fill="#2A2930" />
              {/* Details */}
              <circle cx="50" cy="60" r="4" fill="#641C2D" />
              <rect x="30" y="120" width="40" height="3" rx="1.5" fill="#817B78" />
            </svg>
          </div>

          {/* Flowers */}
          <div className="stilllife-flowers">
            <svg
              viewBox="0 0 280 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stilllife-flowers-svg"
            >
              {/* Main stems */}
              <path d="M140 320 L140 80" stroke="#3A4A3A" strokeWidth="3" />
              <path d="M100 320 L110 140" stroke="#3A4A3A" strokeWidth="2.5" />
              <path d="M180 320 L170 160" stroke="#3A4A3A" strokeWidth="2.5" />
              
              {/* Leaves */}
              <ellipse cx="120" cy="200" rx="18" ry="12" fill="#3A4A3A" opacity="0.8" />
              <ellipse cx="160" cy="180" rx="16" ry="10" fill="#3A4A3A" opacity="0.8" />
              <ellipse cx="110" cy="240" rx="14" ry="9" fill="#3A4A3A" opacity="0.75" />

              {/* Rose (burgundy) */}
              <g>
                <ellipse cx="140" cy="80" rx="24" ry="22" fill="#641C2D" opacity="0.9" />
                <ellipse cx="133" cy="77" rx="18" ry="16" fill="#5A1826" opacity="0.95" />
                <ellipse cx="147" cy="77" rx="18" ry="16" fill="#5A1826" opacity="0.95" />
                <ellipse cx="140" cy="75" rx="14" ry="12" fill="#4D1420" />
                <circle cx="140" cy="78" r="8" fill="#3D0F18" />
              </g>

              {/* Lily (white) */}
              <g>
                <path d="M110 140 Q100 125 95 105 Q103 115 110 118" fill="#FBF9F5" stroke="#E8DFD0" strokeWidth="1.5" />
                <path d="M110 140 Q120 125 125 105 Q117 115 110 118" fill="#FBF9F5" stroke="#E8DFD0" strokeWidth="1.5" />
                <path d="M110 140 Q105 122 98 100 Q106 110 110 115" fill="#F7F3ED" stroke="#E8DFD0" strokeWidth="1.5" />
                <path d="M110 140 Q115 122 122 100 Q114 110 110 115" fill="#F7F3ED" stroke="#E8DFD0" strokeWidth="1.5" />
                <circle cx="110" cy="137" r="5" fill="#C9A96E" />
              </g>

              {/* Tulips (deep pink) */}
              <g>
                <ellipse cx="170" cy="155" rx="14" ry="20" fill="#8B3A47" opacity="0.85" />
                <ellipse cx="165" cy="160" rx="10" ry="15" fill="#7A2E3A" />
                <ellipse cx="175" cy="160" rx="10" ry="15" fill="#7A2E3A" />
              </g>
              <g>
                <ellipse cx="185" cy="175" rx="12" ry="18" fill="#8B3A47" opacity="0.8" />
                <ellipse cx="181" cy="179" rx="8" ry="13" fill="#7A2E3A" />
                <ellipse cx="189" cy="179" rx="8" ry="13" fill="#7A2E3A" />
              </g>
            </svg>
          </div>

          {/* Color swatches */}
          <div className="stilllife-swatches">
            <div className="stilllife-swatch" style={{ background: '#641C2D' }}>
              <span>MAROON</span>
            </div>
            <div className="stilllife-swatch" style={{ background: '#101C35' }}>
              <span>NAVY</span>
            </div>
            <div className="stilllife-swatch" style={{ background: '#FFFFFF', border: '1px solid #E8DFD0' }}>
              <span style={{ color: '#101C35' }}>WHITE</span>
            </div>
          </div>

          {/* Handwritten note */}
          <div className="stilllife-handwritten">she has very specific taste</div>

          {/* Small detail */}
          <div className="stilllife-detail">Some preferences become personality.</div>
        </motion.div>

        {/* Section transition */}
        <motion.div
          className="stilllife-transition"
          custom={0.8}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <div className="stilllife-transition-main">ONE LAST THING.</div>
          <div className="stilllife-transition-sub">And this one comes with flowers.</div>
          <div className="stilllife-transition-arrow">05 / 05 ↓</div>
        </motion.div>
      </div>
    </section>
  );
}
