import React, { createContext, useContext } from 'react';

// Step 1: Create a context
const MyContext = createContext();

// Step 2: Provide a context value
const ParentComponent = () => {
  const contextValue = 'Hello from Context';
  return (
    <MyContext.Provider value={contextValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

// Step 3: Consume the context value using useContext
const ChildComponent = () => {
  const value = useContext(MyContext);
  return <div>{value}</div>;
};