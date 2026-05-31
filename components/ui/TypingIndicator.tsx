import React, { useEffect, useState } from "react";
import styles from "./FloatingQuickLinks.module.css";

const TypingIndicator = () => {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.typingIndicator} aria-live="polite">
      <span>AI assistant is typing{" ".repeat(dotCount)}{".".repeat(dotCount)}</span>
    </div>
  );
};

export default TypingIndicator;
