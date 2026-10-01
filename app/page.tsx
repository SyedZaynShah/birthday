"use client";

import { useEffect } from "react";
import HeroModule from "@/components/HeroModule";
import LetterSection from "@/components/LetterSection";
import FileSection from "@/components/FileSection";
import StillLifeSection from "@/components/StillLifeSection";
import FinalSection from "@/components/FinalSection";
import { AudioProvider, SoundToggle, useAudio } from "@/components/BackgroundMusic";
import { useSectionDetector } from "@/hooks/useSectionDetector";

function PageContent() {
  const { setSection } = useAudio();
  const currentSection = useSectionDetector();

  // Update audio volume when section changes
  useEffect(() => {
    if (currentSection !== null) {
      setSection(currentSection);
    }
  }, [currentSection, setSection]);

  return (
    <>
      <SoundToggle />
      <HeroModule />
      <LetterSection />
      <FileSection />
      <StillLifeSection />
      <FinalSection />
    </>
  );
}

export default function Home() {
  return (
    <AudioProvider>
      <main>
        <PageContent />
      </main>
    </AudioProvider>
  );
}
