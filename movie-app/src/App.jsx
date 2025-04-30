import { useState } from "react";
import { getMovies } from "./dataHandler";
import MovieList from "./components/MovieList";
import { useEffect } from "react";
import { Film } from "lucide-react";
import { BrowserRouter, Link } from "react-router-dom";

export default function App() {
  const [movies, setMovies] = useState(getMovies());

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <BrowserRouter>
      <nav className="w-full bg-zinc-950 p-3 px-4 flex items-center gap-2">
        <Film size={20} />
        <h1 className="font-semibold mr-auto">My Movie List</h1>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <div className="flex flex-col p-3 gap-3">
        <MovieList movies={movies} setMovies={setMovies} />
      </div>
    </BrowserRouter>
  );
}
