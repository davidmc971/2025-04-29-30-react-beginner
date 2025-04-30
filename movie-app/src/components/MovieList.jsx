// <reference path="../types.js" />

import MovieListItem from "./MovieListItem";

/**
 * @typedef {Object} MovieListProps
 * @property {Movie[]} movies
 */

/**
 * @param {MovieListProps} props
 */
export default function MovieList({ movies }) {
  return (
    <ul className="flex flex-col gap-2">
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
