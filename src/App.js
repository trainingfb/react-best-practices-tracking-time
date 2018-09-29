import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Loadable from 'react-loadable';

import { NavBar } from "./core/components";
import { Loading } from "./shared/components";

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
            <Route path="/welcome" component={Welcome} />
            <Route path="/tracking" component={Tracking} />
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
