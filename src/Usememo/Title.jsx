// Title.js

import React from 'react';

const Title = () => {
  console.log('Rendering Title'); // Corrected console log message
  return (
    <div>
      <h1>Title</h1> {/* Corrected typo in the heading */}
    </div>
  );
};

export default React.memo(Title);
