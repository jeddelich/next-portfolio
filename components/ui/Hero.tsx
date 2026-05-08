import MailButton from "@/components/ui/MailButton";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.heroGridBg} aria-hidden="true"></div>
          <div className={styles.heroEyebrow}>
            <span className={styles.heroStatusDot} aria-hidden="true"></span>
            <span>Available for new projects · Summer 2026</span>
          </div>
          <div className={styles.heroTitles}>
            <div className={styles.heroTitle}>Jed Delich,</div>
            <div className={`orange ${styles.heroTitle}`} style={{ fontStyle: "italic" }}>
              Frontend
            </div>
            <div className={styles.heroTitle}>Engineer</div>
          </div>
          <div className={styles.headerMeta}>
            <p className={styles.headerPara}>
              I build optimized, accessible, user experiences with React, Next.js,
              and TypeScript — turning complex product requirements into intuitive
              interfaces.
            </p>

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
              <MailButton heroStyles={styles.socialLink} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
