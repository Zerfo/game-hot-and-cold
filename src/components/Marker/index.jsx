import React, { useEffect, useState } from 'react';

import useStyles from './styles';

function Marker({ value }) {
  const classes = useStyles();
  const [marker, setMarker] = useState(['cold', 'cold', 'cold']); // cold, warmly, hot

  useEffect(() => {

  }, [value])

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
