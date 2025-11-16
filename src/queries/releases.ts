import type { ReleasesType } from "@/types/releases";
import fetch from "@/utils/fetch";

/**
 * Get releases with caching enabled (force-cache)
 */
export const getReleases = () =>
  fetch("tracks", { cache: "force-cache" }) as Promise<ReleasesType>;

/**
 * Fetch releases without caching (fresh data)
 */
export const fetchReleases = () => fetch("tracks") as Promise<ReleasesType>;
