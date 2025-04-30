// Taken from https://www.imdb.com/chart/top/?ref_=nv_mv_250
export const defaultMovies = [
  {
    id: 0,
    title: "The Shawshank Redemption",
    description:
      "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
    rating: 9.3,
  },
  {
    id: 1,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    rating: 9.2,
  },
  {
    id: 2,
    title: "The Dark Knight",
    description:
      "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
    rating: 9.0,
  },
  {
    id: 3,
    title: "The Godfather Part II",
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    rating: 9.0,
  },
  {
    id: 4,
    title: "12 Angry Men",
    description:
      "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    rating: 9.0,
  },
];

// Didn't want to hardcode the starting id so it is counted based on the defaultMovies array using reduce.
// See here for reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
export const defaultNextMovieId =
  1 + defaultMovies.reduce((maxId, movie) => Math.max(movie.id, maxId), 0);
