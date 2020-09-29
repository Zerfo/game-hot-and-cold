import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Paper, Typography, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { stopGame, startGame } from 'store/game/actions';

import useStyles from './styles';

function FinishGame() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(stopGame(localStorage.getItem('time')));
    // TODO: write function for saving the game result
    return () => localStorage.removeItem('time');
  }, [dispatch]);

  return useSelector(({ game: { nickname } }) => (
    <div className={classes.container}>
      <Paper
        elevation={0}
        className={classes.menu}
      >
        <Typography variant="h4" noWrap>
          Поздравляем, {nickname}!
        </Typography>
        <Typography variant="h6" noWrap>
          Итоговое время игры: {localStorage.getItem('time')} (мин:сек:мс)
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(startGame(nickname))}
        >
          <NavLink to='/game'>
            Еще раз
          </NavLink>
        </Button>
      </Paper>
    </div>
  ))
}

export default FinishGame;
