import React, { Component } from 'react';
import './App.css';
import { NavBar } from "./core/NavBar";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import TrackingContainer from "./features/tracking/TrackingContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="container">
            <Route exact path="/tracking" component={TrackingContainer} />
            <Redirect from='/' to='/tracking'/>
            <Redirect from='**' to='/tracking'/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
