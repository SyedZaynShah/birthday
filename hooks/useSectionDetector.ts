"use client";

import { useEffect, useState } from "react";

export function useSectionDetector() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sections = [
      document.querySelector('.hero-section'),
      document.querySelector('.letter-section'),
      document.querySelector('.gallery-section'),
      document.querySelector('.stilllife-section'),
      document.querySelector('.final-section'),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const index = sections.indexOf(entry.target as Element);
            if (index !== -1) {
              setCurrentSection(index);
            }
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return currentSection;
}
