import React from 'react';

const Usechild = ({ val, fun }) => {
  console.log('child');
  return (
    <div>
      <h1>{val}</h1>
      <button onClick={fun}>click child</button>
    </div>
  );
};

export default React.memo(Usechild);
