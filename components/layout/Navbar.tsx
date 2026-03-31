"use client";

import Image from "next/image";
import { useModal } from "@/contexts/ModalContext";
import { useTheme } from "@/contexts/ThemeContext";

function Navbar() {
  const { toggleModal, isModalOpen } = useModal();
  const { toggleTheme } = useTheme();

  if (isModalOpen) return null;

  return (
    <nav>
      <figure className="personal-logo--wrapper">
        <Image
          id="personal-logo"
          className="personal-logo--light"
          src="/logo.png"
          alt=""
          width={80}
          height={80}
        />
        <Image
          id="personal-logo"
          className="personal-logo--dark"
          src="/logo dark.png"
          alt=""
          width={80}
          height={80}
        />
        <div
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
        <li className="nav__link click" onClick={() => toggleTheme()}>
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
