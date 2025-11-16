import fetch from "@/utils/fetch";
import type { ContentType } from "@/utils/getContent";

/**
 * Get releases with caching enabled (force-cache)
 */
export const getReleases = () =>
  fetch("tracks", { cache: "force-cache" }) as Promise<ContentType["releases"]>;

/**
 * Fetch releases without caching (fresh data)
 */
export const fetchReleases = () =>
  fetch("tracks") as Promise<ContentType["releases"]>;
