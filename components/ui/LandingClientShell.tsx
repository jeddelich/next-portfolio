"use client";

import { useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

import ScrollDown from "@/components/ui/ScrollDownIcon";
import { useModal } from "@/contexts/ModalContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useLogoMotion } from "@/hooks/useLogoMotion";
import TechStackLogos, { type TechItem } from "@/components/ui/TechStackLogos";
import styles from "./LandingClientShell.module.css";

const Modal = dynamic(() => import("@/components/ui/Modal"), {
  ssr: false,
});

type LandingClientShellProps = {
  techStack: TechItem[];
  children: ReactNode;
};

function LandingClientShell({ techStack, children }: LandingClientShellProps) {
  const { toggleModal, isModalOpen } = useModal();
  const { darkMode } = useTheme();
  const [hasScrolled, setHasScrolled] = useState(false);
  const { isLogoMotionEnabled, handleMouseMove, setLogoImageRef } =
    useLogoMotion({
      logoCount: techStack.length,
      isPaused: isModalOpen,
    });

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`${styles.landingPage} ${darkMode ? styles.landingPageDark : ""} ${hasScrolled ? styles.landingPageScrolled : ""}`}
      onMouseMove={isLogoMotionEnabled ? handleMouseMove : undefined}
    >
      {!isModalOpen && (
        <>
          <a href="#" className={styles.mailBtnWrapper}>
            <button className={`${styles.mailBtn} click`} onClick={() => toggleModal()}>
              <i className="fa-solid fa-envelope"></i>
            </button>
          </a>
          <ScrollDown />
          {children}
        </>
      )}

      {isModalOpen && <Modal />}

      <TechStackLogos
        techStack={techStack}
        isModalOpen={isModalOpen}
        setLogoImageRef={setLogoImageRef}
      />
    </section>
  );
}

export default LandingClientShell;
