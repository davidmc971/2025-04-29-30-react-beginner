import { useState } from "react";
import { getMovies } from "./dataHandler";
import MovieList from "./components/MovieList";
import { useEffect } from "react";
import { Film } from "lucide-react";

export default function App() {
  const [movies, setMovies] = useState(getMovies());

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <>
      <div className="w-full bg-zinc-950 p-3 px-4 flex items-center gap-2">
        <Film size={20} />
        <h1 className="font-semibold">My Movie List</h1>
      </div>
      <div className="flex flex-col p-3 gap-3">
        <MovieList movies={movies} setMovies={setMovies} />
      </div>
    </>
  );
}
