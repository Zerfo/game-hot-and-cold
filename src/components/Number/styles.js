import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    machine__number: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      height: '100px',
      justifyContent: 'space-evenly',
    },
    machine__number__digit: {
      padding: '10px 0 8px',
      color: '#2e2e2e',
      flexGrow: 0,
      fontSize: '60px',
      fontWeight: 'bold',
      height: '50px',
      textAlign: 'center',
      width: '50px',
    },
  }),
);

export default useStyles;
