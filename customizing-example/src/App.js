import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Task: Add three card elements</h1>
      <Card h2 = "First Card's h2" h3 = "First card's h3"/>
      <Card h2 = "Second Card's h2" h3 = "Second card's h3"/>
      <Card h2 = "Third Card's h2" h3 = "Third card's h3"/>
    </div>
    
  );
}

export default App;
