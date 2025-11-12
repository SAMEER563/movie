// lib/api.ts
import { ApiResponse, Movie } from "./types";
import https from "https";
import dns from "dns";

// ✅ Force IPv4 first (fixes ECONNRESET on many Windows setups)
dns.setDefaultResultOrder("ipv4first");

const API_KEY = process.env.TMDB_API_KEY!;
const BASE_URL = process.env.TMDB_BASE_URL!;

// ✅ Custom HTTPS agent to handle Windows SSL/keep-alive
const agent = new https.Agent({
  keepAlive: true,
  family: 4, // use IPv4 explicitly
  rejectUnauthorized: false, // skip SSL verify for local dev
});

/**
 * Safe fetch with retry + custom agent
 */
async function safeFetch(url: string, retries = 2): Promise<Response> {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "User-Agent": "NextJS-StreamingDashboard/1.0",
      },
      cache: "no-store",
      // 👇 important for Node runtime
      agent,
    } as any);

    if (!res.ok) throw new Error(`Failed: ${res.status} ${res.statusText}`);
    return res;
  } catch (err) {
    if (retries > 0) {
      console.warn(`Retrying fetch... (${retries} left)`);
      await new Promise((r) => setTimeout(r, 500)); // small delay
      return safeFetch(url, retries - 1);
    }
    console.error("❌ Fetch failed after retries:", err);
    throw err;
  }
}

/**
 * Fetch movies by category (e.g., popular, top_rated, upcoming)
 */
export async function fetchMovies(category: string): Promise<Movie[]> {
  const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US`;
  const res = await safeFetch(url);
  const data: ApiResponse = await res.json();
  return data.results;
}

/**
 * Fetch single movie details by ID
 */
export async function fetchMovieById(id: string): Promise<Movie> {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const res = await safeFetch(url);
  const data: Movie = await res.json();
  return data;
}
