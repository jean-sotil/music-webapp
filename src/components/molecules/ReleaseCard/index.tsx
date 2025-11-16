"use client";

import Image from "next/image";
import type React from "react";

import type { ReleasesType } from "@/types/releases";

import Button from "../../atoms/Button";
import Title from "../../atoms/Title";

interface ReleaseCardProps {
  release: ReleasesType[0];
}

const ReleaseCard: React.FC<ReleaseCardProps> = ({ release }) => {
  const { title, url, image } = release;

  return (
    <Button className="relative aspect-square w-full" href={url}>
      <Image
        alt={`${title} Cover Art`}
        className="object-cover transition-opacity duration-300 group-hover:opacity-80"
        fetchPriority="low"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={image}
      />
      <div className="flex flex-col gap-2">
        <Title level={3}>{title}</Title>
      </div>
    </Button>
  );
};

export default ReleaseCard;
