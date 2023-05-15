import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Card from './components/Card';

function App() {

  const [fruits] = React.useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
  ]);
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>

  );
}

export default App;
