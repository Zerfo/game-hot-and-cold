import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      left: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '150px',
    },
    menu: {
      display: 'flex',
      flexDirection: 'column',
      height: '150px',
      justifyContent: 'space-between',
    },
    instruction_btn: {
      marginTop: '-10px',
    }
  }),
);

export default useStyles;
