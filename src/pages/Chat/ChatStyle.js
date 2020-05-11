import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  body: {
    height: "100%",
    margin: 5,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    padding: 10,
    position: "fixed",
    top: 0,
  },
  chat: {
    position: "fixed",
    top: 68,
    bottom: 5,
  },
}));
