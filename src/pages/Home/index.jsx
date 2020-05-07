import React, { useState, useEffect, useContext } from "react";
import "./Home.css";
import AppContext from "../../context/AppContext";

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
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <p>User Name: {user.name}</p>
    </div>
  );
};

export default Home;
