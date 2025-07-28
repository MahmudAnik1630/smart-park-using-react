import React, { useState } from "react";
import "./assets/LoginSignUp.css";
import email_icon from "./assets/email.png";
import person_icon from "./assets/person.png";
import password_icon from "./assets/password.png";
import phone_icon from "./assets/phone.png";

function LoginSignUp() {
  const [action, setAction] = useState("Sign up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // 🔹 Update form data dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle Sign Up
  const handleSignUp = async () => {
    try {
      const res = await fetch("https://your-api.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        alert(" Sign Up successful!");
        setFormData({ name: "", email: "", phone: "", password: "" });
      } else {
        alert(" Sign Up failed!");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // 🔹 Handle Log In
  const handleLogin = async () => {
    try {
      const res = await fetch("https://your-api.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: formData.emailOrPhone,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.status === 200 && data.name) {
        alert("Welcome " + data.name);
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Log in" ? null : (
          <div className="input">
            <img src={person_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {action === "Log in" ? null : (
          <div className="input">
            <img src={phone_icon} alt="" />
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="forgot-password">
        Lost password <span>Click here</span>
      </div>

      <div className="submit-container">
        {action === "Sign up" ? (
          <div className="submit" onClick={handleSignUp}>
            Sign Up
          </div>
        ) : (
          <div className="submit" onClick={handleLogin}>
            Log In
          </div>
        )}

        <div
          className="submit gray"
          onClick={() =>
            setAction(action === "Sign up" ? "Log in" : "Sign up")
          }
        >
          {action === "Sign up" ? "Log In" : "Sign Up"}
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
