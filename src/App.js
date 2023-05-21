import React from 'react';
import SignupForm from './Components/SignUpForm';
import logo from './LogoLibros.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="color-overlay">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="App-logo" />
        </div>
        <div className="form-container">
          <SignupForm />
        </div>
        <div className="message">
          Ya tienes una cuenta?
        </div>
      </div>
    </div>
  );
}

export default App;

