import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  body: {
    height: "100%",
    display: "flex",
  },
  searchBar: {
    position: "fixed",
    zIndex: 1,
    backgroundColor: "#fafafa",
    width: "100%",
    padding: "0px 10px",
    left: "5px",
    right: "5px",
  },
  list: {
    position: "absolute",
    top: "120px",
    left: 0,
    marginBottom: "50px",
    width: "100%",
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
    position: "fixed",
    width: "100%",
    bottom: 0,
    left: 0,
  },
}));
