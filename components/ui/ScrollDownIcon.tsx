
import styles from "./ScrollDownIcon.module.css";
import { motion } from "framer-motion";

function ScrollDown() {

  return (
    <motion.a
      href="#projects"
      className={styles.scroll}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5, delay: 6}}
    >
      <div className={`${styles.scroll__icon} ${styles.click}`}></div>
      <div className={`fa-solid fa-arrow-down ${styles.arrow}`}></div>
    </motion.a>
  );
}

export default ScrollDown;
