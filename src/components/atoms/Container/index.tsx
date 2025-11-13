"use client";

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, id }) => {
  const baseClasses = 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
  const finalClasses = twMerge(baseClasses, className);

  return (
    <div id={id} className={finalClasses}>
      {children}
    </div>
  );
};

export default Container;