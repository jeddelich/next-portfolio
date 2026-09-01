import styles from "./StatusBar.module.css";

export default function StatusBar() {
  return (
    <a
      href="#connect"
      className={`${styles.heroStatusBar} ${styles.heroStatusBarFullWidth}`}
    >
      <span className={styles.heroStatusDot} aria-hidden="true"></span>
      <span className={styles.heroStatusText}>
        Open to new work opportunities! Let&apos;s connect
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </span>
    </a>
  );
}
