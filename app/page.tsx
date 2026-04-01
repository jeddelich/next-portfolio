"use client";

import Image from "next/image";
import { useRef } from "react";

// Contexts
import { useModal } from "../contexts/ModalContext";

import Modal from "@/components/ui/Modal";

import Countdown from "@/components/ui/Countdown";
import Projects from "@/components/projects/Projects";

// UI
import ScrollDown from "@/components/ui/ScrollDownIcon";

export default function Home() {
  const { toggleModal, isModalOpen } = useModal();
  const shapeRefs = useRef<(HTMLElement | null)[]>([]);

  const setShapeImageRef =
    (index: number) => (element: HTMLImageElement | null) => {
      shapeRefs.current[index] = element;
    };

  const setShapeIconRef = (index: number) => (element: HTMLElement | null) => {
    shapeRefs.current[index] = element;
  };

  const moveBackground = (event: React.MouseEvent<HTMLElement>) => {
    const x = event.clientX / 40;
    const y = event.clientY / 40;

    shapeRefs.current.forEach((shape, index) => {
      if (!shape) {
        return;
      }

      // Alternate directions while skipping every 5th source step.
      const sourceStep = index + 1 + Math.floor(index / 4);
      const direction = sourceStep % 2 === 0 ? -1 : 1;

      shape.style.transform = `translate(${x * direction}px, ${y * direction}px)`;
    });
  };

  return (
    <div>
      <section id="landing-page" onMouseMove={(event) => moveBackground(event)}>
        {!isModalOpen && (
          <>
            <a href="#">
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
                  <br />
                  Learn more{" "}
                  <b className="orange cursor" onClick={() => toggleModal()}>
                    about me!
                  </b>
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
                <div
                  className="social__link click"
                  style={{ cursor: "not-allowed" }}
                >
                  <i className="fa-solid fa-file-pdf"></i>
                </div>
                <div className="resume__countdown">
                  <span style={{ fontWeight: 500 }}>Resume Arriving:</span>
                  <Countdown />
                </div>
              </div>
            </header>
          </>
        )}

        {isModalOpen && <Modal />}

        <Image
          ref={setShapeImageRef(0)}
          src="/git.svg"
          className="shape shape--0"
          alt="semi circle"
          style={isModalOpen ? { visibility: "hidden" } : {}}
          width={20}
          height={20}
        />
        <Image
          ref={setShapeImageRef(1)}
          src="/typescript.svg"
          className="shape shape--1"
          alt="semi circle"
          style={isModalOpen ? { visibility: "hidden" } : {}}
          width={20}
          height={20}
        />
        <Image
          ref={setShapeImageRef(2)}
          src="/vercel-icon (2).svg"
          className="shape shape--2"
          alt="squiggly"
          width={20}
          height={20}
          style={isModalOpen ? { visibility: "hidden" } : {}}
        />
        <Image
          ref={setShapeImageRef(3)}
          src="/tailwindcss.svg"
          className="shape shape--3"
          alt="squiggly"
          width={20}
          height={20}
          style={isModalOpen ? { visibility: "hidden" } : {}}
        />
        <Image
          ref={setShapeImageRef(4)}
          src="/framer-motion.svg"
          className="shape shape--4"
          alt="triangle"
          style={isModalOpen ? { visibility: "hidden" } : {}}
          width={20}
          height={20}
        />
        <Image
          ref={setShapeImageRef(5)}
          src="/Next.js.svg"
          className="shape shape--5"
          alt="triangle"
          style={isModalOpen ? { visibility: "hidden" } : {}}
          width={20}
          height={20}
        />
        <Image
          ref={setShapeImageRef(6)}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          className="shape shape--6"
          alt="squiggly"
          width={20}
          height={20}
          style={isModalOpen ? { visibility: "hidden" } : {}}
        />
        <Image
          ref={setShapeImageRef(7)}
          src="https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-logomark.svg"
          className="shape shape--7"
          alt="squiggly"
          width={20}
          height={20}
          style={isModalOpen ? { visibility: "hidden" } : {}}
        />
        <Image
          ref={setShapeImageRef(8)}
          src="/stripe.svg"
          className="shape shape--8"
          alt="circle"
          width={20}
          height={20}
          style={isModalOpen ? { visibility: "hidden" } : {}}
        />
        <Image
          ref={setShapeImageRef(9)}
          src="/visual studio.svg"
          className="shape shape--9"
          alt="squiggly"
          width={20}
          height={20}
          style={isModalOpen ? { visibility: "hidden" } : {}}
        />
        <Image
          ref={setShapeImageRef(10)}
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          className="shape shape--10"
          alt="squiggly"
          width={20}
          height={20}
          style={isModalOpen ? { visibility: "hidden" } : {}}
        />
        <Image
          ref={setShapeImageRef(11)}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png"
          className="shape shape--11"
          alt="circle"
          width={20}
          height={20}
          style={isModalOpen ? { visibility: "hidden" } : {}}
        />
      </section>

      <Projects />
    </div>
  );
}
