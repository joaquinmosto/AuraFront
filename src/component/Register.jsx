import React, { useState } from 'react';
import { registerUser } from '../service/AuthService';
import TextField from '@mui/material/TextField';
import './style/Register.css';
import Button from '@mui/material/Button';


const Register = () => 
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(email, password);
      setMessage(response.message);
      setError('');
    } catch (err) {
      setError(err.message);
      setMessage('');
    }
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src="https://www.infocop.es/wp-content/uploads/2023/10/stockking-freepik-joven-maestra-pie-delante-pizarra-escribiendo-algo-pizarra-varados-tablero-aula-980x654.jpg" alt="" />
      </div>
      <div className="form-section">
        <h2>Register</h2>
        {message && <p>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="person-details">
            <TextField
              className="name"
              required
              id="outlined-required"
              label="Nombre"
            />
            <TextField
              className="last-name"
              required
              id="outlined-required"
              label="Apellido"
            />
          </div>
          <div className="user-details">
            <TextField
              className="email-input"
              required
              id="outlined-required"
              label="Email"
            />
            <TextField
              className="password-input"
              type="password"
              required
              id="outlined-required"
              label="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button variant="contained" disableElevation>
            Registrarse
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;