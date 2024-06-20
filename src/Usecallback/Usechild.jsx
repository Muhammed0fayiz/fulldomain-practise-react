import React, { useCallback } from 'react';

const Usechild = React.memo((props) => {
    console.log('child');

    const handleClick = useCallback(() => {
        props.fun(); // Call parent callback function
    }, [props.fun]);

    return (
        <div>
            <p>Child Component</p>
            <p>{props.val}</p>
            <button onClick={handleClick}>Update Parent State</button>
        </div>
    );
});

export default Usechild;
