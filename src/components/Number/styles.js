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
      color: '#2e2e2e',
      flexGrow: 0,
      fontSize: 60,
      fontWeight: 'bold',
      height: 50,
      marginBottom: 65,
      padding: '10px 0 8px',
      textAlign: 'center',
      width: 50,
      '&::before': {
        borderBottom: '3px solid black',
        borderColor: '#2e2e2e',
        content: 'no-open-quote',
        display: 'block',
        height: 50,
        position: 'relative',
        top: 70,
        width: 50,
      },
    },
  }),
);

export default useStyles;
