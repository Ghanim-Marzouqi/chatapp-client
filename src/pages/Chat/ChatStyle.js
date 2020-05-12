import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  body: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    padding: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    width: "100%",
  },
  chat: {
    position: "fixed",
    top: 58,
    left: 0,
    padding: 5,
    width: "100%",
    height: "90%",
    backgroundColor: "#f5f5f5",
  },
}));
