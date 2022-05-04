import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [prof, setProf] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      phone,
      prof,
    };

    localStorage.setItem("users", JSON.stringify(data))
    alert("registered successfully");
    navigate("/")
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Signup</h2>
        <div className="">
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your name"
            required
          />
        </div>
        <div className="mt-2">
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
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="Enter Your phone number"
            required
          />
        </div>
        <div className="mt-2">
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your password"
            required
          />
        </div>
        <div className="mt-2">
          <select
            className="input"
            name=""
            id=""
            value={prof}
            onChange={(e) => setProf(e.target.value)}
          >
            <option value="" disabled>
              Select Profession
            </option>
            <option value="web devloper">Web devloper</option>
            <option value="react devloper">react devloper</option>
          </select>
        </div>

        <div className="mt-2 btn-container">
          <button type="submit" className="btn">Submit</button>
          <Link to="/" className="btn">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
