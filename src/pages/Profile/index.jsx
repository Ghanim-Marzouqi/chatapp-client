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
  const context = useContext(AppContext);

  // Browser History
  const history = useHistory();

  useEffect(() => {
    if (context.user.id === 0) {
      history.goBack();
    }
  }, [context.user.id, history]);

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
            <ListItemText primary={context.user.name} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary={context.user.email} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary={`+968 ${context.user.phone}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary={context.user.username} />
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
