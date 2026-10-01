"use client";

import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";

// Audio context for global music control
interface AudioContextType {
  startMusic: () => void;
  setSection: (section: number) => void;
  toggleSound: () => void;
  isPlaying: boolean;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const isFadingRef = useRef(false);

  // Volume targets for each section
  const sectionVolumes = {
    0: 0,      // Hero - silent
    1: 0.21,   // Letter
    2: 0.16,   // Portrait
    3: 0.23,   // Still Life
    4: 0.28,   // Final Bouquet
  };

  // Smooth volume fade utility
  const fadeVolume = useCallback((targetVolume: number, duration: number = 2000) => {
    const audio = audioRef.current;
    if (!audio || isFadingRef.current) return;

    // Cancel any existing fade
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    isFadingRef.current = true;
    const startVolume = audio.volume;
    const volumeDiff = targetVolume - startVolume;
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;
    const volumeStep = volumeDiff / steps;
    let currentStep = 0;

    fadeIntervalRef.current = setInterval(() => {
      if (!audio) return;

      currentStep++;
      const newVolume = startVolume + (volumeStep * currentStep);
      
      if (currentStep >= steps) {
        audio.volume = Math.max(0, Math.min(1, targetVolume));
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
        }
        isFadingRef.current = false;
      } else {
        audio.volume = Math.max(0, Math.min(1, newVolume));
      }
    }, stepDuration);
  }, []);

  // Start music from hero CTA
  const startMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || isPlaying) return;

    audio.volume = 0.08; // Start very quiet
    
    audio.play()
      .then(() => {
        setIsPlaying(true);
        // Fade from 0.08 to 0.24 over 2.5 seconds
        fadeVolume(0.24, 2500);
      })
      .catch((error) => {
        console.error("Audio playback failed:", error);
      });
  }, [isPlaying, fadeVolume]);

  // Update section and adjust volume
  const setSection = useCallback((section: number) => {
    setCurrentSection(section);
    const audio = audioRef.current;
    
    if (!audio || !isPlaying) return;

    const targetVolume = sectionVolumes[section as keyof typeof sectionVolumes] || 0.21;
    const fadeDuration = section === 4 ? 2000 : 1500; // Slower fade for final section
    
    fadeVolume(targetVolume, fadeDuration);
  }, [isPlaying, fadeVolume]);

  // Toggle sound on/off
  const toggleSound = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      fadeVolume(0, 800);
      setTimeout(() => {
        audio.pause();
        setIsPlaying(false);
      }, 800);
    } else {
      const targetVolume = sectionVolumes[currentSection as keyof typeof sectionVolumes] || 0.21;
      audio.volume = 0;
      audio.play()
        .then(() => {
          setIsPlaying(true);
          fadeVolume(targetVolume, 1500);
        })
        .catch((error) => {
          console.error("Audio playback failed:", error);
        });
    }
  }, [isPlaying, currentSection, fadeVolume]);

  // Handle page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio || !isPlaying) return;

      if (document.hidden) {
        fadeVolume(0.08, 500); // Lower volume when tab hidden
      } else {
        const targetVolume = sectionVolumes[currentSection as keyof typeof sectionVolumes] || 0.21;
        fadeVolume(targetVolume, 500);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isPlaying, currentSection, fadeVolume]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, []);

  return (
    <AudioContext.Provider value={{ startMusic, setSection, toggleSound, isPlaying }}>
      <audio
        ref={audioRef}
        src="/audio/iraday.mp3"
        loop
        preload="auto"
      />
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
}

// Minimal sound toggle component
export function SoundToggle() {
  const { toggleSound, isPlaying } = useAudio();

  return (
    <button
      onClick={toggleSound}
      className="sound-toggle"
      aria-label={isPlaying ? "Turn sound off" : "Turn sound on"}
    >
      SOUND · {isPlaying ? "ON" : "OFF"}
    </button>
  );
}
