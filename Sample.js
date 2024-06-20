import React, { useState } from 'react';

const Todolist = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    const deleteItem = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const addElement = () => {
        if (value.trim() !== '') { // Ensure value is not empty
            const newData = [...data, { name: value }];
            setData(newData);
            setValue(''); // Clear input after adding element
        }
    };

    const edit = (index) => {
        const newData = [...data];
        if (value.trim() !== '') { // Ensure value is not empty
            newData[index] = { name: value };
            setData(newData);
            setValue(''); // Clear input after editing
        }
    };

    return (
        <div>
            <input type="text" placeholder='add item' value={value} onChange={handleChange} />
            <button onClick={addElement}>Add Element</button>
            {data.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <button onClick={() => deleteItem(index)}>Delete</button>
                    <button onClick={() => edit(index)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default Todolist;
