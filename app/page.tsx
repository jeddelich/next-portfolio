"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Contexts
import { useModal } from "../contexts/ModalContext";

import Modal from "@/components/ui/Modal";

import Projects from "@/components/projects/Projects";
import techStack from "@/data/techStack";

// UI
import ScrollDown from "@/components/ui/ScrollDownIcon";

export default function Home() {
  const SHAPE_BREAKPOINT = 880;
  const { toggleModal, isModalOpen } = useModal();
  const shapeRefs = useRef<(HTMLElement | null)[]>([]);
  const [isModalBackgroundFixed, setIsModalBackgroundFixed] = useState(false);
  const [isShapeMotionEnabled, setIsShapeMotionEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${SHAPE_BREAKPOINT}px)`);

    const updateShapeMotion = () => {
      setIsShapeMotionEnabled(mediaQuery.matches);
    };

    updateShapeMotion();
    mediaQuery.addEventListener("change", updateShapeMotion);

    return () => {
      mediaQuery.removeEventListener("change", updateShapeMotion);
    };
  }, []);

  const setShapeImageRef =
    (index: number) => (element: HTMLImageElement | null) => {
      shapeRefs.current[index] = element;
    };

  const getDirection = (index: number) => {
    // Alternate directions while skipping every 5th source step.
    const sourceStep = index + 1 + Math.floor(index / 4);
    return sourceStep % 2 === 0 ? -1 : 1;
  };

  const applyShapeTransforms = (x: number, y: number) => {
    if (!isShapeMotionEnabled) {
      return;
    }

    shapeRefs.current.forEach((shape, index) => {
      if (!shape) {
        return;
      }

      const direction = getDirection(index);

      // Deterministic jitter keeps first render organic without random flicker.
      const jitterX = ((index * 13) % 13) - 2;
      const jitterY = ((index * 17) % 13) - 2;

      shape.style.transform = `translate(${x * direction + jitterX}px, ${y * direction + jitterY}px)`;
    });
  };

  const moveBackground = (event: React.MouseEvent<HTMLElement>) => {
    if (!isShapeMotionEnabled || isModalOpen) {
      return;
    }

    const x = event.clientX / 30;
    const y = event.clientY / 30;

    applyShapeTransforms(x, y);
  };

  useEffect(() => {
    if (!isShapeMotionEnabled) {
      return;
    }

    // Virtual cursor position for first frame, so shapes do not start in rigid columns.
    shapeRefs.current.forEach((shape, index) => {
      if (!shape) {
        return;
      }

      const sourceStep = index + 1 + Math.floor(index / 4);
      const direction = sourceStep % 2 === 0 ? -1 : 1;
      const jitterX = ((index * 13) % 13) - 2;
      const jitterY = ((index * 17) % 13) - 2;

      shape.style.transform = `translate(${7 * direction + jitterX}px, ${-5 * direction + jitterY}px)`;
    });
  }, [isShapeMotionEnabled]);

  useEffect(() => {
    if (!isModalOpen) return;

    const timer = setTimeout(() => {
      setIsModalBackgroundFixed(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      setIsModalBackgroundFixed(false);
    };
  }, [isModalOpen]);

  return (
    <div className={isModalBackgroundFixed ? "modal-background-fixed" : ""}>
      <section
        id="landing-page"
        onMouseMove={isShapeMotionEnabled ? (event) => moveBackground(event) : undefined}
      >
        {!isModalOpen && (
          <>
            <a href="#" className="mail__btn--wrapper">
              <button className="mail__btn click" onClick={() => toggleModal()}>
                <i className="fa-solid fa-envelope"></i>
              </button>
            </a>
            <ScrollDown />
            <header className="header">
              <div className="header__content">
                <h1 className="title">Hey</h1>
                <h1 className="title orange">I&apos;m Jed.</h1>
                <p className="header__para">
                  I&apos;m a{" "}
                  <b className="orange">Frontend Software Engineer</b> with a
                  strong passion for building websites that are both visually
                  engaging and user-friendly.
                </p>
              </div>
              <div className="social__list">
                <a
                  href="https://www.linkedin.com/in/jed-delich/"
                  target="_blank"
                  className="social__link click"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/jeddelich"
                  target="_blank"
                  className="social__link click"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  className="social__link click"
                  href="https://docs.google.com/document/d/1ERrjHAJd3pF_YNKKpFaNXXVOQ65JDc1v/edit?usp=sharing&ouid=114423874225935714907&rtpof=true&sd=true"
                  target="_blank"
                >
                  <i className="fa-solid fa-file-pdf"></i>
                </a>
              </div>
            </header>
          </>
        )}

        {isModalOpen && <Modal />}

        {isModalOpen && isModalBackgroundFixed && (
          <div
            className="modal-background"
            onClick={() => isModalOpen && toggleModal()}
          ></div>
        )}

        {techStack.map((tech, index) => (
          <Image
            key={index}
            ref={setShapeImageRef(index)}
            src={tech.src}
            className={`shape shape--${index}`}
            alt={tech.alt}
            width={20}
            height={20}
            style={isModalOpen ? { visibility: "hidden" } : {}}
          />
        ))}
      </section>

      <Projects />
    </div>
  );
}
