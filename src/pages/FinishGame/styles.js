import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      left: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
    menu: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '150px',
      justifyContent: 'space-between',
    },
  }),
);

export default useStyles;
