"use client";

import type React from "react";

import { useAppContext } from "@/context";

import Button from "../../atoms/Button";
import Title from "../../atoms/Title";
import Container from "../Container";

const HeroSection: React.FC = () => {
  const { content, localizedContent } = useAppContext();
  const newRelease = content.releases.find((release) => release.isNewRelease);

  if (!newRelease) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center text-center">
        <p className="text-gray-400 text-xl">
          No new release configured in the content file.
        </p>
      </section>
    );
  }

  const { title } = newRelease;

  return (
    <Container className="relative flex h-screen items-center">
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <div className="absolute inset-0 bg-background opacity-70"></div>
      </div>

      <div className="relative z-10 w-full text-center">
        <Title level={1}>{title}</Title>

        <p className="mb-10 font-light text-lg text-text-color/80 md:text-xl">
          {localizedContent.hero.tagline}
        </p>

        <Button href="/shop">{localizedContent.hero.cta}</Button>

        <p className="mt-6 text-gray-300 text-sm">{title} is out now!</p>
      </div>
    </Container>
  );
};

export default HeroSection;
