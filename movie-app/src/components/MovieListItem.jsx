// <reference path="../types.js" />

import { useState } from "react";
import {
  deleteMovieById,
  rateMovie,
  toggleFavorite,
  updateMovie,
} from "../dataHandler";
import MovieListItemEdit from "./MovieListItemEdit";

/**
 * @typedef {Object} MovieListItemProps
 * @property {Movie} movie
 * @property {React.Dispatch<React.SetStateAction<Movie[]>>} setMovies
 */

/**
 * @param {MovieListItemProps} props
 */
export default function MovieListItem({ movie, setMovies }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    setMovies(deleteMovieById(movie.id));
  };

  const handleRate = () => {
    const newRating = prompt(
      `Please enter the new rating for "${movie.title}"`
    );

    setMovies(rateMovie(movie.id, newRating));
  };

  /** @param {Movie} movie */
  const handleSubmitUpdateMovie = (movie) => {
    setMovies(updateMovie(movie));
    setIsEditing(false);
  };

  const handleAbortUpdateMovie = () => {
    setIsEditing(false);
  };

  const handleToggleFavorite = () => {
    setMovies(toggleFavorite(movie.id));
  };

  return (
    <li className="flex flex-col gap-1 bg-zinc-800 rounded-md p-3 w-full max-w-[70ch]">
      {isEditing ? (
        <MovieListItemEdit
          movie={movie}
          onSubmit={handleSubmitUpdateMovie}
          onAbort={handleAbortUpdateMovie}
        />
      ) : (
        <>
          <h3 className="font-semibold">{movie.title}</h3>
          <p>{movie.description}</p>
          <span>Rating: {movie.rating.toFixed(1)} / 10</span>
          <span className="pt-1 flex gap-2">
            <button
              className="bg-amber-200 text-yellow-950 px-2 py-0.5 rounded-md font-semibold cursor-pointer hover:brightness-80"
              onClick={handleToggleFavorite}
            >
              {movie.isFavorite ? "Unfavorite" : "Favorite"}
            </button>
            <button
              className="bg-blue-900 px-2 py-0.5 rounded-md font-semibold cursor-pointer hover:bg-blue-950"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-blue-900 px-2 py-0.5 rounded-md font-semibold cursor-pointer hover:bg-blue-950"
              onClick={handleRate}
            >
              Rate
            </button>
            <button
              className="bg-red-900 px-2 py-0.5 rounded-md font-semibold cursor-pointer hover:bg-red-950"
              onClick={handleDelete}
            >
              Delete
            </button>
          </span>
        </>
      )}
    </li>
  );
}
