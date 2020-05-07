import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/chatapp_logo.jpg";
import StyledForm from "../../components/styled/StyledForm";

const Login = () => {
  return (
    <StyledForm>
      <form>
        <img src={Logo} alt="Logo" />
        <input type="text" placeholder="Username" />
        <div className="flex justify-between">
          <button>Sign In</button>
          <Link className="font-bold text-blue-500 p-2" to="/register">
            Sign Up
          </Link>
        </div>
      </form>
    </StyledForm>
  );
};

export default Login;
