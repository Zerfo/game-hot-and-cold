import React from 'react';
import Pt from 'prop-types';

import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

import useStyles from './styles';

function Keyboard({ onPick, onDelete }) {
  const classes = useStyles();

  return (
    <div className={classes.keyboard}>
      <div className={classes.keyboard__row}>
        <div className={classes.keyboard__item} onClick={() => onPick(1)}>
          1
        </div>
        <div className={classes.keyboard__item} onClick={() => onPick(2)}>
          2
        </div>
        <div className={classes.keyboard__item} onClick={() => onPick(3)}>
          3
        </div>
      </div>

      <div className={classes.keyboard__row}>
        <div className={classes.keyboard__item} onClick={() => onPick(4)}>
          4
        </div>
        <div className={classes.keyboard__item} onClick={() => onPick(5)}>
          5
        </div>
        <div className={classes.keyboard__item} onClick={() => onPick(6)}>
          6
        </div>
      </div>

      <div className={classes.keyboard__row}>
        <div className={classes.keyboard__item} onClick={() => onPick(7)}>
          7
        </div>
        <div className={classes.keyboard__item} onClick={() => onPick(8)}>
          8
        </div>
        <div className={classes.keyboard__item} onClick={() => onPick(9)}>
          9
        </div>
      </div>

      <div className={classes.keyboard__row}>
        <div className={classes.keyboard__item} />
        <div className={classes.keyboard__item} onClick={() => onPick(0)}>
          0
        </div>
        <div className={classes.keyboard__item} onClick={() => onDelete()}>
          <KeyboardBackspace className={classes.keyboard__item__elete} />
        </div>
      </div>
    </div>
  );
}

Keyboard.propTypes = {
  onPick: Pt.func,
  onDelete: Pt.func,
}
Keyboard.defaultProps = {
  onPick: () => {},
  onDelete: () => {},
}

export default Keyboard;
