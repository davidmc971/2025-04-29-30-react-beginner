// <reference path="../types.js" />

import { defaultMovies, defaultNextMovieId } from "./defaultMovies";

/** @type {Movie[]} */
let movies = defaultMovies.slice();
let nextMovieId = defaultNextMovieId;

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

/** @param {Movie} movie  */
export function addMovie(movie) {
  // Early return if movie with id already exists
  if (movie.id != null && movies.some((m) => m.id === movie.id)) return movies;
  // Assign id if not given (after first check so the previous condidtion is not run for movies without id)
  if (movie.id == null) movie.id = nextMovieId++;

  movies = [...movies, movie];
  // movies = movies.concat(movie);

  return movies;
}

/**
 * @param {number} id
 * @param {number | string} rating
 */
export function rateMovie(id, rating) {
  movies = movies.map((movie) => {
    if (movie.id !== id) return movie;
    return {
      ...movie,
      rating: Number(rating),
    };
  });
  return movies;
}

/**
 * @param {Movie} updatedMovie
 */
export function updateMovie(updatedMovie) {
  movies = movies.map((m) => (m.id !== updatedMovie.id ? m : updatedMovie));
  return movies;
}

/**
 * @param {number} id
 */
export function toggleFavorite(id) {
  const newMovies = movies.slice();
  const movieIndex = movies.findIndex((m) => m.id === id);
  if (movieIndex === -1) return;

  newMovies[movieIndex].isFavorite = !newMovies[movieIndex].isFavorite;

  movies = newMovies;
  return newMovies;
}
