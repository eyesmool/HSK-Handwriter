import React, { useState } from 'react';
import DrawingCanvas from './DrawingCanvas.jsx';
import HanziWriter from 'hanzi-writer';
import { Controller } from './Controller.jsx';

const App = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div> 
      <Controller/>
    </div>
  )
  
};

export default App;
