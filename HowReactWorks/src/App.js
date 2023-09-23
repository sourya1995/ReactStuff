import React, { useState, useCallback } from 'react';

import './App.css';
import Button from '../../src/components/UI/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }

    
  }, [allowToggle]); //this function should never change

  /*
   allowToggle should be changed, and the function should be rerun
   */

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }


  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
