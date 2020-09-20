import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      width: '100%',
      position: 'initial',
    },
    title: {
      cursor: 'pointer',
    },
  }),
);

export default useStyles;
