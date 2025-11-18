"use client";

import Image from "next/image";
import type React from "react";

import { LocalizedProduct } from "@/types/content";

import Title from "../../atoms/Title";
import Card from "../../atoms/Card";
import Button from "../../atoms/Button";

interface ReleaseCardProps {
  cta?: string;
  product: LocalizedProduct;
}

const ProductCard: React.FC<ReleaseCardProps> = ({ cta, product }) => {
  const { title, id, image } = product;

  return (
    <Card className="group relative block overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          alt={title}
          className="transform transition-transform duration-500 group-hover:scale-110"
          src={image}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full">
        <Title level={3} className="mb-2 truncate">
          {title}
        </Title>
        {cta && <Button href={`/products/${id}`}>{cta}</Button>}
      </div>
    </Card>
  );
};

export default ProductCard;
