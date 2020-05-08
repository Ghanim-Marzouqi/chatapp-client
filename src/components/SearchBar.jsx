import React from "react";

// Material UI Components & Icons
import { Paper, IconButton, InputBase } from "@material-ui/core";
import { Menu, Search } from "@material-ui/icons";

const SearchBar = ({ classes }) => {
  return (
    <Paper component="form" className={classes.paper}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <Menu />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Messages"
        inputProps={{ "aria-label": "search messages" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
