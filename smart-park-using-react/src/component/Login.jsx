import React, { useState } from 'react'
import './assets/LoginSignUp.css'
import email_icon from './assets/email.png'
import password_icon from './assets/password.png'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://425d0a7ab92f.ngrok-free.app/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          identifier: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful');
        console.log('Logged in user:', data);
        
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Log In</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder='Email'
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder='Password'
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="forgot-password">Lost Password? <span>Click here</span></div>

      <div className="submit-container">
        <div onClick={handleLogin} className="submit">Log in</div>
      </div>
    </div>
  );
}

export default Login;
