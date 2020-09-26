import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import Stopwatch from 'components/Stopwatch';

import { stopGame } from 'store/game/actions';

import useStyles from './styles';

function Header({ isStarted, _stopGame }) {
  const classes = useStyles();
  const [time, setTime] = useState()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.title}>
          <Link to="/" onClick={() => _stopGame(time)}>
            Горячо – Холодно
          </Link>
        </Typography>
      </Toolbar>
      {isStarted && <Stopwatch onChange={setTime} />}
    </AppBar>
  );
}

const mapStateToProps = (store) => ({
  isStarted: store.game.isStarted,
});
const mapDispatchToProps = (dispatch) => ({
  _stopGame: (time) => dispatch(stopGame(time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
