"use client";

import type React from "react";

import { useAppContext } from "@/context";

import Button from "../../atoms/Button";
import Container from "../../atoms/Container";
import Title from "../../atoms/Title";

const HeroSection: React.FC = () => {
  const { content, getLocalizedContent, lang } = useAppContext();
  const localizedText = getLocalizedContent(lang);
  const newRelease = content.releases.find((release) => release.isNewRelease);

  if (!newRelease) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center text-center">
        <p className="text-xl text-gray-400">
          No new release configured in the content file.
        </p>
      </section>
    );
  }

  const { title, listenLink } = newRelease;

  return (
    <Container className="relative flex h-screen">
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <div className="bg-background absolute inset-0 opacity-70"></div>
      </div>

      <div className="relative z-10 w-full text-center">
        <Title level={1}>{title}</Title>

        <p className="text-text-color/80 mb-10 text-lg font-light md:text-xl">
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
