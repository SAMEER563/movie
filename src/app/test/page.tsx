import { fetchMovies } from "../../../lib/api";

export default async function TestPage() {
  const movies = await fetchMovies("popular");
  return (
    <div>
      <h1>Popular Movies (Test)</h1>
      <ul>
        {movies.slice(0, 5).map((m) => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
    </div>
  );
}
