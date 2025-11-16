import { useQuery } from "@tanstack/react-query";

import { fetchReleases } from "@/queries";

export const useReleases = () => {
  return useQuery({
    queryKey: ["releases"],
    queryFn: fetchReleases,
  });
};
