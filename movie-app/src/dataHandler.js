import { defaultMovies } from "./defaultMovies";

let movies = defaultMovies.slice();

export function getMovies() {
  return movies;
}

/** @param {number} id  */
export function deleteMovieById(id) {
  // Copy movies such that a new reference exists for React to detect changes
  movies = movies.slice();

  const index = movies.findIndex((m) => m.id === id);
  movies.splice(index, 1);

  // Note: Alternatively we could use movies.filter(...) to set the new movies array,
  // but there are many valid approaches

  return movies;
}
