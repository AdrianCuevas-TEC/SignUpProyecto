import React from 'react';

const SignUpForm = () => {
  return (
    <div className="login-form-container">
      <h2>Registrese en Temple Books</h2>
      <form>
        <div className="form-group">
          <div className="form-inline">
            <div className="form-group">
              <label htmlFor="name" className="lexend">Nombre:</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="lexend">Apellido:</label>
              <input type="text" id="lastName" />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="birthdate" className="lexend">Fecha de Nacimiento:</label>
          <input type="date" id="birthdate" />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="lexend">Email:</label>
          <input type="email" id="email" />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="lexend">Contraseña:</label>
          <input type="password" id="password" />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword" className="lexend">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" />
        </div>
        
        <button type="submit" className="lexend">Registrarse</button>
      </form>
    </div>
  );
};

export default SignUpForm;
