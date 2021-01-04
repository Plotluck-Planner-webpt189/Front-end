import React from "react";
import './App.css'

import Login from "./Components/Login";
import Register from "./Components/Register";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Plan A Potluck</h1>
          <Route exact path="/" component={Login} />
        </header>
        <Register />
      </div>
    </Router>
  );
}

export default App;