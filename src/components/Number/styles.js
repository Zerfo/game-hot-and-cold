import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    machine__number: {
      height: '100px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    machine__number__digit: {
      padding: '10px 0 8px',
      textAlign: 'center',
      flexGrow: 0,
      width: '50px',
      height: '50px',
      fontSize: '60px',
      fontWeight: 'bold',
    },
  }),
);

export default useStyles;
