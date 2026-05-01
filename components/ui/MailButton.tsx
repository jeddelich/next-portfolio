"use client";

import { useModal } from "@/contexts/ModalContext";
import styles from "@/app/page.module.css";

function MailButton() {
  const { openModal } = useModal();

  return (
    <button
      className={`${styles.socialLink} click`}
      onClick={openModal}
      aria-label="Open contact form"
    >
      <i className="fa-solid fa-envelope"></i>
    </button>
  );
}

export default MailButton;
