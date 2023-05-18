import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Card from './components/Card';
import Contact from './components/Routes/Contact';
import { Routes, Router, Link } from "react-router-dom";
import Homepage from './components/Routes/Homepage';
import AboutLittleLemon from './components/Routes/AboutLittleLemon';
import { useState } from 'react';
import { validateEmail } from './components/Utils/ValidateEmail';

function App() {
  App2();
  App3();
  App4();

  return (
    <div>
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutLittleLemon />} />
      </Routes>

    </div>

  );
}

export default App;


function App2() {
  return (
    <div>
      <h1>Task: add an image below</h1>
      <img src={logo} alt="Logo" />
    </div>
  );
};

function App3() {
  const bird1 = new Audio("https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3");
  const bird2 = new Audio("https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3");

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  };

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  };

  return (
    <div>
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
    </div>
  );
}

const PasswordErrorMessage = () => {
  return (
    <p className='FieldError'>Password should have at least 8 characters</p>
  );
};
function App4() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== role
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>
            <div className="Field">
              <label>
                First Name<sup>*</sup>
              </label>
              <input value={firstName} onChange={(e) => {setFirstName(e.target.value);}} placeholder='First name' />
            </div>
            <div className="Field">
              <label>Last Name
                <sup>*</sup>
              </label>
              <input value={lastName} onChange={(e) => {setLastName(e.target.value);}} placeholder='Last name' />
            </div>
            <div className="Field">
              <label>Email
                <sup>*</sup>
              </label>
              <input value={email} onChange={(e) => {setEmail(e.target.value);}} placeholder='Email Address' />
            </div>

            <div className="Field">
              <label>Password
                <sup>*</sup>
              </label>
              <input value={password.value} type='password' onChange={(e) => {setPassword({...password, value: e.target.value});}} onBlur={() => { setPassword({...password, isTouched: true }); }} placeholder='Password' />
              {password.isTouched && password.value.length < 8 ? (
                <PasswordErrorMessage/>
              ) : null}
            </div>
            <div className="Field">
              <label>
                Role
                <sup>*</sup>
              </label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="role">Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button type="submit" disabled={!getIsFormValid}>Create Account</button>
          </fieldset>
          </form>
          </div>
  );


}

