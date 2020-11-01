import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from '@material-ui/core';

import Header from 'components/Header';

import store from 'store';

import routes from './routes';
import useStyles from './styles';

function Root() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Container className={classes.container}>
        <Router>
          <Header />
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}

export default Root;
