"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { useModal } from "@/contexts/ModalContext";
import styles from "./ModalBackgroundShell.module.css";

type ModalBackgroundShellProps = {
  children: ReactNode;
};

function ModalBackgroundShell({ children }: ModalBackgroundShellProps) {
  const { isModalOpen, toggleModal } = useModal();
  const [isModalBackgroundFixed, setIsModalBackgroundFixed] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const timer = setTimeout(() => {
      setIsModalBackgroundFixed(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      setIsModalBackgroundFixed(false);
    };
  }, [isModalOpen]);

  return (
    <div className={isModalBackgroundFixed ? styles.modalBackgroundFixed : ""}>
      {children}
      {isModalOpen && isModalBackgroundFixed && (
        <div className={styles.modalBackground} onClick={() => toggleModal()}></div>
      )}
    </div>
  );
}

export default ModalBackgroundShell;
