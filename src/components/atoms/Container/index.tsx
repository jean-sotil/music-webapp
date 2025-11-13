"use client";

import type React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, id }) => {
  const baseClasses = "w-full mx-auto";
  const finalClasses = twMerge(baseClasses, className);

  return (
    <div id={id} className={finalClasses}>
      {children}
    </div>
  );
};

export default Container;
