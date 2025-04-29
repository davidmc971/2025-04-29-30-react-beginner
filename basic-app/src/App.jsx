import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");

    const id = setTimeout(() => {
      setCount((previousCount) => previousCount + 1);
    }, 3000);

    return () => {
      clearTimeout(id);
      console.log("cleanup");
    };
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;
