"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

export default function FinalSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 1.2,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section ref={sectionRef} className="final-section">
      {/* Soft lighting effect */}
      <div className="final-lighting" />

      <div className="final-container">
        {/* Left content */}
        <motion.div
          className="final-content"
          custom={0.3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <div className="final-number">05 / 05</div>
          <h2 className="final-title">FOR MAHEEN</h2>

          <div className="final-label">A SMALL DELIVERY</div>
          <p className="final-message">
            Because flowers seemed more appropriate than another message saying "HBD."
          </p>

          <p className="final-description">
            Tulips, lilies, roses. Your favorites, gathered into one place.
          </p>

          <div className="final-birthday">
            <div className="final-birthday-label">HAPPY 22ND, MAHEEN.</div>
            <p className="final-birthday-text">
              Here's to another year of beautiful pictures, good flowers, questionable mathematics, and an unreasonable amount of yapping.
            </p>
          </div>

          <div className="final-signature">
            <div className="final-signature-name">— Zain</div>
            <div className="final-signature-date">02.10.2026</div>
          </div>

          <div className="final-closing">
            <div>Stay beautiful.</div>
            <div>Stay annoying.</div>
            <div className="final-closing-last">And please stay away from mathematics.</div>
          </div>
        </motion.div>

        {/* Right bouquet */}
        <motion.div
          className="final-bouquet-wrapper"
          custom={0.4}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <svg
            className="final-bouquet"
            viewBox="0 0 500 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="A bouquet of burgundy roses, white lilies, and deep pink tulips arranged for Maheen's 22nd birthday"
          >
            {/* Wrapping paper - deep navy */}
            <path
              d="M 150 500 L 120 700 L 380 700 L 350 500 Q 340 480 250 480 Q 160 480 150 500 Z"
              fill="#101C35"
              opacity="0.95"
            />
            {/* Paper folds */}
            <path d="M 180 600 L 170 700" stroke="#0A1420" strokeWidth="1" opacity="0.3" />
            <path d="M 320 600 L 330 700" stroke="#0A1420" strokeWidth="1" opacity="0.3" />
            
            {/* Ribbon - burgundy */}
            <ellipse cx="250" cy="490" rx="80" ry="12" fill="#641C2D" opacity="0.9" />
            <rect x="245" y="490" width="10" height="40" fill="#641C2D" opacity="0.85" />
            <rect x="235" y="530" width="30" height="6" rx="3" fill="#5A1826" />

            {/* Main stems */}
            <path d="M 250 480 L 250 200" stroke="#2D3A2E" strokeWidth="4" opacity="0.8" />
            <path d="M 200 480 L 210 220" stroke="#2D3A2E" strokeWidth="3.5" opacity="0.8" />
            <path d="M 300 480 L 290 240" stroke="#2D3A2E" strokeWidth="3.5" opacity="0.8" />
            <path d="M 180 480 L 190 280" stroke="#2D3A2E" strokeWidth="3" opacity="0.75" />
            <path d="M 320 480 L 310 260" stroke="#2D3A2E" strokeWidth="3" opacity="0.75" />

            {/* Foliage - scattered leaves */}
            <ellipse cx="220" cy="350" rx="20" ry="12" fill="#2D3A2E" opacity="0.7" transform="rotate(-25 220 350)" />
            <ellipse cx="280" cy="330" rx="18" ry="11" fill="#2D3A2E" opacity="0.7" transform="rotate(20 280 330)" />
            <ellipse cx="190" cy="380" rx="16" ry="10" fill="#2D3A2E" opacity="0.65" transform="rotate(-30 190 380)" />
            <ellipse cx="310" cy="360" rx="17" ry="10" fill="#2D3A2E" opacity="0.65" transform="rotate(25 310 360)" />
            <ellipse cx="240" cy="400" rx="15" ry="9" fill="#2D3A2E" opacity="0.6" transform="rotate(-15 240 400)" />

            {/* Center rose - large burgundy */}
            <g>
              <ellipse cx="250" cy="200" rx="35" ry="32" fill="#641C2D" opacity="0.9" />
              <ellipse cx="240" cy="195" rx="28" ry="25" fill="#5A1826" opacity="0.95" />
              <ellipse cx="260" cy="195" rx="28" ry="25" fill="#5A1826" opacity="0.95" />
              <ellipse cx="250" cy="192" rx="22" ry="20" fill="#4D1420" />
              <ellipse cx="250" cy="198" rx="16" ry="14" fill="#3D0F18" />
              <circle cx="250" cy="198" r="10" fill="#2A0A10" />
            </g>

            {/* Left rose - wine red */}
            <g>
              <ellipse cx="210" cy="220" rx="32" ry="29" fill="#6B1F2E" opacity="0.88" />
              <ellipse cx="202" cy="216" rx="25" ry="22" fill="#5A1826" opacity="0.92" />
              <ellipse cx="218" cy="216" rx="25" ry="22" fill="#5A1826" opacity="0.92" />
              <ellipse cx="210" cy="213" rx="20" ry="18" fill="#4D1420" />
              <circle cx="210" cy="218" r="12" fill="#3D0F18" />
            </g>

            {/* Right rose - deep burgundy */}
            <g>
              <ellipse cx="290" cy="240" rx="30" ry="28" fill="#5F1A28" opacity="0.9" />
              <ellipse cx="283" cy="236" rx="24" ry="21" fill="#5A1826" opacity="0.94" />
              <ellipse cx="297" cy="236" rx="24" ry="21" fill="#5A1826" opacity="0.94" />
              <ellipse cx="290" cy="233" rx="18" ry="16" fill="#4D1420" />
              <circle cx="290" cy="238" r="11" fill="#3D0F18" />
            </g>

            {/* White lily - top left */}
            <g>
              <path d="M 190 280 Q 175 260 168 235 Q 178 248 190 252" fill="#FBF9F5" stroke="#E8DFD0" strokeWidth="1.8" />
              <path d="M 190 280 Q 205 260 212 235 Q 202 248 190 252" fill="#FBF9F5" stroke="#E8DFD0" strokeWidth="1.8" />
              <path d="M 190 280 Q 183 257 173 230 Q 183 243 190 248" fill="#F7F3ED" stroke="#E8DFD0" strokeWidth="1.8" />
              <path d="M 190 280 Q 197 257 207 230 Q 197 243 190 248" fill="#F7F3ED" stroke="#E8DFD0" strokeWidth="1.8" />
              <path d="M 190 280 Q 188 265 180 242 Q 187 252 190 256" fill="#EEEBE5" stroke="#E8DFD0" strokeWidth="1.6" />
              <path d="M 190 280 Q 192 265 200 242 Q 193 252 190 256" fill="#EEEBE5" stroke="#E8DFD0" strokeWidth="1.6" />
              <circle cx="190" cy="275" r="6" fill="#C9A96E" />
            </g>

            {/* White lily - top right */}
            <g>
              <path d="M 310 260 Q 295 242 288 220 Q 298 232 310 236" fill="#FBF9F5" stroke="#E8DFD0" strokeWidth="1.8" />
              <path d="M 310 260 Q 325 242 332 220 Q 322 232 310 236" fill="#FBF9F5" stroke="#E8DFD0" strokeWidth="1.8" />
              <path d="M 310 260 Q 303 240 293 215 Q 303 228 310 232" fill="#F7F3ED" stroke="#E8DFD0" strokeWidth="1.8" />
              <path d="M 310 260 Q 317 240 327 215 Q 317 228 310 232" fill="#F7F3ED" stroke="#E8DFD0" strokeWidth="1.8" />
              <path d="M 310 260 Q 308 248 300 228 Q 307 238 310 242" fill="#EEEBE5" stroke="#E8DFD0" strokeWidth="1.6" />
              <path d="M 310 260 Q 312 248 320 228 Q 313 238 310 242" fill="#EEEBE5" stroke="#E8DFD0" strokeWidth="1.6" />
              <circle cx="310" cy="255" r="6" fill="#C9A96E" />
            </g>

            {/* Tulips - deep pink/burgundy */}
            {/* Tulip 1 - left front */}
            <g>
              <ellipse cx="180" cy="320" rx="20" ry="28" fill="#8B3A47" opacity="0.88" />
              <ellipse cx="174" cy="326" rx="15" ry="21" fill="#7A2E3A" />
              <ellipse cx="186" cy="326" rx="15" ry="21" fill="#7A2E3A" />
            </g>

            {/* Tulip 2 - right front */}
            <g>
              <ellipse cx="320" cy="300" rx="18" ry="26" fill="#8B3A47" opacity="0.86" />
              <ellipse cx="315" cy="305" rx="13" ry="19" fill="#7A2E3A" />
              <ellipse cx="325" cy="305" rx="13" ry="19" fill="#7A2E3A" />
            </g>

            {/* Tulip 3 - center back */}
            <g>
              <ellipse cx="250" cy="280" rx="17" ry="24" fill="#7D3544" opacity="0.82" />
              <ellipse cx="245" cy="285" rx="12" ry="17" fill="#6B2E3A" />
              <ellipse cx="255" cy="285" rx="12" ry="17" fill="#6B2E3A" />
            </g>

            {/* Tulip 4 - left back */}
            <g>
              <ellipse cx="220" cy="300" rx="16" ry="23" fill="#8B3A47" opacity="0.8" />
              <ellipse cx="216" cy="305" rx="11" ry="16" fill="#7A2E3A" />
              <ellipse cx="224" cy="305" rx="11" ry="16" fill="#7A2E3A" />
            </g>

            {/* Tulip 5 - right back */}
            <g>
              <ellipse cx="280" cy="290" rx="15" ry="22" fill="#7D3544" opacity="0.84" />
              <ellipse cx="276" cy="295" rx="10" ry="15" fill="#6B2E3A" />
              <ellipse cx="284" cy="295" rx="10" ry="15" fill="#6B2E3A" />
            </g>

            {/* Gift tag */}
            <g>
              <rect x="260" y="485" width="40" height="28" rx="2" fill="#F7F3ED" opacity="0.95" />
              <text x="280" y="497" fontSize="9" fontWeight="600" fill="#641C2D" textAnchor="middle" letterSpacing="0.5">MAHEEN</text>
              <text x="280" y="508" fontSize="11" fontWeight="400" fill="#101C35" textAnchor="middle">22</text>
            </g>
          </svg>
        </motion.div>

        {/* End marker */}
        <motion.div
          className="final-end"
          custom={1.0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <div className="final-end-text">END OF CORRESPONDENCE</div>
          <div className="final-end-date">02 OCTOBER 2026</div>
          <div className="final-end-line" />
        </motion.div>
      </div>
    </section>
  );
}
