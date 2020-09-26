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
      fontSize: '60px',
      fontWeight: 'bold',
      height: '50px',
      marginBottom: '65px',
      padding: '10px 0 8px',
      textAlign: 'center',
      width: '50px',
      '&::before' : {
        borderBottom: '3px solid black',
        borderColor: '#2e2e2e',
        content: 'no-open-quote',
        display: 'block',
        height: '50px',
        position: 'relative',
        top: '70px',
        width: '50px',
      }
    },
  }),
);

export default useStyles;
