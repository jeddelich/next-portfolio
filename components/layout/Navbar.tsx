"use client";

import { useRef } from "react";
import { useModal } from "@/contexts/ModalContext";
import { useTheme } from "@/contexts/ThemeContext";

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
    <nav>
      <figure className="personal-logo--wrapper">
        <div className="personal-logo"></div>
        <div onClick={() => toggleModal()}
          className="personal-logo--effect"
        ></div>
      </figure>
      <ul className="nav__link--list">
        <li className="nav__link" onClick={() => toggleModal()}>
          <a
            href="#"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            About
          </a>
        </li>
        <li className="nav__link">
          <a
            href="#projects"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            Projects
          </a>
        </li>
        <li className="nav__link" onClick={() => toggleModal()}>
          <a
            href="#"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            Contact
          </a>
        </li>
        <li className="nav__link click" onClick={handleThemeToggle}>
          <a
            href="#"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            <i className="fa-solid fa-circle-half-stroke"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
