import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from 'components/Header';

import history from 'utils/history';

import routes from './routes';
import useStyles from './styles';

function Root() {
  const classes = useStyles();

  return (
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
  )
};

export default Root;
