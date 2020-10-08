import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import City from '../pages/City/City';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/city" component={City} />
    </Switch>
  );
};

export default Router;