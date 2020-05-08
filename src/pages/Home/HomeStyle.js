import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  body: {
    height: "100%",
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  tab: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    left: 0,
  },
}));
