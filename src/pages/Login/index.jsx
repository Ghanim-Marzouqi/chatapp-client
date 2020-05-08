import React, { useState, useReducer } from "react";
import { useStyles } from "./LoginStyle";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/chatapp_logo.png";
import Copyright from "../../components/Copyright";

// Material UI Components And Icons
import { Container, TextField, Button, Link, Box } from "@material-ui/core";

// Validation Schema
import { loginValidationSchema } from "../../services/ValidationService";

// Http Service Methods
import { AUTHENTICATE_USER } from "../../services/HttpService";

// Application Context
import { userReducer } from "../../context/AppContext";

const Login = () => {
  // Page Style Classes
  const classes = useStyles();

  // Browser History
  const history = useHistory();

  // Page State
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [, dispatch] = useReducer(userReducer, {});

  // Methods
  const onInvalidForm = (e) => {
    e.preventDefault();
    setError("Please Enter Username");
  };

  const authenticateUser = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Check If Input Is Valid
      await loginValidationSchema.validate({ username });

      // Send Http Request
      let response = await AUTHENTICATE_USER({ username });

      // Get Response
      let { statusCode, message, user } = response;

      if (statusCode === 200) {
        dispatch({ type: "SET_USER", user });
        history.push("/home");
      } else {
        setError(message);
      }
    } catch (error) {
      // Check Error Type
      if (error.name === "ValidationError") {
        setError(error.message);
      }
      console.log("Authentication Error", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <img src={Logo} alt="Logo" width="250px" height="auto" />
        <form
          className={classes.form}
          onSubmit={authenticateUser}
          onInvalid={onInvalidForm}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            id="username"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            error={error === "" ? false : true}
            helperText={error === "" ? "" : error}
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
