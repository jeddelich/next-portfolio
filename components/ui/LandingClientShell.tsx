"use client";

import { useEffect, type ReactNode } from "react";

import ScrollDown from "@/components/ui/ScrollDownIcon";
import { useTheme } from "@/contexts/ThemeContext";
import useHasScrolled from "@/hooks/useHasScrolled";
import { useLogoMotion } from "@/hooks/useLogoMotion";
import TechStackLogos, { type TechItem } from "@/components/ui/TechStackLogos";
import styles from "./LandingClientShell.module.css";

type LandingClientShellProps = {
  techStack: TechItem[];
  children?: ReactNode;
};

function LandingClientShell({ techStack, children }: LandingClientShellProps) {
  const { darkMode } = useTheme();
  const hasScrolled = useHasScrolled();
  const { isLogoMotionEnabled, handleMouseMove, setLogoImageRef } =
    useLogoMotion({
      logoCount: techStack.length,
      breakpoint: 1025,
      isPaused: false,
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className={`${styles.landingPage} ${darkMode ? styles.landingPageDark : ""} ${hasScrolled ? styles.landingPageScrolled : ""}`}
      onMouseMove={isLogoMotionEnabled ? handleMouseMove : undefined}
    >
      <>
        <ScrollDown />
        {children}
      </>

      <TechStackLogos
        techStack={techStack}
        isModalOpen={false}
        setLogoImageRef={setLogoImageRef}
      />
    </section>
  );
}

export default LandingClientShell;
