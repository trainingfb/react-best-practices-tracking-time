import './App.css';
import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import { NavBar } from "./core/NavBar";

const Loading = () => <div>Loading...</div>;

const Welcome = Loadable({
  loader: () => import('./features/welcome/WelcomeContainer'),
  loading: Loading,
});

const Tracking = Loadable({
  loader: () => import('./features/tracking/TrackingContainer'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="container">
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/tracking" component={Tracking} />
            <Route exact path='' render={() => {
              return <Redirect exact from='/' to='/welcome'/>
            }} />

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
