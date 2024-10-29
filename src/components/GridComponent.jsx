import React from 'react';

const GridComponent = ({ rows, cols, setStart, setEnd, path, start, end }) => {
    const handleClick = (row, col) => {
        if (!start) {
            setStart([row, col]);
        } else if (!end) {
            setEnd([row, col]);
        } else {
            setStart([row, col]);
            setEnd(null);
        }
    };

    return (
        <div
            className="grid border"
            style={{ gridTemplateColumns: `repeat(${cols}, 40px)` }}
        >
            {Array.from({ length: rows }).map((_, row) =>
                Array.from({ length: cols }).map((_, col) => {
                    const isInPath = path && path.some(([r, c]) => r === row && c === col);
                    const isStart = start && start[0] === row && start[1] === col;
                    const isEnd = end && end[0] === row && end[1] === col;

                    return (
                        <div
                            key={`${row}-${col}`}
                            className={`border h-10 w-10 flex items-center justify-center cursor-pointer ${isStart ? 'bg-green-500' :
                                    isEnd ? 'bg-purple-600' :
                                        isInPath ? 'bg-black' :
                                            'bg-white'
                                }`}
                            onClick={() => handleClick(row, col)}
                        />
                    );
                })
            )}
        </div>
    );
};

export default GridComponent;
