import React, { useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";

// Application Context
import AppContext, { reducer } from "../context/AppContext";

// Material UI Components & Icons
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Chat, Person, Settings } from "@material-ui/icons";

const BottomTabNavigation = () => {
  // Browser History
  const history = useHistory();

  // Application Context
  const context = useContext(AppContext);

  // Component State
  const [, dispatch] = useReducer(reducer, 0);

  // Methods
  const onTabChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        history.replace("/home");
        break;
      case 1:
        history.replace("/profile");
        break;
      case 2:
        history.replace("/settings");
        break;
      default:
        history.replace("/home");
    }

    dispatch({ type: "SET_BOTTOM_NAVIGATION_VALUE", bottomTabValue: newValue });
  };

  return (
    <BottomNavigation value={context.bottomTabValue} onChange={onTabChange}>
      <BottomNavigationAction label="•" icon={<Chat />} />
      <BottomNavigationAction label="•" icon={<Person />} />
      <BottomNavigationAction label="•" icon={<Settings />} />
    </BottomNavigation>
  );
};

export default BottomTabNavigation;
