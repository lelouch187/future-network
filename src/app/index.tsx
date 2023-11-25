import React from 'react';
import './index.scss';
import { withProviders } from './providers';
import { Routing } from 'pages';

function App() {
  const isAuth = false;
  return (
    <div className="app">
      <Routing isAuth={isAuth} />
    </div>
  );
}

export default withProviders(App);
