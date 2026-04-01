import styles from "./ScrollDownIcon.module.css";

function ScrollDown() {
  return (
    <a href="#projects" className={styles.scroll}>
      <div className={`${styles.scroll__icon} ${styles.click}`}></div>
      <div className={`fa-solid fa-arrow-down ${styles.arrow}`}></div>
    </a>
  );
}

export default ScrollDown;
