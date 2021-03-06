import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      height: 70,
      justifyContent: 'space-evenly',
    },
    el: {
      fontWeight: 'bold',
      textAlign: 'center',
      width: 50,
    },
    hot: {
      color: '#de4f12',
    },
    warmly: {
      color: '#ffc130',
    },
    cold: {
      color: '#30cbff',
    },
  }),
);

export default useStyles;
