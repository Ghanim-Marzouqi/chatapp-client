import React from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./NotFoundStyle";
import { Container, Typography, Link } from "@material-ui/core";
import { SentimentVeryDissatisfied } from "@material-ui/icons";

const NotFound = () => {
  // Page Style Classes
  const classes = useStyles();

  // Browser History
  const history = useHistory();

  return (
    <Container maxWidth="lg" component="main" className={classes.body}>
      <SentimentVeryDissatisfied className={classes.icon} />
      <Typography variant="h5" className={classes.text}>
        Page Not Found
      </Typography>
      <Link className={classes.link} onClick={() => history.replace("/")}>
        Go To Home Page
      </Link>
    </Container>
  );
};

export default NotFound;
