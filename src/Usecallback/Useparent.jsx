import React, { useCallback, useState } from 'react';
import Usechild from './Usechild';
import Titles from './Titles';

const Useparent = () => {
    console.log('parent');
    const [state, setState] = useState(0); // State for parent component
    const [value, setValue] = useState(10); // State for child component value

    const updatestate = useCallback(() => {
        setState(state+1); // Increment state by 1
    }, [state]);

    const updatevalue = useCallback(() => {
        setValue(value+1); // Increment value by 1
    }, [value]);

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={updatevalue}>Update Value</button>
            <Usechild val={state} fun={updatestate} />
            <Titles />
        </div>
    );
};

export default Useparent;
