"use client";

import type React from "react";

import { useAppContext } from "@/context";

import Button from "../../atoms/Button";
import Title from "../../atoms/Title";
import Container from "../Container";

const HeroSection: React.FC = () => {
  const { localizedContent } = useAppContext();
  const newProduct = localizedContent.products.items.find(
    (product) => product.isNewProduct,
  );

  if (!newProduct) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center text-center">
        <p className="text-gray-400 text-xl">
          No new release configured in the content file.
        </p>
      </section>
    );
  }

  const { title } = newProduct;

  return (
    <Container className="relative flex h-screen items-center">
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <div className="absolute inset-0 bg-background opacity-70"></div>
      </div>

      <div className="relative z-10 w-full text-center">
        <Title level={1}>{newProduct.title}</Title>

        <p className="mb-10 font-light text-lg text-text md:text-xl">
          {localizedContent.hero.tagline}
        </p>

        <Button href="/products">{localizedContent.hero.cta}</Button>

        <p className="mt-6 text-sm text-text">{title} is out now!</p>
      </div>
    </Container>
  );
};

export default HeroSection;
