import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./HomeStyle";
import moment from "moment";

// Application Context
import AppContext from "../../context/AppContext";

// Http Service Methods
import { FETCH_USERS } from "../../services/HttpService";

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
import AvatarFive from "../../assets/images/avatar/avatar_5.jpg";
import AvatarSix from "../../assets/images/avatar/avatar_6.jpg";

const Home = () => {
  // Page Style Classes
  const classes = useStyles();

  // Application Context
  const context = useContext(AppContext);

  // Browser History
  const history = useHistory();

  // Page State
  const [usersList, setUserList] = useState([]);

  // List Of Avatars
  const avatarList = [
    AvatarOne,
    AvatarTwo,
    AvatarThree,
    AvatarFour,
    AvatarFive,
    AvatarSix,
  ];

  // Run When Page Loads
  useEffect(() => {
    // Fetch Users
    const fetchUsers = async (user) => {
      try {
        let response = await FETCH_USERS(user);
        let { statusCode, message, users } = response;

        if (statusCode === 200) {
          setUserList(users);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log("fetchUsers ERROR", error);
      }
    };

    // Get Logged User
    if (context.user.id !== 0) {
      fetchUsers(context.user);
    } else {
      history.goBack();
    }

    // Call Fetch Users Method
  }, [context.user, history]);

  // Get User Conversations
  const getUserConversations = () => {
    if (usersList.length > 0) {
      return usersList.map((user, i) => (
        <ConversationItem
          key={i}
          avatar={avatarList[Math.floor(Math.random() * 6)]}
          user={user}
          date={moment(user.createdAt).format("YYYY-MM-DD hh:mm a")}
        />
      ));
    } else {
      return [];
    }
  };

  return (
    <Container maxWidth="lg" component="main" className={classes.body}>
      <Box className={classes.searchBar}>
        <Typography variant="h4" style={{ margin: "5px" }}>
          Messages
        </Typography>
        <SearchBar classes={classes} />
      </Box>
      <List component="nav" className={classes.list}>
        {getUserConversations()}
      </List>
      <Box className={classes.footer}>
        <BottomTabNavigation />
      </Box>
    </Container>
  );
};

export default Home;
