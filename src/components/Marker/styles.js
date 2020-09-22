import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      height: '70px',
    },
    el: {
      width: '50px',
      textAlign: 'center',
    },
    hot: {},
    warmly: {},
    cold: {},
  }),
);

export default useStyles;
