import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/chatapp_logo.jpg";
import { CREATE_USER } from "../../services/HttpService";

const Register = () => {
  // Page State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [response, setResponse] = useState("");
  const [labelStyle, setLabelStyle] = useState({});

  // Methods
  const createUser = async (e) => {
    e.preventDefault();
    setResponse("");
    setLabelStyle({});

    if (name !== "" && email !== "" && phone !== "" && username !== "") {
      let result = await CREATE_USER({
        name,
        email,
        phone,
        username,
      });

      let { statusCode, message } = result;

      if (statusCode === 201) {
        setResponse(message);
        setLabelStyle({ color: "green" });
      } else {
        console.log(message);
        setResponse(message);
        setLabelStyle({ color: "red" });
      }
    } else {
      console.log("Please Fill All Fields");
    }
  };

  return (
    <div>
      <form>
        <img src={Logo} alt="Logo" />
        <label htmlFor="response" style={labelStyle}>
          {response}
        </label>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>
          <button onClick={createUser}>Sign Up</button>
          <Link to="/login">Already Registered?</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
