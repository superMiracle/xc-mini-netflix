import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import EmptyLayout from './layouts/EmptyLayout';

import Home from './containers/Home';
import Detail from './containers/Detail';

const NotFound = () => {
  return <div>NotFound</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

const App = () => (
  <div style={{ height: '100%' }}>
    <Router>
      <Switch>
        <DashboardRoute exact path='/' component={Home} />
        <DashboardRoute path='/detail/:id' component={Detail} />
        <EmptyRoute component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default App;
