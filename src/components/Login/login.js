import React, { useState } from "react";
import "./login.css";
const Login = () => {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const loginSubmitHandler = (e) => {
    console.log(loginEmail, loginPassword);
  };

  const signupSubmitHandler = (e) => {
    console.log(name, email, password);
  };
  let toggle = () => {
    setLogin(!login);
  };
  return (
    <div className="parent">
      {login ? (
        <div className="formContainer">
          <div className="upperPartForm">
            <input
              type="text"
              name="loginEmail"
              required={true}
              placeholder="Enter your email-id"
              onChange={(e) => setLoginEmail(e.target.value)}
            ></input>
            <input
              type="password"
              name="loginPassword"
              required={true}
              placeholder="Enter Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            ></input>
          </div>
          <div className="lowerPartForm">
            <div className="option" onClick={(e) => loginSubmitHandler()}>
              Login
            </div>
            <div style={{ fontSize: "24px" }}>Or</div>
            <div className="option" onClick={toggle}>
              Sign Up
            </div>
          </div>
        </div>
      ) : (
        <div className="formContainer">
          <div className="upperPartForm">
            <input
              type="text"
              name="name"
              required={true}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="text"
              name="email"
              required={true}
              placeholder="Enter your email-id"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              name="password"
              required={true}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="lowerPartForm">
            <div className="option" onClick={(e) => signupSubmitHandler()}>
              Sign Up
            </div>
            <div style={{ fontSize: "24px" }}>Or</div>
            <div className="option" onClick={toggle}>
              Login
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
