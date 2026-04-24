"use client";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalReady, setIsModalReady] = useState(false);

  const openModal = () => {
    setIsModalReady(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalReady(false);
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => {
      if (prev) {
        setIsModalReady(false);
      }

      return !prev;
    });
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        isModalReady,
        setIsModalReady,
        openModal,
        closeModal,
        toggleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}