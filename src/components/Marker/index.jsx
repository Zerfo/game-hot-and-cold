import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import comparison from 'utils/comparison';

import useStyles from './styles';

function Marker({ value, number }) {
  const classes = useStyles();
  const [marker, setMarker] = useState(['cold', 'cold', 'cold']); // cold, warmly, hot
  const [isRedirect, setRedirect] = useState(false);

  useEffect(() => {
    const arrValue = value.split('');
    const arrnumber = number.split('');

    const newMarker = arrValue.map((el, idx) => {
      return comparison(el, arrnumber, idx);
    });

    if(newMarker.length === 3 && newMarker.every((itm) => itm === 'hot')) {
      setMarker(newMarker);
      setTimeout(() => setRedirect(true), 1000);
    } else {
      setMarker(newMarker);
    }
  }, [value, number])

  return (
    <div className={classes.container}>
      {
        value.length === 3 &&
        marker.map((itm, idx) => (
          <div
            className={classes[itm] + ' ' + classes.el}
            key={idx}
          >
            { itm }
          </div>
        ))
      }
      { isRedirect && <Redirect to='/finish-game' /> }
    </div>
  );
}

export default Marker;
