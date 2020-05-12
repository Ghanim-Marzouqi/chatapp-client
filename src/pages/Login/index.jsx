import React, { useState, useReducer } from "react";
import { useStyles } from "./LoginStyle";
import { useHistory } from "react-router-dom";

// Custom Components
import Logo from "../../assets/images/chatapp_logo.png";
import Copyright from "../../components/Copyright";

// Material UI Components And Icons
import {
  Container,
  TextField,
  Button,
  Link,
  Box,
  Typography,
} from "@material-ui/core";

// Validation Schema
import { loginValidationSchema } from "../../services/ValidationService";

// Http Service Methods
import { AUTHENTICATE_USER } from "../../services/HttpService";

// Reducer Function
import { reducer } from "../../context/AppContext";

const Login = () => {
  // Page Style Classes
  const classes = useStyles();

  // Browser History
  const history = useHistory();

  // Page State
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, dispatch] = useReducer(reducer, {});

  const authenticateUser = async (e) => {
    // Set Defaults
    e.preventDefault();
    setErrorMessage("");

    try {
      // Validate User Input
      await loginValidationSchema.validate({ username });

      // Send Http Request
      let response = await AUTHENTICATE_USER({ username });

      // Get Response
      let { statusCode, message, user } = response;

      if (statusCode === 200) {
        dispatch({ type: "SET_USER", user });
        history.push("/home");
      } else {
        setErrorMessage(message);
      }
    } catch (error) {
      // Check Error Type
      if (error.name === "ValidationError") {
        setErrorMessage(error.message);
      } else {
        console.log("Authentication Error", error);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <img src={Logo} alt="Logo" width="250px" height="auto" />
        <form className={classes.form} onSubmit={authenticateUser} noValidate>
          {errorMessage === "" ? (
            ""
          ) : (
            <Typography variant="body1" style={{ color: "red" }}>
              {errorMessage}
            </Typography>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            id="username"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Box mt={2} className={classes.link}>
            <Link variant="body2" onClick={() => history.push("/register")}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </form>
      </div>
      <Box mt={4}>
        <Copyright websiteLink="https://www.google.com" />
      </Box>
    </Container>
  );
};

export default Login;
