import React, { useState } from 'react';
import Pt from 'prop-types';

import { Link } from 'react-router-dom';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

function ModalStart({ open, startGame, handleClose }) {
  const [nickname, setNickname] = useState('');

  const handleChangeNickname = (event) => setNickname(event.target.value);

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      maxWidth="xs"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle id="form-dialog-title">Никнейм</DialogTitle>
      <DialogContent>
        <DialogContentText>Для старта игры напишите ваш никнейм в текстовое поле.</DialogContentText>
        <TextField
          autoFocus
          fullWidth
          margin="dense"
          id="name"
          label="Никнейм"
          type="text"
          value={nickname}
          onChange={handleChangeNickname}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Отмена
        </Button>
        <Button
          color="primary"
          disabled={nickname.length === 0}
          onClick={() => startGame(nickname)}
        >
          <Link to="/game">Начать игру</Link>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ModalStart.propTypes = {
  open: Pt.bool,
  startGame: Pt.func,
  handleClose: Pt.func,
};
ModalStart.defaultProps = {
  open: false,
  startGame: () => {},
  handleClose: () => {},
};

export default ModalStart;
