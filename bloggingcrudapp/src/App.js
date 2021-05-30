/**import React from 'react'

//import React, { Component } from 'react'
function App() {
    return(
      <div><h1>blog</h1></div>
    );
  }

export default App;**/

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Comment from "./pages/Comment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/comment">{currentUser ? <Comment/> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;