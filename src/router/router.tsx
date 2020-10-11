import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import City from '../pages/City/City';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename="whats-the-weather">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/city" component={City} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;