import React, { useState } from 'react';

const InputComponent = ({ setRows, setCols, setStart, setEnd }) => {
    const [inputRows, setInputRows] = useState('');
    const [inputCols, setInputCols] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setRows(parseInt(inputRows));
        setCols(parseInt(inputCols));
        setStart(null);
        setEnd(null);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="number"
                value={inputRows}
                onChange={(e) => setInputRows(e.target.value)}
                placeholder="Number of rows"
                className="border rounded p-2 mr-2"
            />
            <input
                type="number"
                value={inputCols}
                onChange={(e) => setInputCols(e.target.value)}
                placeholder="Number of columns"
                className="border rounded p-2 mr-2"
            />
            <button type="submit" className="bg-green-600 text-white p-2 rounded">Set Grid</button>
        </form>
    );
};

export default InputComponent;
