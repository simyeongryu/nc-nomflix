import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Header from "Components/Header";

import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

const HOMEPAGE_URL = "https://simyeongryu.github.io/nc-nomflix";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path={`${HOMEPAGE_URL}/`} component={Home} />
      <Route exact path={`${HOMEPAGE_URL}/tv`} component={TV} />
      <Route path={`${HOMEPAGE_URL}/search`} component={Search} />
      <Route path={`${HOMEPAGE_URL}/movie/:id`} component={Detail} />
      <Route path={`${HOMEPAGE_URL}/tv/:id`} component={Detail} />
      {/* 위에 지정하지 않은 경로로 접근하면 /으로 이동 */}
      <Route to={`${HOMEPAGE_URL}/`} />
    </Switch>
  </Router>
);
