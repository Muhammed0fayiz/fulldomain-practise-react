// A1.jsx
import React, { useCallback, useState } from 'react';
import A2 from './A2';

const A1 = () => {
    console.log('main');  // This log will execute on each render of A1

    const [val, setVal] = useState(0);
    const [call, setCall] = useState(4);

    // useCallback for upval function
    const upval = useCallback(() => {
        setVal(val + 1);  // Updates val state
    }, [val]);  // Dependency array ensures upval is recreated only if val changes

    // Regular function for upcall
    const upcall = () => {
        setVal(call + 1);  // Updates val state based on call
    };

    const b = 90;

    return (
        <div>
            <A2 b={b} />  {/* Renders A2 component with prop b */}
            <button onClick={upval}>onclick</button>  {/* onClick triggers upval */}
            <p>{val}</p>  {/* Displays current value of val */}
        </div>
    );
};

export default A1;
