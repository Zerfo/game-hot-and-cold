import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: 'calc(100vh - 65px)',
    },
  }),
);

export default useStyles;
