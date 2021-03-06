import Pt from 'prop-types';

import useStyles from './styles';

function Number({ value }) {
  const classes = useStyles();

  const digits = value ? value.toString().split('') : [];

  return (
    <div className={classes.machine__number}>
      <div className={classes.machine__number__digit}>{digits[0]}</div>
      <div className={classes.machine__number__digit}>{digits[1]}</div>
      <div className={classes.machine__number__digit}>{digits[2]}</div>
    </div>
  );
}

Number.propTypes = {
  value: Pt.string,
};
Number.defaultProps = {
  value: '',
};

export default Number;
