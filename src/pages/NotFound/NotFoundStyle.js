import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  body: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "1vh",
  },
  text: {
    color: "grey",
  },
  icon: {
    fontSize: 100,
    color: "grey",
  },
  link: {
    fontSize: 18,
    marginTop: 20,
  },
}));
