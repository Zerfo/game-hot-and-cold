import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from '@material-ui/core';

import Header from 'components/Header';

import store from 'store';

import history from 'utils/history';

import routes from './routes';
import useStyles from './styles';

function Root() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Container className={classes.container}>
        <Router history={history}>
          <Header />
          <Switch>
            {
              routes.map((route, index) => <Route key={index} {...route} />)
            }
          </Switch>
        </Router>
      </Container>
    </Provider>
  )
};

export default Root;
