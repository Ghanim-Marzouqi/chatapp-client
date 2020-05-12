import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./ChatStyle";

// Chat Bubble Component
import ChatBubble from "react-chat-bubble";

// Application Context
import AppContext from "../../context/AppContext";

// Material UI Components & Icons
import { Container, Box, Typography, IconButton } from "@material-ui/core";
import { ArrowBack, InfoOutlined } from "@material-ui/icons";

const Chat = () => {
  // Page Style
  const classes = useStyles();

  // Browser History
  const history = useHistory();

  // App Context
  const { user, receiver } = useContext(AppContext);

  // Page State
  const [messages, setMessages] = useState([
    {
      type: 0,
      image: require("../../assets/images/avatar/avatar_1.jpg"),
      text: "Hello! Good Morning!",
    },
    {
      type: 1,
      image: require("../../assets/images/avatar/avatar_2.jpg"),
      text: "Hello! Good Afternoon!",
    },
  ]);

  // Run When Page Loads
  useEffect(() => {
    if (user.id === 0) {
      // Go To Root Route (Login Page)
      history.go(-(history.length - 1));
    } else if (receiver.id === 0) {
      history.goBack();
    }
  }, [user.id, receiver.id, history]);

  // Handle New Message
  const handleNewMessage = (text) => {
    setMessages([
      ...messages,
      {
        type: 0,
        text,
        image: require("../../assets/images/avatar/avatar_1.jpg"),
      },
    ]);
  };

  return (
    <Container maxWidth="lg" component="main" className={classes.body}>
      <Box className={classes.header}>
        <IconButton onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">{receiver.name}</Typography>
        <IconButton onClick={() => alert(`${receiver.name} chat`)}>
          <InfoOutlined />
        </IconButton>
      </Box>
      <Box height="75%" className={classes.chat}>
        <ChatBubble messages={messages} onNewMessage={handleNewMessage} />
      </Box>
    </Container>
  );
};

export default Chat;
