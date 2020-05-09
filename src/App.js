import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppContext, { state } from "./context/AppContext";

import {
  // createMuiTheme, // this line was replaced
  unstable_createMuiStrictModeTheme as createMuiTheme, // for this one
  ThemeProvider,
} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import blueGrey from "@material-ui/core/colors/blueGrey";

// This Fixes Some Inconsistencies Across Browsers And Devices
import CssBaseline from "@material-ui/core/CssBaseline";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const App = () => {
  const theme = createMuiTheme({
    //and used here
    palette: {
      primary: blue,
      secondary: blueGrey,
    },
    status: {
      danger: "orange",
    },
  });

  return (
    <AppContext.Provider value={state}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/login" />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/settings" exact>
              <Settings />
            </Route>
            <Route path="/chat/:id" exact>
              <Chat />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
