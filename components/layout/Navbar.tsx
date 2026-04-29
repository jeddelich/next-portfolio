"use client";

import { useRef } from "react";
import { useModal } from "@/contexts/ModalContext";
import { useTheme } from "@/contexts/ThemeContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { toggleModal, isModalOpen } = useModal();
  const { darkMode, toggleTheme } = useTheme();
  const themeToggleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleThemeToggle = () => {
    if (themeToggleTimeoutRef.current) {
      return;
    }

    toggleTheme();
    themeToggleTimeoutRef.current = setTimeout(() => {
      themeToggleTimeoutRef.current = null;
    }, 500);
  };

  if (isModalOpen) return null;

  return (
    <nav className={styles.nav}>
      <figure className={styles.personalLogoWrapper}>
        <div className={styles.personalLogo}></div>
        <div className={styles.personalLogoEffect}></div>
      </figure>
      <ul className={styles.navLinkList}>
        <li className={styles.navLink} onClick={() => toggleModal()}>
          <a
            href="#"
            className={`${styles.navLinkAnchor} link__hover-effect link__hover-effect--black`}
          >
            About
          </a>
        </li>
        <li className={styles.navLink}>
          <a
            href="#projects"
            className={`${styles.navLinkAnchor} link__hover-effect link__hover-effect--black`}
          >
            Projects
          </a>
        </li>
        <li className={styles.navLink} onClick={() => toggleModal()}>
          <a
            href="#"
            className={`${styles.navLinkAnchor} link__hover-effect link__hover-effect--black`}
          >
            Contact
          </a>
        </li>
        <button
          type="button"
          className={`${styles.themeToggleButton} theme-toggle`}
          onClick={handleThemeToggle}
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
