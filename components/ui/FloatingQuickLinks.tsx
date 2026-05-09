import {
  RiFolderUserLine,
} from "react-icons/ri";

import styles from "./FloatingQuickLinks.module.css";

function FloatingQuickLinks() {
  return (
    <div className={styles.fabWrap}>
      <div className={styles.menuShell}>
        <div className={styles.linkPill}>
          <a
            href="https://www.linkedin.com/in/jed-delich/"
            target="_blank"
            rel="noreferrer"
            className={`${styles.linkIcon} click`}
            aria-label="Open LinkedIn profile"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/jeddelich"
            target="_blank"
            rel="noreferrer"
            className={`${styles.linkIcon} click`}
            aria-label="Open GitHub profile"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="Jed_Delich_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={`${styles.linkIcon} click`}
            aria-label="Open resume PDF"
          >
            <i className="fa-solid fa-file-pdf" aria-hidden="true"></i>
          </a>
          <a
            href="#contact"
            className={`${styles.linkIcon} click`}
            aria-label="Go to contact section"
          >
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          </a>
        </div>

        <button
          type="button"
          className={styles.triggerButton}
          aria-label="Open quick links"
        >
          <RiFolderUserLine aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default FloatingQuickLinks;