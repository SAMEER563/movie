import { fetchMovies } from "../../lib/api";

export default async function HomePage() {
  const popularMovies = await fetchMovies("popular");

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {popularMovies.slice(0, 12).map((movie) => (
          <div key={movie.id} className="bg-gray-900 rounded-lg overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto"
            />
            <div className="p-2 text-sm">{movie.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
