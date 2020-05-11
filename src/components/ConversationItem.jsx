import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";

// Reducer Function
import { reducer } from "../context/AppContext";

// Material UI Components & Icons
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@material-ui/core";

const ConversationItem = ({ avatar, user, date }) => {
  // Browser History
  const history = useHistory();

  // Reducer
  const [, dispatch] = useReducer(reducer, {});

  // Methods
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_RECEIVER", receiver: user });
    history.push("/chat");
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemAvatar>
          <Avatar src={avatar} alt="Avatar" />
        </ListItemAvatar>
        <ListItemText primary={user.name} secondary={date} />
      </ListItem>
      <Divider />
    </div>
  );
};

export default ConversationItem;
