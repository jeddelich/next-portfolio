"use client";

import { useEffect, type ReactNode } from "react";

import ScrollDown from "@/components/ui/ScrollDownIcon";
import { useTheme } from "@/contexts/ThemeContext";
import useHasScrolled from "@/hooks/useHasScrolled";
import FloatingQuickLinks from "@/components/ui/FloatingQuickLinks";
import styles from "./LandingClientShell.module.css";

type LandingClientShellProps = {
  children?: ReactNode;
};

function LandingClientShell({ children }: LandingClientShellProps) {
  const { darkMode } = useTheme();
  const hasScrolled = useHasScrolled();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className={`${styles.landingPage} ${darkMode ? styles.landingPageDark : ""} ${hasScrolled ? styles.landingPageScrolled : ""}`}
    >
      <>
        <ScrollDown />
        <FloatingQuickLinks />
        {children}
      </>
    </section>
  );
}

export default LandingClientShell;
