import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  body: {
    height: "100%",
    display: "flex",
  },
  title: {
    position: "fixed",
    zIndex: 1,
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    padding: "0px 10px",
    left: "5px",
    right: "5px",
    marginTop: "10px",
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  footer: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    left: 0,
  },
}));
