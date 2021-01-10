import React from "react";

import Login from "./Components/Login";
import Register from "./Components/Register";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
          <Route exact path="/" render={props => <Login {...props} />} />
        </header>
        <Route
            path="/Register"
            render={props => <Register {...props} />}
          />
      </div>
    </Router>
  );
}

export default App;