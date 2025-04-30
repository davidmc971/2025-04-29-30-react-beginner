import { useState } from "react";
import { getMovies } from "./dataHandler";
import MovieList from "./components/MovieList";

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState(getMovies());
  return (
    <div className="flex flex-col p-2">
      <MovieList movies={movies} />
    </div>
  );
}
