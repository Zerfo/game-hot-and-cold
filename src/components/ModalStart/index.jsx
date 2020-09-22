import React from 'react';

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
  const [nickname, setNickname] = React.useState('');

  const handleChangeNickname = (event) => setNickname(event.target.value);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      maxWidth="xs"
    >
      <DialogTitle id="form-dialog-title">Никнейм</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Для старта игры напишите ваш никнейм в текстовое поле.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Никнейм"
          type="text"
          value={nickname}
          onChange={handleChangeNickname}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Отмена
        </Button>
        <Button
          disabled={nickname.length === 0}
          onClick={() => startGame(nickname)}
          color="primary"
        >
          <Link to="/game">
            Начать игру
          </Link>
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalStart;
