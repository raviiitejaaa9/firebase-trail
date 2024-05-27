import React, { useState } from 'react';
import { loginUser } from '../api';
import { ResponseModal } from '../modals/ResponseModal';
import { DotLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [openModal, setOpenModal] = useState(false);
  const [initiateLoader, setInitiateLoader] = useState(false);
//   const [modalContent, setModalContent] = useState({});

  const handleRegister = async(e) => {
    e.preventDefault();
    setInitiateLoader(true)
    try {
      const loginResponse = await loginUser(email, password);
      console.log("login res2", loginResponse)
      console.log("User logged in successfully!");
      const userDetails = loginResponse?.user;
      console.log("userDetails", userDetails)
      navigate("/")
    } catch (error) {
      console.error("Error logging in user:", error);
      console.log("error", error?.code)
    }
    setInitiateLoader(false)
  };

  return (
    <>
    <div className='fb-register-page-container' >
      <h2>Login</h2>
      <form className='fb-register-form' onSubmit={handleRegister}>
        <input
          className='fb-register-input'
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className='fb-register-input'
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn btn-primary' type="submit">Login</button>
      </form>
    </div>
    {
      initiateLoader && <DotLoader/>
    }
    </>
  );
};

