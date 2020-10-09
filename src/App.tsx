import React from 'react';
import useSketch from './useSketch';

import sketches from './sketches';


function App() {
  // Point the useSketch at a different sketch
  const { refContainer } = useSketch(sketches.snake);

  return (
    <div ref={refContainer} />
  );
}

export default App;
