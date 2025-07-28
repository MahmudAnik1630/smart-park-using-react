import React, { useState } from 'react'
import './assets/LoginSignUp.css'
import email_icon from './assets/email.png'
import person_icon from './assets/person.png'
import password_icon from  './assets/password.png'
import phone_icon from './assets/phone.png'

function LoginSignUp() {

    const [action ,setAction]=useState('Sign up');

  return (
  <div className="container">
    <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">

        {action==='Log in'?<div></div> : <div className="input">
            <img src={person_icon} alt="" />
            <input type="text" placeholder='Name' />
        </div> }

       

        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email' />
        </div>

         {action==='Log in'?<div></div> : <div className="input">
            <img src={phone_icon} alt="" />
            <input type="number" placeholder='Phone' />
        </div>}

        

        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' />
        </div>

    </div>
    <div className="forgot-password">Lost password <span>Click here</span></div>
    <div className="submit-container">
        <div className={action==='Log in'?'submit gray':'submit'} onClick={()=>{setAction('Sign up')}}>Sign Up</div>
        <div className={action==='Sign up'?'submit gray':'submit'} onClick={()=>{setAction('Log in')}} >Log in </div>
    </div>
  </div>
  )
}

export default LoginSignUp