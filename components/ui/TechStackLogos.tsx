"use client";

import Image from "next/image";

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
          className={`logo logo--${index}`}
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
