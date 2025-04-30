// <reference path="../types.js" />

import MovieListItem from "./MovieListItem";

/**
 * @typedef {Object} MovieListProps
 * @property {Movie[]} movies
 * @property {React.Dispatch<React.SetStateAction<Movie[]>>} setMovies
 */

/**
 * @param {MovieListProps} props
 */
export default function MovieList({ movies, setMovies }) {
  return (
    <ul className="flex flex-col gap-3 items-center">
      {movies.map((movie) => (
        <MovieListItem
          key={movie.id}
          movie={movie}
          setMovies={setMovies}
        />
      ))}
    </ul>
  );
}
