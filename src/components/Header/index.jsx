import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import Stopwatch from 'components/Stopwatch';

import { stopGame } from 'store/game/actions';

import useStyles from './styles';

function Header({ isStarted, _stopGame }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.title}>
          <Link to="/" onClick={_stopGame}>
            Горячо – Холодно
          </Link>
        </Typography>
      </Toolbar>
      {isStarted && <Stopwatch />}
    </AppBar>
  );
}

const mapStateToProps = (store) => ({
  isStarted: store.game.isStarted,
});
const mapDispatchToProps = (dispatch) => ({
  _stopGame: () => dispatch(stopGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
