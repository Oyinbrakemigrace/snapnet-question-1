import React, { useState } from 'react';
import InputComponent from './components/InputComponent'; 
import GridComponent from './components/GridComponent';
import { breadthFirstSearch } from './pathfinding';

const App = () => {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [path, setPath] = useState([]);

  const handleFindPath = () => {
    if (start && end) {
      const grid = Array.from({ length: rows }, () => Array(cols).fill(0));
      const foundPath = breadthFirstSearch(grid, start, end);
      setPath(foundPath);
    }
  };

  return (
    <div className="p-4">
      <InputComponent setRows={setRows} setCols={setCols} />
      <GridComponent
        rows={rows}
        cols={cols}
        setStart={setStart}
        setEnd={setEnd}
        path={path}
        start={start}
        end={end}
      />
      <button
        onClick={handleFindPath}
        className="bg-purple-500 text-white p-2 rounded mt-4"
      >
        Find Shortest Path
      </button>
    </div>
  );
};

export default App;
