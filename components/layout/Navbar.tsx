"use client";

import { useEffect, useRef, useState } from "react";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";
import { useTheme } from "@/contexts/ThemeContext";
import navLinks from "@/data/navLinks";
// import useHasScrolled from "@/hooks/useHasScrolled";
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
  // const hasScrolled = useHasScrolled();
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
      className={`${styles.nav} ${styles.navScrolled}`}
      style={navBackdropStyle}
    >
      <a href="#top" className={styles.navLogo}>
        <img src="/branding/JD_SUBMARK_RUST.svg" alt="Logo" className={styles.navLogoSubmark} />
      </a>
      <ul className={styles.navLinkList}>
        {navLinks.map(({ number, href, label }) => (
          <li key={href} className={styles.navLink}>
            <a
              href={href}
              className={`${styles.numberedNavLink} ${jetBrainsMono.className}`}
            >
              <span className={styles.numberedNavLinkNum}>{number}</span>
              <span>{label}</span>
            </a>
          </li>
        ))}
        <li className={styles.navLink}>
          <a
            href="#connect"
            className={`${styles.numberedNavLink} ${styles.navCta} ${jetBrainsMono.className}`}
          >
            <span className={styles.navCtaContent}>
              Let&apos;s Connect
              <FiArrowUpRight
                className={styles.navCtaIcon}
                aria-hidden="true"
              />
            </span>
          </a>
        </li>
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
              {navLinks.map(({ number, href, label, mobileLabel }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`${styles.numberedNavLink} ${jetBrainsMono.className}`}
                    onClick={handleLinkClick}
                  >
                    <span className={styles.numberedNavLinkNum}>{number}</span>
                    <span>{mobileLabel ?? label}</span>
                  </a>
                </li>
              ))}
              <li className={styles.mobileMenuCta}>
                <a
                  href="#connect"
                  className={`${styles.numberedNavLink} ${styles.navCta} ${jetBrainsMono.className}`}
                  onClick={handleContactClick}
                >
                  <span className={styles.navCtaContent}>
                    Let&apos;s Connect
                    <FiArrowUpRight
                      className={styles.navCtaIcon}
                      aria-hidden="true"
                    />
                  </span>
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
