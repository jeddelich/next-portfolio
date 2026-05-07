
"use client";

import useHasScrolled from "@/hooks/useHasScrolled";
import styles from "./ScrollDownIcon.module.css";

function ScrollDown() {
  const hasScrolled = useHasScrolled();

  return (
    <div
      className={`${styles.heroScrollCue} ${hasScrolled ? styles.scrollHidden : ""}`}
      aria-hidden="true"
    >
      <span>scroll down</span>
      <span className={styles.scrollLine}></span>
    </div>
  );
}

export default ScrollDown;
