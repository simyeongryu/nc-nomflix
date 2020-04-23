import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <HashRouter>
    <Route exact path="/" component={Home} />
    <Route path="/tv" component={TV} />
    <Route path="/search" component={Search} />
  </HashRouter>
);
