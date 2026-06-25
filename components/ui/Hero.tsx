import Image from "next/image";
import { MdComputer } from "react-icons/md";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroGridBg} aria-hidden="true"></div>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerIntro}>
            <div className={styles.heroTitles}>
              <div className={styles.heroTitle}>Jed Delich,</div>
              <div
                className={`orange ${styles.heroTitle}`}
                style={{ fontStyle: "italic" }}
              >
                Frontend
              </div>
              <div className={styles.heroTitle}>Engineer</div>
            </div>
            <div className={styles.headerMeta}>
              <p className={styles.headerPara}>
                I build optimized, accessible, user experiences with React,
                Next.js, and TypeScript — turning complex product requirements
                into intuitive interfaces.
              </p>
            </div>
          </div>
        </div>
          <aside
            className={styles.featuredProject}
            aria-label="Current project"
          >
        <div className={styles.featuredProjectDescription}>
            <p className={styles.featuredProjectEyebrow}>
              current build in progress
              <MdComputer
                className={styles.featuredProjectEyebrowIcon}
                aria-hidden="true"
              />
              
            </p>
            <div className={styles.featuredProjectMedia}>
              <Image
                src="/website_heros/alicia_joy_design.png"
                alt="Alicia Joy Design project preview"
                width={1893}
                height={1076}
                priority
                className={styles.featuredProjectImage}
              />
            </div>
        </div>
          </aside>
      </header>
    </div>
  );
}

export default Hero;
