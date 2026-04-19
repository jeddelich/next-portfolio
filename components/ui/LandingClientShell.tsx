"use client";

import type { ReactNode } from "react";

import Modal from "@/components/ui/Modal";
import ScrollDown from "@/components/ui/ScrollDownIcon";
import { useModal } from "@/contexts/ModalContext";
import { useShapeMotion } from "@/components/ui/useShapeMotion";
import type { TechItem } from "@/components/ui/TechStackShapes";
import TechStackShapes from "@/components/ui/TechStackShapes";

type LandingClientShellProps = {
  techStack: TechItem[];
  children: ReactNode;
};

function LandingClientShell({ techStack, children }: LandingClientShellProps) {
  const { toggleModal, isModalOpen } = useModal();
  const { isShapeMotionEnabled, handleMouseMove, setShapeImageRef } =
    useShapeMotion({
      shapeCount: techStack.length,
      isPaused: isModalOpen,
    });

  return (
    <section
      id="landing-page"
      onMouseMove={isShapeMotionEnabled ? handleMouseMove : undefined}
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

      <TechStackShapes
        techStack={techStack}
        isModalOpen={isModalOpen}
        setShapeImageRef={setShapeImageRef}
      />
    </section>
  );
}

export default LandingClientShell;
