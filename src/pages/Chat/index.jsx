import React, { useEffect, useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./ChatStyle";

// Application Context
import AppContext, { reducer } from "../../context/AppContext";

// Http Service Functions
import { FETCH_CONVERSATIONS } from "../../services/HttpService";

// KendoReact Conversational UI Components
import "@progress/kendo-theme-default/dist/all.css";
import { Chat as ChatScreen } from "@progress/kendo-react-conversational-ui";

// Material UI Components & Icons
import { Grid, Typography, IconButton } from "@material-ui/core";
import { ArrowBack, InfoOutlined } from "@material-ui/icons";

const Chat = () => {
  // Page Styles
  const classes = useStyles();

  // Browser History & History Parameters
  const history = useHistory();

  // App Context
  const { user, receiver, messages } = useContext(AppContext);

  console.log("messages", messages);

  // Reducer
  const [state, dispatch] = useReducer(reducer, [
    {
      text: "Hello",
      auther: {
        id: 1,
        name: "Ghanim",
        avatarUrl: (
          <img src="https://via.placeholder.com/24/008000/008000.png" alt="" />
        ),
      },
    },
  ]);

  console.log("state", state);

  // Run When Page Loads
  useEffect(() => {
    if (user.id === 0) {
      history.go(-(history.length - 1));
    } else {
      const fetchConversations = async () => {
        try {
          let response = await FETCH_CONVERSATIONS({
            senderId: user.id,
            receiverId: receiver.id,
          });

          const { statusCode, message, conversations } = response;

          if (statusCode === 200) {
            // dispatch({ type: "SET_MESSAGES", messages: conversations });
          } else {
            alert(message);
          }
        } catch (error) {
          console.log("fetchConversations", error);
        }
      };

      // Call Fetch Function
      fetchConversations();
    }
  }, [user.id, receiver.id, history, messages]);

  // Methods
  const onMessageSend = (e) => {
    console.log("message", e.message);
    dispatch({ type: "SET_MESSAGES", message: e.message });
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <IconButton onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">{receiver.name}</Typography>
        <IconButton>
          <InfoOutlined />
        </IconButton>
      </Grid>

      <ChatScreen
        user={user}
        messages={state}
        onMessageSend={onMessageSend}
        placeholder={"Type a message..."}
        width={"100%"}
      />
    </Grid>
  );
};

export default Chat;
