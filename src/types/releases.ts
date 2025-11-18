export type ReleaseItem = {
  id: number;
  image: string;
  isNewRelease: boolean;
  title: string;
  url: string;
};

export type ReleasesType = ReleaseItem[];
