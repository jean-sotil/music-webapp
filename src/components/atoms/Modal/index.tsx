"use client";

import { useRouter } from "next/navigation";
import type React from "react";
import { useCallback, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import Button from "../Button";

interface ModalProps {
  children: React.ReactNode;
  contentClassName?: string;
}

const Modal: React.FC<ModalProps> = ({ children, contentClassName }) => {
  const router = useRouter();

  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  const handleOverlayKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      if (event.target === event.currentTarget) {
        handleClose();
      }
    }
  };

  const baseContentClasses =
    "border border-primary/50 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative";
  const finalContentClasses = twMerge(baseContentClasses, contentClassName);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      onKeyDown={handleOverlayKeyDown}
      role="dialog"
      aria-label="Close modal"
    >
      <div className={finalContentClasses}>
        <Button onClick={handleClose} aria-label="Close button">
          &times;
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
