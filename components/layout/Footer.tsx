"use client";

import Image from "next/image";
import { useModal } from "@/contexts/ModalContext";
import styles from "./Footer.module.css";

function Footer() {
  const { toggleModal, isModalOpen } = useModal();

if (isModalOpen) return null;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`row ${styles.footerRow}`}>
          <figure className={styles.footerLogoWrapper}>
            <Image
              className={styles.footerLogoImg}
              src="/branding/logo-dark.png"
              alt="Logo"
              width={70}
              height={70}
            />
          </figure>
          <div className={styles.footerSocialList}>
            <a
              href="https://github.com/jeddelich"
              className={`${styles.footerSocialLink} link__hover-effect link__hover-effect--white`}
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/jed-delich/"
              className={`${styles.footerSocialLink} link__hover-effect link__hover-effect--white`}
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className={`${styles.footerSocialLink} link__hover-effect link__hover-effect--white`}
              onClick={() => toggleModal()}
            >
              Contact
            </a>
            <a
              href="Jed_Delich_Resume.pdf"
              className={`${styles.footerSocialLink} link__hover-effect link__hover-effect--white`}
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className={styles.footerCopyright}>
            Copyright &copy; 2025 Jed Delich
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
