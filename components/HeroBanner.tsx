import Image from "next/image";
import { Movie } from "../lib/types";
import Link from "next/link";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

interface HeroBannerProps {
  movie: Movie;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section className="relative w-full h-[85vh] mb-16 overflow-hidden rounded-2xl">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={movie.title}
        fill
        priority
        className="object-cover object-center scale-105 transition-transform duration-[4000ms] ease-out"
      />

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />

      {/* Content */}
      <div className="absolute bottom-24 left-6 md:left-16 max-w-2xl space-y-5 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          {movie.title}
        </h1>

        <p className="text-gray-300 text-sm md:text-lg leading-relaxed line-clamp-3 max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
          {movie.overview}
        </p>

        <div className="flex gap-4 mt-6">
          <Link
            href={`/movie/${movie.id}`}
            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-md font-semibold hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg"
          >
            <FaPlay className="text-black" /> Play
          </Link>

          <Link
            href={`/movie/${movie.id}`}
            className="flex items-center gap-2 bg-gray-800/70 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-gray-700/90 transition duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
          >
            <FaInfoCircle /> More Info
          </Link>
        </div>
      </div>

      {/* Subtle Bottom Fade for Smooth Section Transition */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
