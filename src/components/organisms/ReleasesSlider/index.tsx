"use client";

import type React from "react";

import { useReleases } from "@/hooks/useReleases";
import { useTranslation } from "@/hooks/useTranslation";

import Title from "../../atoms/Title";
import Container from "../../molecules/Container";
import ReleaseCard from "../../molecules/ReleaseCard";
import Slider from "../../molecules/Slider";

const ReleasesSlider: React.FC = () => {
  const title = useTranslation("releases.title");
  const { data: releases, isLoading } = useReleases();

  const releaseSlides = releases?.splice(0, 12)?.map((release) => ({
    slide: (
      <ReleaseCard key={release.id} release={release} />
    ) as React.ReactElement,
    id: release.id,
  }));

  return (
    <Container className="w-full" loading={isLoading}>
      <Title level={2} className="text-center">
        {title}
      </Title>
      {releaseSlides && <Slider slides={releaseSlides} />}
    </Container>
  );
};

export default ReleasesSlider;
