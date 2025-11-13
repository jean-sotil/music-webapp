import type React from "react";

import { getAllReleases } from "@/utils/content-utils";

import Title from "../../atoms/Title";
import ReleaseCard from "../../molecules/ReleaseCard";
import Slider from "../../molecules/Slider";

interface ReleasesSliderProps {
  title?: string;
}

const ReleasesSlider: React.FC<ReleasesSliderProps> = async ({
  title = "Latest Releases",
}) => {
  const releases = await getAllReleases();

  const releaseSlides = releases.map((release) => ({
    slide: (
      <ReleaseCard key={release.id} release={release} />
    ) as React.ReactElement,
    id: release.id,
  }));

  return (
    <div className="w-full">
      <Title level={2} className="mb-8 text-center">
        {title}
      </Title>
      <Slider slides={releaseSlides} />
    </div>
  );
};

export default ReleasesSlider;
