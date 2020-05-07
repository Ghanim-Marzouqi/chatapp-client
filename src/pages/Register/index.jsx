import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/chatapp_logo.jpg";
import StyledForm from "../../components/styled/StyledForm";

const Register = () => {
  return (
    <StyledForm>
      <form>
        <img src={Logo} alt="Logo" />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input type="text" placeholder="Username" />
        <div className="flex justify-between">
          <button>Sign Up</button>
          <Link className="font-bold text-blue-500 p-2" to="/login">
            Already Registered?
          </Link>
        </div>
      </form>
    </StyledForm>
  );
};

export default Register;
