'use client';

import React, { JSX } from "react";
import { twMerge } from "tailwind-merge";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title = ({ children, className, level }: TitleProps) => {
  const baseStyles: { [key in TitleProps["level"]]: string } = {
    1: "text-5xl md:text-6xl font-black uppercase text-primary tracking-tight",
    2: "text-4xl md:text-5xl font-bold uppercase text-secondary",
    3: "text-3xl md:text-4xl font-semibold text-text-color",
    4: "text-2xl md:text-3xl font-medium text-text-color",
    5: "text-xl md:text-2xl font-normal text-text-color",
    6: "text-lg md:text-xl font-light text-text-color",
  };

  const finalClasses = twMerge(baseStyles[level], className || "");

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={finalClasses}>{children}</Tag>;
};

export default Title;
