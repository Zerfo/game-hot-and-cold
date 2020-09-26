import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Toolbar, Typography } from '@material-ui/core';

import { stopGame } from 'store/game/actions';

import useStyles from './styles';

function Stopwatch({ _stopGame }) {
  const classes = useStyles();
  const [time, setTime] = useState({
    min: 0,
    sec: 0,
    ms: 0
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      let newTime = Object.assign({}, time);

      if (newTime.ms < 100) {
        newTime.ms += 1;
      }
      if(newTime.ms >=100) {
        newTime.sec += 1;
        newTime.ms = 0;
      }
      if (newTime.sec > 59) {
        newTime.min += 1;
        newTime.sec = 0;
      }
      localStorage.setItem('time', Object.values(time).map(itm => itm < 10 ? '0' + itm : itm).join(':'));
      setTime(newTime);
    }, 10);

    return () => clearInterval(timerInterval);
  });

  return (
    <Toolbar className={classes.container}>
      <Typography variant="h6">{time.min < 10 ? '0' + time.min : time.min}</Typography>
      <Typography variant="h6">:</Typography>
      <Typography variant="h6">{time.sec <  10 ? '0' + time.sec : time.sec}</Typography>
      <Typography variant="h6">:</Typography>
      <Typography variant="h6">{time.ms <  10 ? '0' + time.ms : time.ms}</Typography>
    </Toolbar>
  )
}

const mapDispatchToProps = (dispatch) => ({
  _stopGame: (time) => dispatch(stopGame(time)),
});

export default connect(null, mapDispatchToProps)(Stopwatch);
