import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/Dashboard';
import City from '../pages/City/City';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/city" component={City} />
    </Switch>
  );
};

export default Routes;