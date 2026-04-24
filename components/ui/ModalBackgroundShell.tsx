"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { useModal } from "@/contexts/ModalContext";
import styles from "./ModalBackgroundShell.module.css";

type ModalBackgroundShellProps = {
  children: ReactNode;
};

function ModalBackgroundShell({ children }: ModalBackgroundShellProps) {
  const { isModalOpen, setIsModalReady, toggleModal } = useModal();
  const [isModalBackgroundFixed, setIsModalBackgroundFixed] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      setIsModalReady(false);
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });

    const lockFrame = window.requestAnimationFrame(() => {
      setIsModalBackgroundFixed(true);

      window.requestAnimationFrame(() => {
        setIsModalReady(true);
      });
    });

    return () => {
      window.cancelAnimationFrame(lockFrame);
      setIsModalReady(false);
      setIsModalBackgroundFixed(false);
    };
  }, [isModalOpen, setIsModalReady]);

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
