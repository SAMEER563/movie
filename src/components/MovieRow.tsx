"use client";

import { Movie } from "../lib/types";
import Image from "next/image";
import Link from "next/link";

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="flex overflow-x-auto gap-3 scrollbar-hide pb-3">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="flex-shrink-0 w-36 md:w-48 hover:scale-105 transition-transform"
          >
            <div className="relative w-full h-52 md:h-72 rounded-lg overflow-hidden bg-gray-800">
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                  No Image
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
