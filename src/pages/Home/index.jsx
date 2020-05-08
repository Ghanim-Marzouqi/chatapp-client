import React, { useState, useEffect, useContext } from "react";
import { useStyles } from "./HomeStyle";

// Application Context
import AppContext from "../../context/AppContext";

// Custom Components
import SearchBar from "../../components/SearchBar";
import ConversationItem from "../../components/ConversationItem";
import BottomTabNavigation from "../../components/BottomTabNavigation";

// Material UI Components & Icons
import { Container, Typography, List, Box } from "@material-ui/core";

// Avatar Images
import AvatarOne from "../../assets/images/avatar/avatar_1.jpg";
import AvatarTwo from "../../assets/images/avatar/avatar_2.jpg";
import AvatarThree from "../../assets/images/avatar/avatar_3.jpg";
import AvatarFour from "../../assets/images/avatar/avatar_4.jpg";

const Home = () => {
  // Page Style Classes
  const classes = useStyles();

  // Subscribe To Application Context
  const state = useContext(AppContext);
  const [user, setUser] = useState(state.user);

  // Load User If State Lost
  useEffect(() => {
    if (state.user.username === "") {
      setUser(JSON.parse(sessionStorage.getItem("loggedUser")));
    }
  }, [state.user]);

  return (
    <Container maxWidth="lg" component="main" className={classes.body}>
      <SearchBar classes={classes} />
      <Typography variant="h4" style={{ margin: "5px" }}>
        Messages
      </Typography>
      <List>
        <ConversationItem
          avatarImage={AvatarOne}
          userName={"Ghanim Al Marzouqi"}
          messageText={"Hi, how are you?"}
        />
        <ConversationItem
          avatarImage={AvatarTwo}
          userName={"Ohoud Al Shabibi"}
          messageText={"Where are going now?"}
        />
        <ConversationItem
          avatarImage={AvatarThree}
          userName={"Mohammed Al Marzouqi"}
          messageText={"I want some candy!"}
        />
        <ConversationItem
          avatarImage={AvatarFour}
          userName={"Abdulaziz Mohammed"}
          messageText={"Are we going to meet today?!"}
        />
      </List>
      <Box className={classes.footer}>
        <BottomTabNavigation />
      </Box>
    </Container>
  );
};

export default Home;
