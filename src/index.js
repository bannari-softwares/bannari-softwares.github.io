import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Privacy from 'views/Privacy Policies/Privacy.js';
import PrivacyForTravel from 'views/Privacy Policies/PrivacyForTravel.js';
import TermsAndConditions from 'views/TermsAndConditions/TermsAndConditions.js';

var hist = createBrowserHistory();
// const reload = () => window.location.reload();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/privacyfortraveltouch" component={PrivacyForTravel} />
      <Route path="/termsandconditions" component={TermsAndConditions} />
      <Route path="/" component={Components} />
      {/* <Route path="/app-ads.txt" onEnter={reload} /> */}

    </Switch>
  </Router>,
  document.getElementById("root")
);
