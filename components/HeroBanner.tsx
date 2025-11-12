import Image from "next/image";
import { Movie } from "../lib/types";
import Link from "next/link";

interface HeroBannerProps {
  movie: Movie;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section className="relative w-full h-[70vh] mb-12">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={movie.title}
        fill
        priority
        className="object-cover opacity-70"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute bottom-20 left-6 md:left-12 max-w-2xl space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">{movie.title}</h1>
        <p className="text-gray-300 text-sm md:text-base line-clamp-3">
          {movie.overview}
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href={`/movie/${movie.id}`}
            className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            ▶ Play
          </Link>
          <Link
            href={`/movie/${movie.id}`}
            className="bg-gray-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-600 transition"
          >
            More Info
          </Link>
        </div>
      </div>
    </section>
  );
}
