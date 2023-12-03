
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }


  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>

  );
}

export default App;
