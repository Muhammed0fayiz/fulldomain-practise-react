import React, { useCallback, useState } from 'react';
import Titles from './Titles';
import Usechild from './Usechild';

const Useparent = () => {
  console.log('parent');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const inc1 = useCallback(() => {
    setCount1(count1+ 1);
  }, [count1]);

  const inc2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <Titles />
      <button onClick={inc1}>count1</button>
      <h1>{count1}</h1>
      <Usechild val={count2} fun={inc2} />
    </div>
  );
};

export default React.memo(Useparent);
