import type React from "react";
import { Suspense } from "react";

import { getAllReleases } from "@/utils/getContent";

import Container from "../../molecules/Container";
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
      <h2 className="mb-10 text-center font-bold text-4xl text-secondary uppercase">
        {title}
      </h2>
      <Suspense fallback={<div>Loading releases...</div>}>
        <ReleaseCards />
      </Suspense>
    </Container>
  );
};

export default ReleasesGrid;
