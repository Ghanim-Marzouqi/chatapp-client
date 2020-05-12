import React, { useEffect, useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./ChatStyle";

// Chat Bubble Component
import ChatBubble from "react-chat-bubble";

// Application Context
import AppContext, { reducer } from "../../context/AppContext";

// Http Service Methods
import {
  FETCH_CONVERSATIONS,
  CREATE_CONVERSATION,
} from "../../services/HttpService";

// Material UI Components & Icons
import { Container, Box, Typography, IconButton } from "@material-ui/core";
import { ArrowBack, InfoOutlined } from "@material-ui/icons";

const Chat = () => {
  // Page Style
  const classes = useStyles();

  // Browser History
  const history = useHistory();

  // App Context
  const { user, receiver, messages } = useContext(AppContext);

  // Reducer
  const [state, dispatch] = useReducer(reducer, []);

  // Avatar Placeholder Image
  const avatar_1 = require("../../assets/images/avatar/avatar_1.jpg");
  const avatar_2 = require("../../assets/images/avatar/avatar_2.jpg");

  // Run When Page Loads
  useEffect(() => {
    if (user.id === 0) {
      // Go To Root Route (Login Page)
      history.go(-(history.length - 1));
    } else if (receiver.id === 0) {
      history.goBack();
    }

    // Fetch Chat Messages
    const fetchConversations = async () => {
      try {
        // Make Http POST Request
        let response = await FETCH_CONVERSATIONS({
          senderId: user.id,
          receiverId: receiver.id,
        });

        // Get Results
        let { statusCode, message, conversations } = response;

        if (statusCode === 200) {
          let newConArr = conversations.map((con) => ({
            type: con.sender.id === user.id ? 0 : 1,
            image: con.sender.id === user.id ? avatar_1 : avatar_2,
            text: con.messageText,
          }));
          dispatch({ type: "SET_MESSAGES", messages: newConArr });
        } else {
          alert(message);
        }
      } catch (error) {
        console.log("fetchConversations ERROR", error);
      }
    };

    // Call Fetch Conversations
    fetchConversations();
  }, [user.id, receiver.id, history, avatar_1, avatar_2]);

  // Handle New Message
  const handleNewMessage = async (text) => {
    // Make Http POST Request
    let response = await CREATE_CONVERSATION({
      message: text,
      senderId: user.id,
      receiverId: receiver.id,
    });

    // Get Response
    let { statusCode, message } = response;

    console.log("statusCode", statusCode);

    if (statusCode === 201) {
      setNewMessage({ type: 0, image: avatar_1, text });
    } else {
      alert(message);
    }

    console.log("state", state);
    console.log("messages", messages);
  };

  const setNewMessage = (message) => {
    dispatch({ type: "ADD_MESSAGE", message });
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
