import React, { useEffect, useState } from 'react';

import comparison from 'utils/comparison';

import useStyles from './styles';

function Marker({ value, number }) {
  const classes = useStyles();
  const [marker, setMarker] = useState(['cold', 'cold', 'cold']); // cold, warmly, hot

  useEffect(() => {
    const newMarker = [];
    const arrValue = value.split('');
    const arrnumber = number.split('');

    arrValue.forEach((el, idx) => {
      newMarker.push(comparison(el, arrnumber, idx))
    })

    setMarker(newMarker);
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
    </div>
  );
}

export default Marker;
