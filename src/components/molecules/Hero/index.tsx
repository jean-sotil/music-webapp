"use client";

import React from "react";
import { useAppContext } from "@/context";

import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import Container from "../../atoms/Container";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const { content, getLocalizedContent, lang } = useAppContext();
  const localizedText = getLocalizedContent(lang);
  const newRelease = content.releases.find((release) => release.isNewRelease);

  if (!newRelease) {
    return (
      <section
        className="min-h-[70vh] flex items-center justify-center text-center"
      >
        <p className="text-xl text-gray-400">
          No new release configured in the content file.
        </p>
      </section>
    );
  }

  const { title, listenLink } = newRelease;

  return (
    <Container
      id="hero"
    >
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-background opacity-70"></div>
      </div>

      <div className="relative z-10 text-center p-6 md:p-12 max-w-4xl">
        <Title level={1}>{title}</Title>

        <p className="text-lg md:text-xl font-light mb-10 text-text-color/80">
          {localizedText.hero.tagline}
        </p>

        <Button href={listenLink} target="_blank">
          {localizedText.hero.cta}
        </Button>

        <p className="mt-6 text-sm text-gray-300">{title} is out now!</p>
      </div>
    </Container>
  );
};

export default HeroSection;
