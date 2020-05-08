import React from "react";

// Material UI Components & Icons
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@material-ui/core";

const ConversationItem = ({ avatarImage, userName, messageText }) => {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={avatarImage} alt="Avatar" />
        </ListItemAvatar>
        <ListItemText primary={userName} secondary={messageText} />
      </ListItem>
      <Divider />
    </div>
  );
};

export default ConversationItem;
