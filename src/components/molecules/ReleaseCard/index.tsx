"use client";

import React from "react";

import { ContentType } from "@/utils/content-utils";

import Button from "../../atoms/Button";
import Card from "../../atoms/Card";
import Image from "next/image";
import Title from "../../atoms/Title";

interface ReleaseCardProps {
  release: ContentType["en"]["releases"][0];
}

const ReleaseCard: React.FC<ReleaseCardProps> = ({ release }) => {
  const { title, date, description, coverPath, listenLink } = release;

  return (
    <Card>
      <div className="relative w-full aspect-square">
        <Image
          src={coverPath}
          alt={`${title} Cover Art`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-opacity duration-300 group-hover:opacity-80"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Title level={3}>{title}</Title>
        <p>{date}</p>
        <p>{description}</p>
        <Button href={listenLink}>Listen Now</Button>
      </div>
    </Card>
  );
};

export default ReleaseCard;
