import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      left: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: 150,
    },
    menu: {
      display: 'flex',
      flexDirection: 'column',
      height: 150,
      justifyContent: 'space-between',
    },
    instruction_btn: {
      marginTop: -10,
    }
  }),
);

export default useStyles;
