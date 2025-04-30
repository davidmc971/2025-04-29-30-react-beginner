// <reference path="../types.js" />

import { useState } from "react";

/**
 * @typedef {Object} MovieListItemEditProps
 * @property {Movie} movie
 * @property {(movie: Movie) => void} onSubmit
 * @property {() => void} onAbort
 */

/**
 * @param {MovieListItemEditProps} props
 */

export default function MovieListItemEdit({ movie, onSubmit, onAbort }) {
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);

  /** @type React.FormEventHandler<HTMLFormElement> */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...movie,
      title,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <label>Title</label>
      <input
        className="border border-zinc-700 px-2 py-1 rounded-sm"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label>Description</label>
      <textarea
        className="border border-zinc-700 px-2 py-1 rounded-sm"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <div className="pt-1 flex gap-2">
        <button
          className="bg-blue-900 px-2 py-0.5 rounded-md font-semibold cursor-pointer hover:bg-blue-950"
          type="submit"
        >
          Submit
        </button>
        <button
          className="bg-red-900 px-2 py-0.5 rounded-md font-semibold cursor-pointer hover:bg-red-950"
          onClick={onAbort}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
