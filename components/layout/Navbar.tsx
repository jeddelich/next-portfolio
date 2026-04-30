"use client";

import { useRef } from "react";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { useModal } from "@/contexts/ModalContext";
import { useTheme } from "@/contexts/ThemeContext";
import useHasScrolled from "@/hooks/useHasScrolled";
import styles from "./Navbar.module.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const navBackdropStyle = {
  backdropFilter: "saturate(180%) blur(14px)",
  WebkitBackdropFilter: "saturate(180%) blur(14px)",
};

function Navbar() {
  const { toggleModal, isModalOpen } = useModal();
  const { darkMode, toggleTheme } = useTheme();
  const hasScrolled = useHasScrolled();
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
    <nav
      className={`${styles.nav} ${hasScrolled ? styles.navScrolled : ""}`}
      style={navBackdropStyle}
    >
      <a href="#top" className={styles.navLogo}>
        <span className={styles.navLogoMark}>JD</span>
        <span className={`${styles.navLogoText} ${fraunces.className}`}>
          Jed Delich
        </span>
      </a>
      <ul className={styles.navLinkList}>
        <li className={styles.navLink}>
          <a
            href="#about"
            className={`${styles.numberedNavLink} ${jetBrainsMono.className}`}
            onClick={(event) => {
              event.preventDefault();
              toggleModal();
            }}
          >
            <span className={styles.numberedNavLinkNum}>01.</span>
            <span>About</span>
          </a>
        </li>
        <li className={styles.navLink}>
          <a
            href="#projects"
            className={`${styles.numberedNavLink} ${jetBrainsMono.className}`}
          >
            <span className={styles.numberedNavLinkNum}>02.</span>
            <span>Projects</span>
          </a>
        </li>
        <li className={styles.navLink}>
          <a
            href="#contact"
            className={`${styles.numberedNavLink} ${jetBrainsMono.className}`}
            onClick={(event) => {
              event.preventDefault();
              toggleModal();
            }}
          >
            <span className={styles.numberedNavLinkNum}>03.</span>
            <span>Contact</span>
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
