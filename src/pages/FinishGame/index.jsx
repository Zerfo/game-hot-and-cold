import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { stopGame } from 'store/game/actions';

// import useStyles from './styles';

function FinishGame({ _stopGame }) {
  // const classes = useStyles();
  useEffect(() => {
    _stopGame();
  }, [_stopGame]);

  return (
    <div>
      FinishGame page
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  _stopGame: () => dispatch(stopGame()),
});

export default connect(null, mapDispatchToProps)(FinishGame);
