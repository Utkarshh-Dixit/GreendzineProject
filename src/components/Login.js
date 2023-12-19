import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import login from '../login.png'; 

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className='login'>
      <div className='image'>
        <img src={login} alt='abc' />
      </div>
      <h2 className='heading'>#We are Electric</h2>
      <div className='inputEmail'>
        <input
          className="inEm"
          type='email'
          placeholder='E-mail'
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className='inputPass'>
        <input
          className="inPa"
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <Link to="/profile">
        <button className='loginB' disabled={!isFormValid}>
          Login
        </button>
      </Link>
      <div className='forgoot'>
        <a className="forgot" href='/forgot'>
          Forgot password?
        </a>
      </div>
    </div>
  );
};
