import React, { Component } from 'react';
import './App.css';
import { NavBar } from "./shared/core/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import TrackingContainer from "./shared/features/tracking/TrackingContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="container">
            {/*<Route exact path="/" component={HomeView} />*/}
            <Route exact path="/tracking" component={TrackingContainer} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
