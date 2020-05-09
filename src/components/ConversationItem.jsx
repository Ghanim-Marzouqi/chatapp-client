import React from "react";
import { useHistory } from "react-router-dom";

// Material UI Components & Icons
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@material-ui/core";

const ConversationItem = ({ avatar, id, name, date }) => {
  // Browser History
  const history = useHistory();

  return (
    <div>
      <ListItem button onClick={() => history.push(`/chat/${id}`)}>
        <ListItemAvatar>
          <Avatar src={avatar} alt="Avatar" />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={date} />
      </ListItem>
      <Divider />
    </div>
  );
};

export default ConversationItem;
