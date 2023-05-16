import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Card from './components/Card';
import Contact from './components/Routes/Contact';
import {Routes, Router, Link} from "react-router-dom";
import Homepage from './components/Routes/Homepage';
import AboutLittleLemon from './components/Routes/AboutLittleLemon';

function App() {
  App2();
 
  return (
   <div>
    <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
      <Link to="/about" className="nav-item">About Little Lemon</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<AboutLittleLemon/>} />
    </Routes>

   </div>

  );
}

export default App;


function App2(){
  return (
    <div>
      <h1>Task: add an image below</h1>
      <img src={logo} alt="Logo" />
    </div>
  );
};