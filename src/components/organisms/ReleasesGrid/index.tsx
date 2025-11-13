import type React from "react";
import { Suspense } from "react";

import { getAllReleases } from "@/utils/content-utils";

import Container from "../../atoms/Container";
import ReleaseCard from "../../molecules/ReleaseCard";

interface ReleasesGridProps {
  title?: string;
}

const ReleasesGrid: React.FC<ReleasesGridProps> = ({ title }) => {
  const releases = getAllReleases();

  const ReleaseCards = () => (
    <div className="grid grid-cols-4 gap-4">
      {releases.map((release) => (
        <div key={release.id} className="col-span-1">
          <ReleaseCard release={release} />
        </div>
      ))}
    </div>
  );

  return (
    <Container>
      <h2 className="text-secondary mb-10 text-center text-4xl font-bold uppercase">
        {title}
      </h2>
      <Suspense fallback={<div>Loading releases...</div>}>
        <ReleaseCards />
      </Suspense>
    </Container>
  );
};

export default ReleasesGrid;
