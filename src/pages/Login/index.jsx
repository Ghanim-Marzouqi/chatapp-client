import React, { useState, useReducer } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/images/chatapp_logo.jpg";
import StyledForm from "../../components/styled/StyledForm";
import { AUTHENTICATE_USER } from "../../services/HttpService";
import { userReducer } from "../../context/AppContext";

const Login = () => {
  // Page State
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [, dispatch] = useReducer(userReducer, {});

  // Browser History
  const history = useHistory();

  const authenticateUser = async (e) => {
    e.preventDefault();
    setError("");

    if (username !== "") {
      let result = await AUTHENTICATE_USER({ username });

      let { statusCode, message, user } = result;

      if (statusCode === 200) {
        dispatch({ type: "SET_USER", user });
        history.push("/home");
      } else {
        // Display Error
        setError(message);
      }
    } else {
      console.log("Please Enter Username");
    }
  };

  return (
    <StyledForm>
      <form>
        <img src={Logo} alt="Logo" />
        <label htmlFor="error" style={{ color: "red" }}>
          {error}
        </label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="flex justify-between">
          <button onClick={authenticateUser}>Sign In</button>
          <Link className="font-bold text-blue-500 p-2" to="/register">
            Sign Up
          </Link>
        </div>
      </form>
    </StyledForm>
  );
};

export default Login;
