import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '100%',
    },
  }),
);

export default useStyles;
