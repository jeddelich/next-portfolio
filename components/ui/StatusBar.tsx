import styles from "./StatusBar.module.css";

export default function StatusBar() {
  return (
    <a href="#contact" className={`${styles.heroStatusBar} ${styles.heroStatusBarFullWidth}`}>
      <span className={styles.heroStatusDot} aria-hidden="true"></span>
      <span className={styles.heroStatusText}>Open to new work opportunities! Let&apos;s connect.</span>
    </a>
  );
}
