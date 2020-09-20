import React from 'react';

import { NavLink } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';

import ModalStart from 'components/ModalStart';

import useStyles from './styles';

function Start() {
  const classes = useStyles();
  const [showedModal, onShow] = React.useState(false);

  const handleClickShow = () => onShow(!showedModal);
  const handleClose = () => onShow(false);
  const startGame = (nickname) => {
    localStorage.setItem('nickname', nickname);
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
        startGame={startGame}
        handleClose={handleClose}
      />
    </div>
  )
}

export default Start;
