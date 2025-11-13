"use client";

import type React from "react";

const Loading: React.FC = () => {
  return (
    <div
      aria-label="Loading"
      className="flex h-64 w-full items-center justify-center"
      role="progressbar"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-border-t-primary" />
        </div>

        <div className="flex items-center">
          <span className="font-medium text-gray-600 text-sm">Loading</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
