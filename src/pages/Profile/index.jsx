import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./ProfileStyle";

// Application Context
import AppContext from "../../context/AppContext";

// Material UI Component & Icons
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Person, Email, Phone, AccountCircle } from "@material-ui/icons";

// Custom Component
import BottomTabNavigation from "../../components/BottomTabNavigation";

const Profile = () => {
  // Page Styles
  const classes = useStyles();

  // Application Context
  const { user } = useContext(AppContext);

  // Browser History
  const history = useHistory();

  // Run When Page Loaded
  useEffect(() => {
    if (user.id === 0) {
      history.goBack();
    }
  }, [user.id, history]);

  return (
    <Container maxWidth="lg" component="main" className={classes.body}>
      <Box className={classes.title}>
        <Typography variant="h4" style={{ margin: "5px" }}>
          Profile
        </Typography>
        <List component="nav" className={classes.list}>
          <ListItem>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary={user.name} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary={user.email} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary={`+968 ${user.phone}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary={user.username} />
          </ListItem>
        </List>
      </Box>
      <Box className={classes.footer}>
        <BottomTabNavigation />
      </Box>
    </Container>
  );
};

export default Profile;
