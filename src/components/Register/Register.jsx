import React, { useState } from 'react';
import { createUser } from '../api';
import { ResponseModal } from '../modals/ResponseModal';
import { DotLoader } from 'react-spinners';
import "./Register.css"

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [initiateLoader, setInitiateLoader] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleRegister = async(e) => {
    e.preventDefault();
    setInitiateLoader(true)
    try {
      const res = await createUser(email, password);
      console.log("res1", res)
      console.log("User registered successfully!");
      setOpenModal(true)
      setModalContent({
        ...modalContent,
        title : "Registration",
        body : "Registration successfull. Please check you email for confirmation link",
      })
    } catch (error) {
      console.error("Error registering user:", error);
      console.log("error", error?.code)
      setOpenModal(true)
      setModalContent({
        ...modalContent,
        title : "Error",
        // body : error?.code,
        body : error?.message.split(":")[1],
      })
    }
    // setInitiateLoader(false)
  };

  return (
    <>
    <div className='fb-register-page-container' >
      <h2>Register</h2>
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
        <button className='btn btn-primary' type="submit">Register</button>
      </form>
    </div>
    {
      openModal && (
        <ResponseModal
        show = {openModal}
        title = {modalContent?.title}
        body = {modalContent?.body}
        onHide = {() => setOpenModal(false)}
        />
      )
    }
    {
      initiateLoader && <DotLoader/>
    }
    </>
  );
};

export default Register;
