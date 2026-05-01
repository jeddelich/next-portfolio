import LandingClientShell from "@/components/ui/LandingClientShell";
import ModalBackgroundShell from "@/components/ui/ModalBackgroundShell";
import Projects from "@/components/projects/Projects";
import techStack from "@/data/techStack";
import styles from "./page.module.css";

export default function Home() {
  return (
    <ModalBackgroundShell>
      <LandingClientShell techStack={techStack}>
        <header className={styles.header}>
          <div className={styles.header__content}>
            <div className={styles.heroGridBg} aria-hidden="true"></div>
            <h1 className="title">Hey</h1>
            <h1 className="title orange">I&apos;m Jed.</h1>
            <p className={styles.headerPara}>
              I build optimized, accessible, user experiences with React,
              Next.js, and TypeScript — turning complex product requirements
              into intuitive interfaces.
            </p>
          </div>
          <div className={styles.socialList}>
            <a
              href="https://www.linkedin.com/in/jed-delich/"
              target="_blank"
              className={`${styles.socialLink} click`}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/jeddelich"
              target="_blank"
              className={`${styles.socialLink} click`}
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className={`${styles.socialLink} click`}
              href="Jed_Delich_Resume.pdf"
              target="_blank"
            >
              <i className="fa-solid fa-file-pdf"></i>
            </a>
          </div>
        </header>
      </LandingClientShell>
      <Projects />
    </ModalBackgroundShell>
  );
}
