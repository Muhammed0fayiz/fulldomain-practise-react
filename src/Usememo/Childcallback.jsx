// Childcallback.js

import React from 'react';

const Childcallback = (props) => {
    console.log('childcallback')
  return (
    <div>
      <p>{props.value}</p>
      <button onClick={props.handleValue}>child button</button> {/* Button to trigger handleValue function */}
    </div>
  );
};

export default React.memo(Childcallback);
