import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Paper, Typography, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { stopGame, startGame } from 'store/game/actions';

import useStyles from './styles';

function FinishGame({ nickname, time, _stopGame, _startGame }) {
  const classes = useStyles();
  useEffect(() => {
    _stopGame();
    // TODO: write function for saving the game result
  }, [_stopGame]);

  return (
    <div className={classes.container}>
      <Paper
        elevation={0}
        className={classes.menu}
      >
        <Typography variant="h4" noWrap>
          Поздравляем, {nickname}!
        </Typography>
        <Typography variant="h6" noWrap>
          Итоговое время игры: {time} (мин:сек:мс)
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => _startGame(nickname)}
        >
          <NavLink to='/game'>
            Еще раз
          </NavLink>
        </Button>
      </Paper>
    </div>
  )
}

const mapStateToProps = (store) => ({
  nickname: store.game.nickname,
  time: store.game.time,
});
const mapDispatchToProps = (dispatch) => ({
  _stopGame: () => dispatch(stopGame()),
  _startGame: (nickname) => dispatch(startGame(nickname)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FinishGame);
