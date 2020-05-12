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
  receiver: {
    id: 0,
    name: "",
    email: "",
    phone: "",
    username: "",
  },
  messages: [],
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
    case "SET_RECEIVER":
      return setReceiver(action.receiver);
    case "SET_MESSAGES":
      return setMessages(action.messages);
    case "ADD_MESSAGE":
      return addNewMessage(state, action.message);
    default:
      throw new Error();
  }
};

// Setter Functions
const setUser = (user) => {
  state.user = user;
  sessionStorage.setItem("loggedUser", JSON.stringify(user));
};

const setReceiver = (receiver) => {
  state.receiver = receiver;
};

const setBottomNavigationTab = (tabValue) => {
  state.bottomTabValue = tabValue;
};

const setMessages = (messages) => {
  return (state.messages = messages);
};

const addNewMessage = (oldMessages, message) => {
  return [...oldMessages, message];
};

export default AppContext;
