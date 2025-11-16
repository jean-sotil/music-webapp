type CacheStrategy = "force-cache" | "no-cache" | "no-store" | undefined;

interface FetchOptions {
  cache?: CacheStrategy;
}

/**
 * Unified fetch utility for API requests
 * @param endpoint - The API endpoint (without base URL)
 * @param options - Fetch options (cache strategy, etc)
 * @returns Promise with the JSON response
 */
async function fetchFromAPI<T = unknown>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API_BASE_URL environment variable is not set");
  }

  const url = `${baseUrl}${endpoint}`;

  console.log(`Fetching from ${url}`);

  try {
    const res = await fetch(url, {
      cache: options.cache,
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
    }

    return res.json() as Promise<T>;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

export default fetchFromAPI;
