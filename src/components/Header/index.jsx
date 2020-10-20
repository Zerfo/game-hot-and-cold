import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pt from 'prop-types';

import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import Stopwatch from 'components/Stopwatch';

import { stopGame } from 'store/game/actions';

import useStyles from './styles';

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return useSelector(({ game: { isStarted } }) => (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography
          noWrap
          variant="h6"
          className={classes.title}
        >
          <Link to="/" onClick={() => dispatch(stopGame())}>
            Горячо – Холодно
          </Link>
        </Typography>
      </Toolbar>
      {isStarted && <Stopwatch />}
    </AppBar>
  ));
}

Header.propTypes = {
  isStarted: Pt.bool,
};
Header.defaultProps = {
  isStarted: false,
};

export default Header;
