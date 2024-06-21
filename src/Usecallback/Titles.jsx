import React from 'react';

const Titles = () => {
    console.log('title');

    return (
        <div>
            <h1>titles</h1>
        </div>
    );
};

export default React.memo(Titles);
