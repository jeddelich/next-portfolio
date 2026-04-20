"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";

import ScrollDown from "@/components/ui/ScrollDownIcon";
import { useModal } from "@/contexts/ModalContext";
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
              <svg aria-hidden="true" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                <path d="M502.3 190.8L327.4 338c-15.4 13-37.4 13-52.8 0L9.7 190.8C3.8 185.8 0 178.5 0 170.8V112c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v58.8c0 7.7-3.8 15-9.7 20z" />
                <path d="M0 214.6v185.4c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V214.6L346.8 354.4c-26.6 22.4-65 22.4-91.6 0L0 214.6z" />
              </svg>
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
