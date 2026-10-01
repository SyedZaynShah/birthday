"use client";

import HeroModule from "@/components/HeroModule";
import LetterSection from "@/components/LetterSection";
import FileSection from "@/components/FileSection";
import StillLifeSection from "@/components/StillLifeSection";
import FinalSection from "@/components/FinalSection";

export default function Home() {
  return (
    <main>
      <HeroModule />
      <LetterSection />
      <FileSection />
      <StillLifeSection />
      <FinalSection />
    </main>
  );
}
