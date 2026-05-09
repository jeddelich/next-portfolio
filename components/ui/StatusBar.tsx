import styles from "./StatusBar.module.css";

function StatusBar() {
  return (
    <div className={styles.heroStatusBar}>
      <span className={styles.heroStatusDot} aria-hidden="true"></span>
      <span>Available for new projects · Summer 2026</span>
    </div>
  );
}

export default StatusBar;
