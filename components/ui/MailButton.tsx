"use client";

import { useModal } from "@/contexts/ModalContext";

type MailButtonProps = {
  heroStyles?: string;
};

function MailButton({ heroStyles }: MailButtonProps) {
  const { openModal } = useModal();

  return (
    <button
      className={`${heroStyles ?? ""} click`}
      onClick={openModal}
      aria-label="Open contact form"
    >
      <i className="fa-solid fa-envelope"></i>
    </button>
  );
}

export default MailButton;
