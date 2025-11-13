"use client";

import Link from "next/link";
import type React from "react";
import { twMerge } from "tailwind-merge";

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
  rel?: string;
  size?: "sm" | "md" | "lg";
  transparent?: boolean;
  variant?: "primary" | "secondary" | "outline";
}

interface ButtonProps extends BaseProps {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

interface LinkProps extends BaseProps {
  href: string;
  target?: "_blank";
}

type CombinedProps = ButtonProps | LinkProps;

const Button: React.FC<CombinedProps> = ({
  children,
  className,
  onClick,
  size = "md",
  transparent,
  variant = "primary",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-4 text-xl",
  };

  const variantClasses = {
    primary:
      "bg-primary text-background hover:bg-primary/90 focus:ring-primary",
    secondary:
      "bg-secondary text-background hover:bg-secondary/90 focus:ring-secondary",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary",
  };

  const finalClasses = twMerge(
    sizeClasses[size],
    variantClasses[variant],
    transparent &&
      "bg-transparent border-none text-inherit hover:bg-transparent focus:ring-0",
    className,
  );

  const isLink = "href" in props && !!(props as LinkProps).href;

  if (isLink) {
    const linkProps = props as LinkProps;

    return (
      <Link
        href={linkProps.href}
        className={finalClasses}
        onClick={
          onClick as
            | ((event: React.MouseEvent<HTMLAnchorElement>) => void)
            | undefined
        }
        rel={linkProps.rel}
        target={linkProps.target}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonProps;

  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={
        onClick as
          | ((event: React.MouseEvent<HTMLButtonElement>) => void)
          | undefined
      }
      disabled={buttonProps.disabled}
      className={finalClasses}
    >
      {children}
    </button>
  );
};

export default Button;
