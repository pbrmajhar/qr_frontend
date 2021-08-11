import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//importing components
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Newtoken from "./pages/Newtoken";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/newtoken" exact component={Newtoken} />
      </Switch>
    </>
  );
}

export default App;
