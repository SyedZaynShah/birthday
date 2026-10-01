"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

export default function LetterSection() {
  const sectionRef = useRef(null);
  const letterRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const metadataVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: prefersReducedMotion ? 0 : 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.6,
        delay: prefersReducedMotion ? 0 : 0.3 + i * 0.12,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const arrowVariants = {
    animate: prefersReducedMotion
      ? {}
      : {
          y: [0, 4, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        },
  };

  return (
    <section ref={sectionRef} className="letter-section">
      {/* Paper grain texture */}
      <div className="letter-texture" />

      <div className="letter-container">
        {/* Left Column - Metadata */}
        <motion.aside
          className="letter-metadata"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={metadataVariants}
        >
          <div className="letter-meta-label">PRIVATE NOTE</div>
          <div className="letter-meta-line" />
          <div className="letter-meta-number">02 / 05</div>
          <div className="letter-meta-handwritten">two years of knowing you</div>

          <div className="letter-meta-footer">
            <div className="letter-meta-date">OCTOBER 02, 2026</div>
            <div className="letter-meta-tagline">22 YEARS / ONE MAHEEN</div>
          </div>
        </motion.aside>

        {/* Right Column - Letter Paper */}
        <motion.div
          ref={letterRef}
          className="letter-paper"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Letter Header */}
          <div className="letter-header">
            <h2 className="letter-greeting">DEAR MAHEEN,</h2>
            <div className="letter-header-line" />
          </div>

          {/* Letter Content */}
          <div className="letter-content">
            <motion.p
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              So... <span className="letter-emphasis">22.</span>
            </motion.p>

            <motion.p
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              Honestly, pata nahi itni jaldi 22 kaise ho gayi, but congratulations, I guess. Ab technically tum adult ho, although tumhari mathematical abilities dekh kar mujhe is baat par thora doubt hota hai.
            </motion.p>

            <motion.p
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              We've been talking for almost two years now, which is actually impressive considering tumhari yapping capacity kisi normal human ki capacity se kaafi zyada hai.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              But jokes aside, you're <span className="letter-emphasis">genuinely one of the few people who are actually easy to talk to</span>.
            </motion.p>

            <motion.p
              custom={4}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              You're beautiful, you're kind, aur kabhi kabhi... <em>surprisingly</em> funny bhi ho.
            </motion.p>

            <motion.p
              custom={5}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              Kabhi kabhi.
            </motion.p>

            <motion.p
              custom={6}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              Please don't let that sentence inflate your ego.
            </motion.p>

            <motion.div
              className="letter-annotation-wrapper"
              custom={7}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              <p>
                In these two years, I've somehow heard about your photography skills, your flowers, your <span className="letter-emphasis">extremely small waist</span>, random stories that somehow become 40-minute discussions, and probably things I never actually needed to know.
              </p>
              <span className="letter-annotation letter-annotation-1">
                she brings this up a lot.
              </span>
            </motion.div>

            <motion.div
              className="letter-annotation-wrapper"
              custom={8}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              <p>Lekin phir bhi sun leta hoon.</p>
              <span className="letter-annotation letter-annotation-2">
                photographer's approval required.
              </span>
            </motion.div>

            <motion.p
              custom={9}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              That's friendship, I suppose.
            </motion.p>

            <motion.p
              custom={10}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              Aur haan, tumhara ye confidence ke tum bohat funny ho... honestly admirable hai. Evidence abhi tak thora weak hai, but confidence strong hai.
            </motion.p>

            <motion.p
              custom={11}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              Anyway, you're <span className="letter-emphasis">22</span> now.
            </motion.p>

            <motion.p
              custom={12}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              So instead of sending you the usual:
            </motion.p>

            <motion.p
              custom={13}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
              className="letter-quote"
            >
              <span className="letter-emphasis">"Happy Birthday Maheen, Allah tumhein hamesha khush rakhe ❤️"</span>
            </motion.p>

            <motion.p
              custom={14}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              which would be completely acceptable and take approximately 12 seconds...
            </motion.p>

            <motion.p
              custom={15}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              I made you an entire website.
            </motion.p>

            <motion.p
              custom={16}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              Yes.
            </motion.p>

            <motion.p
              custom={17}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              <span className="letter-emphasis letter-emphasis-interactive">A whole website.</span>
            </motion.p>

            <motion.p
              custom={18}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              Apparently do saal kisi se baat karne ke baad insaan ke paas itna free time aa hi jata hai.
            </motion.p>

            <motion.p
              custom={19}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              So here's to 22.
            </motion.p>

            <motion.p
              custom={20}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              I hope this year gives you beautiful pictures, your favorite flowers, plenty of reasons to laugh, fewer encounters with mathematics, and hopefully enough good memories to fill several more years of me having to listen to your yapping.
            </motion.p>

            <motion.p
              custom={21}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
              className="letter-birthday-wish"
            >
              <span className="letter-emphasis">Happy Birthday, Maheen.</span>
            </motion.p>

            <motion.p
              custom={22}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              Stay beautiful.
            </motion.p>

            <motion.p
              custom={23}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              Stay annoying.
            </motion.p>

            <motion.p
              custom={24}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={paragraphVariants}
            >
              And please, for everyone's sake, stay away from mathematics.
            </motion.p>
          </div>

          {/* Signature */}
          <motion.div
            className="letter-signature"
            custom={25}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={paragraphVariants}
          >
            <div className="letter-signature-name">— Zain</div>
          </motion.div>

          {/* Pressed flower decoration */}
          <motion.div
            className="letter-flower"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.85 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg
              width="60"
              height="85"
              viewBox="0 0 60 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Pressed tulip stem */}
              <path
                d="M30 85 L30 25"
                stroke="#2D3A2E"
                strokeWidth="1.5"
                opacity="0.7"
              />
              {/* Leaf */}
              <ellipse
                cx="22"
                cy="55"
                rx="8"
                ry="5"
                fill="#2D3A2E"
                opacity="0.5"
              />
              {/* Tulip petals */}
              <ellipse cx="30" cy="18" rx="10" ry="16" fill="#641C2D" opacity="0.75" />
              <ellipse cx="26" cy="20" rx="7" ry="12" fill="#5A1826" opacity="0.8" />
              <ellipse cx="34" cy="20" rx="7" ry="12" fill="#5A1826" opacity="0.8" />
            </svg>
          </motion.div>

          {/* Registration mark */}
          <div className="letter-registration">
            <div className="letter-registration-mark" />
            <div className="letter-registration-mark" />
            <div className="letter-registration-mark" />
          </div>
        </motion.div>
      </div>

      {/* Section transition */}
      <motion.div
        className="letter-transition"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="letter-transition-text">THERE'S MORE.</div>
        <div className="letter-transition-cta">
          KEEP READING{" "}
          <motion.span
            className="letter-transition-arrow"
            variants={arrowVariants}
            animate="animate"
          >
            ↓
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
