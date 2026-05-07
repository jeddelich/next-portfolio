
"use client";

import useHasScrolled from "@/hooks/useHasScrolled";
import styles from "./ScrollDownIcon.module.css";

const navBackdropStyle = {
  backdropFilter: "saturate(180%) blur(14px)",
  WebkitBackdropFilter: "saturate(180%) blur(14px)",
};

function ScrollDown() {
  const hasScrolled = useHasScrolled();

  return (
    <button
      className={`${styles.heroScrollCue} ${hasScrolled ? styles.scrollHidden : ""}`}
      onClick={() => window.location.href = "#about"}
      aria-hidden="true"
      style={navBackdropStyle}
    >
      <span>scroll down</span>
      <span className={styles.scrollLine}></span>
    </button>
  );
}

export default ScrollDown;
