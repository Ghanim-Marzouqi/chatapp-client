import React, { useState, useEffect, useContext } from "react";
import "./Home.css";
import AppContext from "../../context/AppContext";
import StyledPage from "../../components/styled/StyledPage";

const Home = () => {
  // Subscribe To Application Context
  const state = useContext(AppContext);
  const [user, setUser] = useState(state.user);

  // Load User If State Lost
  useEffect(() => {
    if (state.user.username === "") {
      setUser(JSON.parse(sessionStorage.getItem("loggedUser")));
    }
  }, [state.user]);

  return (
    <StyledPage>
      <h1 className="text-3xl font-bold m-6">Messages</h1>
      <p>User Name: {user.name}</p>
    </StyledPage>
  );
};

export default Home;
