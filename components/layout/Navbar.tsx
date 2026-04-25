"use client";

import { useRef } from "react";
import { useModal } from "@/contexts/ModalContext";
import { useTheme } from "@/contexts/ThemeContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { toggleModal, isModalOpen } = useModal();
  const { toggleTheme } = useTheme();
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
        <li className={`${styles.navLink} click`} onClick={handleThemeToggle}>
          <a
            href="#"
            className={`${styles.navLinkAnchor} `}
          >
            <i className="fa-solid fa-circle-half-stroke"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
