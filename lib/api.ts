// lib/api.ts
import { ApiResponse, Movie } from "./types";

const API_KEY = process.env.TMDB_API_KEY!;
const BASE_URL = process.env.TMDB_BASE_URL!;

/**
 * Fetch movies by category (e.g., popular, top_rated, upcoming)
 */
export async function fetchMovies(category: string): Promise<Movie[]> {
  const res = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US`);
  if (!res.ok) throw new Error(`Failed to fetch movies: ${res.statusText}`);
  const data: ApiResponse = await res.json();
  return data.results;
}

/**
 * Fetch single movie details by ID
 */
export async function fetchMovieById(id: string): Promise<Movie> {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  if (!res.ok) throw new Error(`Failed to fetch movie details: ${res.statusText}`);
  const data: Movie = await res.json();
  return data;
}
