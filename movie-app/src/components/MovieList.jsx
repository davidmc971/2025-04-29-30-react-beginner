// <reference path="../types.js" />

import { useLocation } from "react-router-dom";
import { addMovie } from "../dataHandler";
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
  const location = useLocation();
  const shouldOnlyShowFavorites = location.pathname === "/favorites";

  const handleAddMovie = () => {
    setMovies(
      addMovie({
        title: "New movie",
        description: "New description.",
        rating: 0,
      })
    );
  };

  return (
    <>
      {!shouldOnlyShowFavorites && (
        <div className="flex justify-center">
          <button
            className="bg-zinc-300 text-zinc-950 px-2 py-0.5 rounded-md font-semibold cursor-pointer hover:bg-zinc-100"
            onClick={handleAddMovie}
          >
            Add Movie
          </button>
        </div>
      )}

      <ul className="flex flex-col gap-3 items-center">
        {movies
          .filter((m) => (shouldOnlyShowFavorites ? m.isFavorite : true))
          .map((movie) => (
            <MovieListItem key={movie.id} movie={movie} setMovies={setMovies} />
          ))}
      </ul>
    </>
  );
}
