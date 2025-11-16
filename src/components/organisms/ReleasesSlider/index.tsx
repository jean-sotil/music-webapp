"use client";

import type React from "react";
import { useReleases } from "@/hooks/useReleases";

import Title from "../../atoms/Title";
import Container from "../../molecules/Container";
import ReleaseCard from "../../molecules/ReleaseCard";
import Slider from "../../molecules/Slider";

interface ReleasesSliderProps {
  title?: string;
}

const ReleasesSlider: React.FC<ReleasesSliderProps> = ({
  title = "Latest Releases",
}) => {
  const { data: releases, isLoading } = useReleases();

  const releaseSlides = releases?.map((release) => ({
    slide: (
      <ReleaseCard key={release.id} release={release} />
    ) as React.ReactElement,
    id: release.id,
  }));

  return (
    <Container className="w-full" loading={isLoading}>
      <Title level={2} className="mb-8 text-center">
        {title}
      </Title>
      {releaseSlides && <Slider slides={releaseSlides} />}
    </Container>
  );
};

export default ReleasesSlider;
