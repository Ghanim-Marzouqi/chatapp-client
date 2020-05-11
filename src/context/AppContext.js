import React from "react";

// Application State
export const state = {
  user: {
    id: 0,
    name: "",
    email: "",
    phone: "",
    username: "",
    avatarUrl: "https://via.placeholder.com/24/008000/008000.png",
  },
  bottomTabValue: 0,
  receiver: {
    id: 0,
    name: "",
    email: "",
    phone: "",
    username: "",
    avatarUrl: "https://via.placeholder.com/24/008000/008000.png",
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
      return addNewMessage(action.message);
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
  state.messages = messages;
  console.log("messages state", state.messages);
};

const addNewMessage = (message) => {
  state.messages.push(message);
  console.log("messages state", state.messages);
};

export default AppContext;
