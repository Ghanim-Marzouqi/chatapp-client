import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppContext, { state } from "./context/AppContext";

// This Fixes Some Inconsistencies Across Browsers And Devices
import CssBaseline from "@material-ui/core/CssBaseline";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <AppContext.Provider value={state}>
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
          <Route path="/chat" exact>
            <Chat />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
