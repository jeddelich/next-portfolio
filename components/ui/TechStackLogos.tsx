"use client";

import Image from "next/image";
import styles from "./TechStackLogos.module.css";

export type TechItem = {
  src: string;
  alt: string;
};

type TechStackLogosProps = {
  techStack: TechItem[];
  isModalOpen: boolean;
  setLogoImageRef: (index: number) => (element: HTMLImageElement | null) => void;
};

function TechStackLogos({
  techStack,
  isModalOpen,
  setLogoImageRef,
}: TechStackLogosProps) {
  return (
    <>
      {techStack.map((tech, index) => (
        <Image
          key={index}
          ref={setLogoImageRef(index)}
          src={tech.src}
          className={`${styles.logo} ${styles[`logo${index}` as keyof typeof styles]}`}
          alt={tech.alt}
          width={20}
          height={20}
          style={isModalOpen ? { visibility: "hidden" } : undefined}
        />
      ))}
    </>
  );
}

export default TechStackLogos;
