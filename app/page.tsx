"use client";

import Image from "next/image";
import { useRef } from "react";

// Contexts
import { useModal } from "../contexts/ModalContext";

import Modal from "@/components/ui/Modal";
import ProjectCard from "@/components/ui/ProjectCard";

import projects from "@/data/projects";

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
    const x = event.clientX / 20;
    const y = event.clientY / 20;

    shapeRefs.current.forEach((shape, index) => {
      if (!shape) {
        return;
      }
      const shouldInvert = index % 2 !== 0;
      const direction = shouldInvert ? -1 : 1;
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
            <a href="#projects" className="scroll">
              <div className="scroll__icon--mouse click"></div>
              <div className="fa-solid fa-arrow-down"></div>
            </a>
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
                <a
                  href="/David Bragg Resume.pdf"
                  target="_blank"
                  className="social__link click"
                >
                  <i className="fa-solid fa-file-pdf"></i>
                </a>
              </div>
            </header>
          </>
        )}

        {isModalOpen && <Modal />}

        <Image
          ref={setShapeImageRef(0)}
          src="/semi circle.svg"
          className="shape shape--0"
          alt="semi circle"
          width={20}
          height={20}
        />
        <i
          ref={setShapeIconRef(1)}
          className="fa-solid fa-spiral shape shape--1"
        ></i>
        <Image
          ref={setShapeImageRef(2)}
          src="/squiggly.svg"
          className="shape shape--2"
          alt="squiggly"
          width={20}
          height={20}
        />
        <i
          ref={setShapeIconRef(3)}
          className="fa-solid fa-spiral shape shape--3"
        ></i>
        <Image
          ref={setShapeImageRef(4)}
          src="/triangle.svg"
          className="shape shape--4"
          alt="triangle"
          width={20}
          height={20}
        />
        <i
          ref={setShapeIconRef(5)}
          className="fa-solid fa-spiral shape shape--5"
        ></i>
        <Image
          ref={setShapeImageRef(6)}
          src="/squiggly.svg"
          className="shape shape--6"
          alt="squiggly"
          width={20}
          height={20}
        />
        <i
          ref={setShapeIconRef(7)}
          className="fa-solid fa-spiral shape shape--7"
        ></i>
        <Image
          ref={setShapeImageRef(8)}
          src="/semi circle.svg"
          className="shape shape--8"
          alt="circle"
          width={20}
          height={20}
        />
      </section>

      <section id="projects">
        <div className="container">
          <div className="row">
            <h1 className="section__title">
              Here are some of my <span className="orange">projects</span>
            </h1>
            <ul className="project__list">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
