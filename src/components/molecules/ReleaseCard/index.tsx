"use client";

import Image from "next/image";
import type React from "react";

import type { ContentType } from "@/utils/getContent";

import Button from "../../atoms/Button";
import Card from "../../atoms/Card";
import Title from "../../atoms/Title";

interface ReleaseCardProps {
  release: ContentType["releases"][0];
}

const ReleaseCard: React.FC<ReleaseCardProps> = ({ release }) => {
  const { title, url, image } = release;

  return (
    <Card>
      <div className="relative aspect-square w-full">
        <Image
          alt={`${title} Cover Art`}
          className="object-cover transition-opacity duration-300 group-hover:opacity-80"
          fetchPriority="low"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={image}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Title level={3}>{title}</Title>
        <Button href={url}>Listen Now</Button>
      </div>
    </Card>
  );
};

export default ReleaseCard;
