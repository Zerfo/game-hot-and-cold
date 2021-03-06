import { Redirect } from 'react-router';
import Pt from 'prop-types';

import comparison from 'utils/comparison';

import useStyles from './styles';

function Marker({ value, number }) {
  const classes = useStyles();
  const [marker, setMarker] = React.useState(['cold', 'cold', 'cold']); // cold, warmly, hot
  const [isRedirect, setRedirect] = React.useState(false);

  useEffect(() => {
    const arrValue = value.split('');
    const arrnumber = number.split('');

    const newMarker = arrValue.map((el, idx) => comparison(el, arrnumber, idx));

    if (newMarker.length === 3 && newMarker.every((itm) => itm === 'hot')) {
      setMarker(newMarker);
      setTimeout(() => setRedirect(true), 1000);
    } else {
      setMarker(newMarker);
    }
  }, [value, number]);

  return (
    <div className={classes.container}>
      {value.length === 3 &&
        marker.map((itm, idx) => (
          <div className={`${classes[itm]} ${classes.el}`} key={idx}>
            {itm}
          </div>
        ))}
      {isRedirect && <Redirect to="/finish-game" />}
    </div>
  );
}

Marker.propTypes = {
  value: Pt.string,
  number: Pt.string,
};
Marker.defaultProps = {
  value: '',
  number: '',
};

export default Marker;
