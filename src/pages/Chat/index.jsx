import React from "react";
import { /* useHistory ,*/ useParams } from "react-router-dom";
// import { useStyles } from "./ChatStyle";

const Chat = () => {
  // Page Styles
  // const classes = useStyles();

  // Browser History & History Parameters
  // const history = useHistory();
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-3xl">Chat Page</h1>
      <p>Receicer ID: {id}</p>
    </div>
  );
};

export default Chat;
