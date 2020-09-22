import React from 'react';
import { connect } from 'react-redux';

import Keyboard from 'components/Keyboard';
import Number from 'components/Number';
import Marker from 'components/Marker';

import useStyles from './styles';

function History({ _number }) {
  const classes = useStyles();
  const [number, setNumber] = React.useState('')

  const onPick = (value) => {
    if (number.length < 3) {
      const nextCode = number + value.toString();
      setNumber(nextCode);
    } else if(number === '000') {
      // TODO: write a condition for 000
    }
  }
  const onDelete = () => {
    if (number.length > 0) {
      const nextCode = number.substr(0, number.length - 1);
      setNumber(nextCode);
    }
  }

  return (
    <div className={classes.container}>
      <div>
        <Number value={number} />
        <Marker
          value={number}
          number={_number}
        />
      </div>
      <Keyboard onPick={onPick} onDelete={onDelete} />
    </div>
  )
}

const mapStateToProps = (store) => ({
  _number: store.game.number,
})

export default connect(mapStateToProps, null)(History);
