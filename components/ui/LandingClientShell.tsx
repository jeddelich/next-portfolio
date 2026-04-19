"use client";

import type { ReactNode } from "react";

import Modal from "@/components/ui/Modal";
import ScrollDown from "@/components/ui/ScrollDownIcon";
import { useModal } from "@/contexts/ModalContext";
import { useLogoMotion } from "@/hooks/useLogoMotion";
import TechStackLogos, { type TechItem } from "@/components/ui/TechStackLogos";
import styles from "./LandingClientShell.module.css";

type LandingClientShellProps = {
  techStack: TechItem[];
  children: ReactNode;
};

function LandingClientShell({ techStack, children }: LandingClientShellProps) {
  const { toggleModal, isModalOpen } = useModal();
  const { isLogoMotionEnabled, handleMouseMove, setLogoImageRef } =
    useLogoMotion({
      logoCount: techStack.length,
      isPaused: isModalOpen,
    });

  return (
    <section
      className={styles.landingPage}
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
