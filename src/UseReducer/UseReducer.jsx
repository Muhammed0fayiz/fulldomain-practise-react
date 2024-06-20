import React, { useReducer } from 'react';

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, count: state.count + 1 };
    case 'DEC':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  // Initial state should be an object with a count property
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'INC' })}>inc</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>dec</button>
    </div>
  );
};

export default UseReducer;
