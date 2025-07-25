import React, { useState } from 'react';
import './assets/LoginSignUp.css';
import user_icon from './assets/person.png';
import email_icon from './assets/email.png';
import phone_icon from './assets/phone.png';
import password_icon from './assets/password.png';
import Login from './Login';

function LoginSignUp() {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    phone: '',
    password: ''
  });

  const [showLogin, setShowLogin] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch('https://425d0a7ab92f.ngrok-free.app/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.status === 201) {
        alert('Sign Up successful!');
        console.log('API response:', result);
      } else {
        alert('Failed: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }

    setFormData({
      first_name: '',
      email: '',
      phone: '',
      password: ''
    });
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  if (showLogin) {
    return <Login />;
  }

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name' name="first_name" onChange={handleChange} value={formData.first_name} />
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email' name="email" onChange={handleChange} value={formData.email} />
        </div>

        <div className="input">
          <img src={phone_icon} alt="" />
          <input type="tel" placeholder='Phone' name="phone" onChange={handleChange} value={formData.phone} />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' name="password" onChange={handleChange} value={formData.password} />
        </div>
      </div>

      <div className="forgot-password">Lost Password? <span>Click here</span></div>

      <div className="submit-container">
        <div onClick={handleSignUp} className="submit">Sign Up</div>
        <div onClick={handleLoginClick} className="submit">Log in</div>
      </div>
    </div>
  );
}

export default LoginSignUp;
