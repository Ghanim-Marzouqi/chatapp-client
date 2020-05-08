import React, { useState } from "react";

// Material UI Components & Icons
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Chat, Person, Settings } from "@material-ui/icons";

const BottomTabNavigation = () => {
  // Component State
  const [value, setValue] = useState(0);

  // Methods
  const onTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={onTabChange}>
      <BottomNavigationAction label="•" icon={<Chat />} />
      <BottomNavigationAction label="•" icon={<Person />} />
      <BottomNavigationAction label="•" icon={<Settings />} />
    </BottomNavigation>
  );
};

export default BottomTabNavigation;
