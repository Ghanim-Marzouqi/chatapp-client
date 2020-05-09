import React, { useState, useReducer } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useStyles } from "./SettingsStyle";

// Reducer Function
import { reducer } from "../../context/AppContext";

// Material UI Component & Icons
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControl,
  Select,
  MenuItem,
  InputBase,
  Button,
} from "@material-ui/core";
import { Language, ExitToApp } from "@material-ui/icons";

// Custom Component
import BottomTabNavigation from "../../components/BottomTabNavigation";

const Settings = () => {
  // Page Styles
  const classes = useStyles();

  // Browser History
  const history = useHistory();

  // Page State
  const [language, setLanguage] = useState("English");

  // Reducer
  const [, dispatch] = useReducer(reducer, 0);

  // Select Component Style
  const BootstrapInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }))(InputBase);

  // Method
  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_BOTTOM_NAVIGATION_VALUE", bottomTabValue: 0 });
    history.goBack();
  };

  return (
    <Container maxWidth="lg" component="main" className={classes.body}>
      <Box className={classes.title}>
        <Typography variant="h4" style={{ margin: "5px" }}>
          Settings
        </Typography>
        <List className={classes.list}>
          <ListItem>
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <ListItemText primary="Language" />
            <FormControl className={classes.margin}>
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                input={<BootstrapInput />}
              >
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"Arabic"}>Arabic</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </ListItem>
        </List>
      </Box>
      <Box className={classes.footer}>
        <BottomTabNavigation />
      </Box>
    </Container>
  );
};

export default Settings;
