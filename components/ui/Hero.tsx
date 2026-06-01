import StatusBar from "@/components/ui/StatusBar";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
    <div className={styles.heroGridBg} aria-hidden="true"></div>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.heroTitles}>
            <div className={styles.heroTitle}>Jed Delich,</div>
            <div className={`orange ${styles.heroTitle}`} style={{ fontStyle: "italic" }}>
              Frontend
            </div>
            <div className={styles.heroTitle}>Engineer</div>
          </div>
          <div className={styles.headerMeta}>
          <StatusBar />
            <p className={styles.headerPara}>
              I build optimized, accessible, user experiences with React, Next.js,
              and TypeScript — turning complex product requirements into intuitive
              interfaces.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
