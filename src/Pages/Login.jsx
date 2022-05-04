import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    const data = localStorage.getItem("users");

    if (data) {
      let userdata = JSON.parse(data);
      if (userdata.email === email && userdata.password === password) {
          alert("login sucessfull")
          navigate("/main")
      } else {
          alert("Invalid Credentials.Check email or password or please register")
      }
    } else {
        alert("Invalid Credentials.Check email or password or please register")
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleLogin} className="form-container">
        <h2>Login</h2>
        <div className="">
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mt-2">
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="mt-2 btn-container">
          <button className="btn">Submit</button>
          <Link to="/register" className="btn">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
