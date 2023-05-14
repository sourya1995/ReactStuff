import logo from './logo.svg';
import './App.css';

function Heading(){
  return(
    <h1>This is an h1 Heading.</h1>
  )
}

function App() {
  return(
    <div className="App">
      This is your <Heading/>
    </div>
  )
}

export default App;
