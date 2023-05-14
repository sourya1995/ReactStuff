import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Card from './components/Card';

function App() {

  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`Computer Number: ${randomNum}, Your guess ${userInput}`);
  }
  return (
    <div className="App">
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess a number between 1 and 3</button>
    </div>
    
  );
}

export default App;
