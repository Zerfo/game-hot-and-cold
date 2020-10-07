import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Keyboard from 'components/Keyboard';
import Number from 'components/Number';
import Marker from 'components/Marker';

import useStyles from './styles';

function History() {
  const classes = useStyles();
  const [number, setNumber] = useState('');

  const onPick = (value) => {
    if (number.length < 3) {
      const nextCode = number + value.toString();
      setNumber(nextCode);
    }
  };
  const onDelete = () => {
    if (number.length > 0) {
      const nextCode = number.substr(0, number.length - 1);
      setNumber(nextCode);
    }
  };

  return useSelector(({ game }) => (
    <div className={classes.container}>
      <div>
        <Number value={number} />
        <Marker value={number} number={game.number} />
      </div>
      <Keyboard onPick={onPick} onDelete={onDelete} />
    </div>
  ));
}

export default History;
