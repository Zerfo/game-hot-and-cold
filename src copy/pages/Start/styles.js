import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '150px',
      transform: 'translate(-50%, -50%)',
    },
    menu: {
      height: '100px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }
  }),
);

export default useStyles;
