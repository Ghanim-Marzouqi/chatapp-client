import React from "react";

// Application State
export const state = {
  user: {
    id: 0,
    name: "",
    email: "",
    phone: "",
    username: "",
  },
  bottomTabValue: 0,
};

// Application Context
const AppContext = React.createContext(state);

// Reducer Functions
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return setUser(action.user);
    case "SET_BOTTOM_NAVIGATION_VALUE":
      return setBottomNavigationTab(action.bottomTabValue);
    default:
      throw new Error();
  }
};

// Setter Functions
const setUser = (user) => {
  state.user = user;
  sessionStorage.setItem("loggedUser", JSON.stringify(user));
};

const setBottomNavigationTab = (tabValue) => {
  state.bottomTabValue = tabValue;
};

export default AppContext;
