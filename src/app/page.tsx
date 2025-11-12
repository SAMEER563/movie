import { fetchMovies } from "../lib/api";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";

export default async function HomePage() {
  const [popular, topRated, upcoming] = await Promise.all([
    fetchMovies("popular"),
    fetchMovies("top_rated"),
    fetchMovies("upcoming"),
  ]);

  const heroMovie = popular[0];

  return (
    <div>
      {/* Hero Section */}
      <HeroBanner movie={heroMovie} />

      {/* Movie Rows */}
      <div className="space-y-8">
        <MovieRow title="Popular" movies={popular} />
        <MovieRow title="Top Rated" movies={topRated} />
        <MovieRow title="Upcoming" movies={upcoming} />
      </div>
    </div>
  );
}
