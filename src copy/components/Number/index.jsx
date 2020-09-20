import React from 'react';

import useStyles from './styles';

function Header({ value }) {
  const classes = useStyles();

  const digits = value ? value.toString().split('') : [];

  const digitsComponents = [];
  for (let i = 0; i < 3; i++) {
    digitsComponents.push(
      <div key={i} className={classes.machine__number__digit}>
        {digits[i]}
      </div>,
    );
  }

  return (
    <div className={classes.machine__number}>
      { digitsComponents }
    </div>
  );
}

export default Header;
