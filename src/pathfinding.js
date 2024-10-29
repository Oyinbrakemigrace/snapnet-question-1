
export const breadthFirstSearch = (grid, start, end) => {
  const queue = [start];
  const visited = new Set();
  visited.add(`${start[0]},${start[1]}`);
  const paths = { [`${start[0]},${start[1]}`]: null };

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    if (row === end[0] && col === end[1]) {
      const path = [];
      let current = end;
      while (current) {
        path.unshift(current);
        current = paths[`${current[0]},${current[1]}`];
      }
      return path;
    }

    const directions = [
      [0, 1], 
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length &&
        !visited.has(`${newRow},${newCol}`)
      ) {
        queue.push([newRow, newCol]);
        visited.add(`${newRow},${newCol}`);
        paths[`${newRow},${newCol}`] = [row, col];
      }
    }
  }
  return [];
};
