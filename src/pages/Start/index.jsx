import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';

import ModalStart from 'components/ModalStart';

import { startGame } from 'store/game/actions';

import useStyles from './styles';

function Start({ _startGame }) {
  const classes = useStyles();
  const [showedModal, onShow] = React.useState(false);

  const handleClickShow = () => onShow(!showedModal);
  const handleClose = () => onShow(false);
  const onStartGame = (nickname) => {
    _startGame(nickname);
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

const mapDispatchToProps = (dispatch) => ({
  _startGame: (nickname) => dispatch(startGame(nickname)),
})

export default connect(null, mapDispatchToProps)(Start);
