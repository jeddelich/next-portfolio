"use client";

import Image from "next/image";

export type TechItem = {
  src: string;
  alt: string;
};

type TechStackShapesProps = {
  techStack: TechItem[];
  isModalOpen: boolean;
  setShapeImageRef: (index: number) => (element: HTMLImageElement | null) => void;
};

function TechStackShapes({
  techStack,
  isModalOpen,
  setShapeImageRef,
}: TechStackShapesProps) {
  return (
    <>
      {techStack.map((tech, index) => (
        <Image
          key={index}
          ref={setShapeImageRef(index)}
          src={tech.src}
          className={`shape shape--${index}`}
          alt={tech.alt}
          width={20}
          height={20}
          style={isModalOpen ? { visibility: "hidden" } : undefined}
        />
      ))}
    </>
  );
}

export default TechStackShapes;
