"use client";

import type React from "react";

import { useAppContext } from "@/context";

import Container from "../../molecules/Container";
import ProductCard from "../../molecules/ProductCard";
import Title from "../../atoms/Title";

const ProductGrid: React.FC = () => {
  const { localizedContent } = useAppContext();
  const { cta, title, items } = localizedContent.products

  return (
    <Container>
      <Title level={1}>{title}</Title>
      <div className="grid grid-cols-4 gap-4">
        {items?.map((product) => (
          <div key={product.id} className="col-span-1">
            <ProductCard product={product} cta={cta} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductGrid;
