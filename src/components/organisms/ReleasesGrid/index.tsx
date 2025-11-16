"use client";

import type React from "react";

import { useReleases } from "@/hooks/useReleases";

import Container from "../../molecules/Container";
import ReleaseCard from "../../molecules/ReleaseCard";

interface ReleasesGridProps {
  title?: string;
}

const ReleasesGrid: React.FC<ReleasesGridProps> = ({ title }) => {
  const { data: releases, isLoading } = useReleases();

  return (
    <Container loading={isLoading}>
      <h2 className="mb-10 text-center font-bold text-4xl text-secondary uppercase">
        {title}
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {releases?.map((release) => (
          <div key={release.id} className="col-span-1">
            <ReleaseCard release={release} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ReleasesGrid;
