"use client";

import type React from "react";
import { twMerge } from "tailwind-merge";

import Loading from "../../atoms/Loading";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  loading?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  id,
  loading,
}) => {
  const baseClasses = "w-full mx-auto";
  const finalClasses = twMerge(baseClasses, className);

  if (loading) {
    return <Loading />;
  }

  return (
    <div id={id} className={finalClasses}>
      {children}
    </div>
  );
};

export default Container;
