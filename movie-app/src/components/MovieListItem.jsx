// <reference path="../types.js" />

import { deleteMovieById } from "../dataHandler";

/**
 * @typedef {Object} MovieListItemProps
 * @property {Movie} movie
 * @property {React.Dispatch<React.SetStateAction<Movie[]>>} setMovies
 */

/**
 * @param {MovieListItemProps} props
 */
export default function MovieListItem({ movie, setMovies }) {
  const handleDelete = () => {
    setMovies(deleteMovieById(movie.id));
  };

  return (
    <li className="flex flex-col gap-1 bg-zinc-800 rounded-md p-3 max-w-[70ch]">
      <h3 className="font-semibold">{movie.title}</h3>
      <p>{movie.description}</p>
      <span>Rating: {movie.rating.toFixed(1)} / 10</span>
      <span className="pt-1">
        <button
          className="bg-red-900 px-2 py-0.5 rounded-md font-semibold cursor-pointer hover:bg-red-950"
          onClick={handleDelete}
        >
          Delete
        </button>
      </span>
    </li>
  );
}
