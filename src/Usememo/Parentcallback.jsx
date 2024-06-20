// Parentcallback.js

import React, { useState } from 'react';
import Title from './Title'; // Assuming correct import path to Title component
import Childcallback from './Childcallback'; // Assuming correct import path to Childcallback component

const Parentcallback = () => {
  console.log('Rendering Parentcallback'); // Console log message for component rendering
  const [state, setState] = useState(0);
  const [value, setValue] = useState(10); // State for child component value

  const incrementCounter = () => {
    setState(state + 1);
  };

  const handleValue = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <h1>{state}</h1>
      <Title />
      <button onClick={incrementCounter}>Click</button>
      <Childcallback value={value} handleValue={handleValue} /> {/* Pass value and handleValue function as props */}
    </div>
  );
};

export default React.memo(Parentcallback);
