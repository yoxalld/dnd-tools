import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import SetupUrl from "./SetupUrl";
import App from "../App";
import NotFound from "./NotFound";

const Router = () => (
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
      crossOrigin="anonymous"
    />
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SetupUrl} />
        <Route path="/combat-tracker/:siteId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
