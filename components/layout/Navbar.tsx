"use client";

import { useEffect, useRef, useState } from "react";
import { Fraunces, JetBrains_Mono } from "next/font/google";
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
  const { darkMode, toggleTheme } = useTheme();
  const hasScrolled = useHasScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
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
    }, 300);
  };

  const handleContactClick = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;

      if (!target) {
        return;
      }

      if (mobileMenuRef.current?.contains(target)) {
        return;
      }

      if (burgerMenuRef.current?.contains(target)) {
        return;
      }

      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [menuOpen]);

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
          >
            <span className={styles.numberedNavLinkNum}>01.</span>
            <span>About Me</span>
          </a>
        </li>
        <li className={styles.navLink}>
          <a
            href="#tech"
            className={`${styles.numberedNavLink} ${jetBrainsMono.className}`}
          >
            <span className={styles.numberedNavLinkNum}>02.</span>
            <span>Tech Used</span>
          </a>
        </li>
        <li className={styles.navLink}>
          <a
            href="#clients"
            className={`${styles.numberedNavLink} ${jetBrainsMono.className}`}
          >
            <span className={styles.numberedNavLinkNum}>03.</span>
            <span>Past Clients</span>
          </a>
        </li>
        <li className={styles.navLink}>
          <a
            href="#resume"
            className={`${styles.numberedNavLink} ${jetBrainsMono.className}`}
          >
            <span className={styles.numberedNavLinkNum}>04.</span>
            <span>My Résumé</span>
          </a>
        </li>
        <li className={styles.navLink}>
          <a
            href="#connect"
            className={`${styles.numberedNavLink} ${styles.navCta} ${jetBrainsMono.className}`}
          >
            <span>Let&apos;s Connect ↗</span>
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
      <button
        type="button"
        ref={burgerMenuRef}
        className={`${styles.burgerMenu} ${menuOpen ? styles.burgerMenuOpen : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {menuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div
            ref={mobileMenuRef}
            className={styles.mobileMenu}
            onClick={(event) => event.stopPropagation()}
          >
            <ul className={styles.mobileMenuList}>
              <li>
                <a
                  href="#about"
                  className={`${styles.numberedNavLink} ${jetBrainsMono.className}`}
                  onClick={handleLinkClick}
                >
                  <span className={styles.numberedNavLinkNum}>01.</span>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#tech"
                  className={`${styles.numberedNavLink} ${jetBrainsMono.className}`}
                  onClick={handleLinkClick}
                >
                  <span className={styles.numberedNavLinkNum}>02.</span>
                  <span>Tech Used</span>
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className={`${styles.numberedNavLink} ${jetBrainsMono.className}`}
                  onClick={handleLinkClick}
                >
                  <span className={styles.numberedNavLinkNum}>03.</span>
                  <span>Past Clients</span>
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className={`${styles.numberedNavLink} ${jetBrainsMono.className}`}
                  onClick={handleLinkClick}
                >
                  <span className={styles.numberedNavLinkNum}>04.</span>
                  <span>My Résumé</span>
                </a>
              </li>
              <li className={styles.mobileMenuCta}>
                <a
                  href="#connect"
                  className={`${styles.numberedNavLink} ${styles.navCta} ${jetBrainsMono.className}`}
                  onClick={handleContactClick}
                >
                  <span>Let&apos;s Connect ↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
