import React, { useState } from 'react';
import { createUser } from '../api';
import "./Register.css"

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await createUser(email, password);
      console.log("res1", res)
      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className='fb-register-page-container' >
      <h2>Register</h2>
      <form className='fb-register-form' onSubmit={handleRegister}>
        <input
          className='fb-register-input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className='fb-register-input'
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn btn-primary' type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
