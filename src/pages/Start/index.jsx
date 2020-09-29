import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';

import ModalStart from 'components/ModalStart';

import { startGame } from 'store/game/actions';

import useStyles from './styles';

function Start() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showedModal, onShow] = useState(false);

  const handleClickShow = () => onShow(!showedModal);
  const handleClose = () => onShow(false);
  const onStartGame = (nickname) => {
    dispatch(startGame(nickname));
    handleClose();
  };

  return (
    <div className={classes.container}>
      <Paper
        elevation={0}
        className={classes.menu}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickShow}
          disabled={showedModal}
        >
          Новая игра
        </Button>
        <Button
          variant="outlined"
          color="primary"
        >
          <NavLink to='/history'>
            История игр
          </NavLink>
        </Button>
        <Button
          color="primary"
          className={classes.instruction_btn}
        >
          <NavLink to='/instruction'>
            Инструкция
          </NavLink>
        </Button>
      </Paper>
      <ModalStart
        open={showedModal}
        startGame={onStartGame}
        handleClose={handleClose}
      />
    </div>
  )
}

export default Start;
