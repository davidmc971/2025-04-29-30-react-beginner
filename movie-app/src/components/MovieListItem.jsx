// <reference path="../types.js" />

/**
 * @typedef {Object} MovieListItemProps
 * @property {Movie} movie
 */

/**
 * @param {MovieListItemProps} props
 */
export default function MovieListItem({ movie }) {
  return (
    <li className="flex flex-col gap-1 bg-zinc-800 rounded-md p-3">
      <h3 className="font-semibold">{movie.title}</h3>
      <p>{movie.description}</p>
      <span>Rating: {movie.rating.toFixed(1)} / 10</span>
    </li>
  );
}
