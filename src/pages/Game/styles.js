import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 65px)',
      justifyContent: 'space-around',
    },
  }),
);

export default useStyles;
