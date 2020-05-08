import React, { useState } from "react";
import { useStyles } from "./RegisterStyle";
import { useHistory } from "react-router-dom";
import Copyright from "../../components/Copyright";

// Material UI Components And Icons
import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Box,
} from "@material-ui/core";

// Validation Schema
import { registerValidationSchema } from "../../services/ValidationService";

// Http Service Methods
import { CREATE_USER } from "../../services/HttpService";

const Register = () => {
  // Page Style Classes
  const classes = useStyles();

  // Browser History
  const history = useHistory();

  // Page State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Methods
  const createUser = async (e) => {
    // Set Defaults
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // Validate User Input
      await registerValidationSchema.validate({
        name,
        email,
        phone,
        username,
      });

      // Make Http Request
      let resposne = await CREATE_USER({
        name,
        email,
        phone,
        username,
      });

      let { statusCode, message } = resposne;

      if (statusCode === 201) {
        setSuccessMessage(message);
      } else {
        setErrorMessage(message);
      }
    } catch (error) {
      console.log(error);
      if (error.name === "ValidationError") {
        error.path === "phone"
          ? setErrorMessage("Phone is not valid")
          : setErrorMessage(error.message);
      } else {
        console.log("Registration Error", error);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={createUser}>
          {successMessage === "" ? (
            ""
          ) : (
            <Typography variant="body1" style={{ color: "green" }}>
              {successMessage}
            </Typography>
          )}
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
            id="name"
            label="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="number"
            id="phone"
            label="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
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
            Sign Up
          </Button>
          <Box mt={2} className={classes.link}>
            <Link variant="body2" onClick={() => history.push("/login")}>
              {"Already have an account? Sign In"}
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

export default Register;
