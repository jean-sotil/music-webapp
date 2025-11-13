import React, { Suspense } from "react";

import { getAllReleases } from "@/utils/content-utils";

import ReleaseCard from "../../molecules/ReleaseCard";
import Container from "../../atoms/Container";

interface ReleasesGridProps {
  title?: string;
}

const ReleasesGrid: React.FC<ReleasesGridProps> = ({ title }) => {
  const releases = getAllReleases();

  const ReleaseCards = () => (
    <div className="grid grid-cols-4 gap-4">
      {releases.map((release, index) => (
        <div key={index} className="col-span-1">
          <ReleaseCard release={release} />
        </div>
      ))}
    </div>
  );

  return (
    <Container>
      <h2 className="text-4xl font-bold text-center mb-10 text-secondary uppercase">
        {title}
      </h2>
      <Suspense fallback={<div>Loading releases...</div>}>
        <ReleaseCards />
      </Suspense>
    </Container>
  );
};

export default ReleasesGrid;
