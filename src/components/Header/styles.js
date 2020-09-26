import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      position: 'initial',
      width: '100%',
    },
    title: {
      cursor: 'pointer',
    },
  }),
);

export default useStyles;
