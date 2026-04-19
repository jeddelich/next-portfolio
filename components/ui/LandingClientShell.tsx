"use client";

import type { ReactNode } from "react";

import Modal from "@/components/ui/Modal";
import ScrollDown from "@/components/ui/ScrollDownIcon";
import { useModal } from "@/contexts/ModalContext";
import { useLogoMotion } from "@/hooks/useLogoMotion";
import type { TechItem } from "@/components/ui/TechStackLogos";
import TechStackLogos from "@/components/ui/TechStackLogos";

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
      id="landing-page"
      onMouseMove={isLogoMotionEnabled ? handleMouseMove : undefined}
    >
      {!isModalOpen && (
        <>
          <a href="#" className="mail__btn--wrapper">
            <button className="mail__btn click" onClick={() => toggleModal()}>
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
