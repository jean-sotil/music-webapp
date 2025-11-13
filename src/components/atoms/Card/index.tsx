// biome-ignore-all lint: reason

"use client";

import type React from "react";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  index?: number;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  index = 0,
  onClick,
}) => {
  /**
   * Handles key down events for accessibility.
   * @param event
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick(event as unknown as React.MouseEvent<HTMLDivElement>);
    }
  };

  /**
   * Handles click events.
   */
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event?.preventDefault();
    onClick?.();
  };

  return (
    <div
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={index}
    >
      {children}
    </div>
  );
};

export default Card;
