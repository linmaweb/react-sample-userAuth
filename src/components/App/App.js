import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { GithubContext, firebaseConfig } from "../../config";
import Nav from "../../components/Nav/Nav";
import Home from "../Home/Home";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import NotFound from "../Notfound/NotFound";
import "./App.css";

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <GithubContext.Provider value={{ user, setUser }}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </GithubContext.Provider>
    </Router>
  );
};

export default App;
