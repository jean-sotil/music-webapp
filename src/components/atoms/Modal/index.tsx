"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Button from "../Button";

interface ModalProps {
  children: React.ReactNode;
  contentClassName?: string;
}

const Modal: React.FC<ModalProps> = ({ children, contentClassName }) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const baseContentClasses =
    "border border-primary/50 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative";
  const finalContentClasses = twMerge(baseContentClasses, contentClassName);

  return (
    <div
      className="fixed inset-0 z-100 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={handleClose}
    >
      <div className={finalContentClasses} onClick={(e) => e.stopPropagation()}>
        <Button onClick={handleClose} aria-label="Close button">
          &times;
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
