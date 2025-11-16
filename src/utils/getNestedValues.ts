import type { ContentType, Langs } from "@/utils/getContent";

type LocalizedContent = ContentType[Langs];

/**
 * Utility function to navigate through nested objects using dot notation and array indexing
 * Examples:
 * - "navigation.releases" -> localizedContent.navigation.releases
 * - "albums[0].name" -> localizedContent.albums[0].name
 * - "release.artist.name" -> localizedContent.release.artist.name
 */
export default function getNestedValue(
  obj: LocalizedContent,
  path: string,
): string | undefined {
  if (!path) return undefined;

  const segments = path.split(".").flatMap((segment) => {
    // Handle array notation like "albums[0]"
    const arrayMatch = segment.match(/^(\w+)\[(\d+)\]$/);
    if (arrayMatch) {
      return [arrayMatch[1], parseInt(arrayMatch[2], 10)];
    }
    return segment;
  });

  let current: unknown = obj;

  for (const segment of segments) {
    if (current === null || current === undefined) {
      return undefined;
    }

    if (typeof segment === "number") {
      current = (current as Record<string, unknown>)[segment];
    } else {
      current = (current as Record<string, unknown>)[segment];
    }
  }

  return typeof current === "string" ? current : undefined;
}
