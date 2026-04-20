
import styles from "./ScrollDownIcon.module.css";
import { motion } from "framer-motion";

function ScrollDown() {
  return (
    <motion.a
      href="#projects"
      className={styles.scroll}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 6 }}
    >
      <div className={`${styles.scroll__icon} ${styles.click}`}></div>
      <svg
        aria-hidden="true"
        viewBox="0 0 384 512"
        width="0.75em"
        height="0.75em"
        fill="currentColor"
        className={styles.arrow}
      >
        <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.7V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v338.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
      </svg>
    </motion.a>
  );
}

export default ScrollDown;
