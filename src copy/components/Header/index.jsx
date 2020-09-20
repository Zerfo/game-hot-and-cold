import React from 'react';

import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import useStyles from './styles';

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.title}>
          <Link to="/">
            Горячо – Холодно
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
