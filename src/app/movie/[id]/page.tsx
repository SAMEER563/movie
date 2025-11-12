import { fetchMovieById } from "../../../../lib/api";
import Image from "next/image";
import Link from "next/link";
import BackButton from "../../../../components/BackButton";
import { FaStar, FaPlay, FaPlus } from "react-icons/fa";

interface MovieDetailPageProps {
  params: { id: string };
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const movie = await fetchMovieById(params.id);

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : null;
  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Cinematic Backdrop */}
      {backdropUrl && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={backdropUrl}
            alt={movie.title}
            fill
            priority
            className="object-cover object-center opacity-30 blur-2xl scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />
        </div>
      )}

      <div className="relative z-10 px-6 md:px-12 py-16 max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <BackButton />
        </div>

        {/* Movie Details Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Poster */}
          {posterUrl && (
            <div className="relative w-full h-[550px] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
              <Image
                src={posterUrl}
                alt={movie.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          )}

          {/* Movie Information */}
          <div className="backdrop-blur-md bg-white/5 rounded-xl p-8 shadow-lg border border-white/10 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              {movie.title}
            </h1>

            {movie.release_date && (
              <p className="text-gray-400 text-sm">
                📅{" "}
                {new Date(movie.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}

            {/* Rating */}
            {movie.vote_average && (
              <div className="flex items-center gap-2 text-yellow-400 font-medium text-lg">
                <FaStar className="text-yellow-400" />
                {movie.vote_average.toFixed(1)}
              </div>
            )}

            {/* Overview */}
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              {movie.overview || "No overview available."}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-md font-semibold hover:bg-gray-200 transition duration-300 shadow-md hover:shadow-xl">
                <FaPlay /> Watch Now
              </button>
              <button className="flex items-center gap-2 bg-gray-800/70 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-gray-700 transition duration-300 shadow-md hover:shadow-xl">
                <FaPlus /> Add to List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
