import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from './Alert';

function App() {
  
  return (
    <div className="App">
      <Alert heading="Success" closable> All good! </Alert>
    </div>
  );
}

export default App;
