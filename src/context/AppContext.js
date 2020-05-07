import React from "react";

// Application State
export const state = {
  user: {
    name: "",
    email: "",
    phone: "",
    username: "",
  },
};

// Application Context
const AppContext = React.createContext(state);

// Reducer Functions
export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return setUser(action.user);
    default:
      throw new Error();
  }
};

// Setter Functions
const setUser = (user) => {
  state.user = user;
  sessionStorage.setItem("loggedUser", JSON.stringify(user));
};

export default AppContext;
