import { useState } from "react";
import { Plus } from "lucide-react";

function App() {
  const [arrayMut, setArrayMut] = useState([0]);
  const [arrayImmut, setArrayImmut] = useState([0]);

  const addMut = () => {
    const next = (arrayMut.at(-1) ?? 0) + 1;
    arrayMut.push(next);
    setArrayMut(arrayMut);
  };

  const addImmut = () => {
    const next = (arrayImmut.at(-1) ?? 0) + 1;
    setArrayImmut([...arrayImmut, next]);
    // setArrayImmut(arrayImmut.concat(next));
  };

  return (
    <div className="h-full p-4 flex flex-col gap-4 bg-gray-950">
      <div className="border border-gray-600 rounded-md p-3 bg-gray-900">
        <h2>Mutable Array:</h2>
        <span className="flex font-mono gap-[1ch]">
          {arrayMut.map((item) => (
            <div>{item}</div>
          ))}
        </span>
        <button
          className="hover:bg-gray-950 p-0.5 cursor-pointer border border-gray-600 rounded-md"
          onClick={addMut}
        >
          <Plus size={18} />
        </button>
      </div>
      <div className="border border-gray-600 rounded-md p-3 bg-gray-900">
        <h2>Immutable Array:</h2>
        <span className="flex font-mono gap-[1ch]">
          {arrayImmut.map((item) => (
            <div>{item}</div>
          ))}
        </span>
        <button
          className="hover:bg-gray-950 p-0.5 cursor-pointer border border-gray-600 rounded-md"
          onClick={addImmut}
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
}

export default App;
