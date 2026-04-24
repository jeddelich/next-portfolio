
"use client";

import useHasScrolled from "@/hooks/useHasScrolled";
import styles from "./ScrollDownIcon.module.css";

function ScrollDown() {
  const hasScrolled = useHasScrolled();

  return (
    <a
      href="#projects"
      className={`${styles.scroll} ${hasScrolled ? styles.scrollHidden : ""}`}
    >
      <div className={`${styles.scroll__icon} ${styles.click}`}></div>
      <div className={`fa-solid fa-arrow-down ${styles.arrow}`}></div>
    </a>
  );
}

export default ScrollDown;
