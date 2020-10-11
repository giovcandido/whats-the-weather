import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './router/router';

import './App.sass';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="whats-the-weather">
      <Router />
    </BrowserRouter>
  );
}

export default App;
