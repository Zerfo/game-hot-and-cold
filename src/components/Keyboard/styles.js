import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    keyboard: {
      margin: '-5px auto',
      userSelect: 'none',
      width: '90%',
    },
    keyboard__item: {
      cursor: 'pointer',
      display: 'inline-block',
      fontSize: 36,
      height: 55,
      lineHeight: '55px',
      position: 'relative',
      textAlign: 'center',
      verticalAlign: 'top',
      width: '33.3%',
    },
    keyboard__item__delete: {
      color: 'inherit',
      display: 'inline-block',
      height: 18,
      margin: '-8px 0 0 -4px',
      verticalAlign: 'middle',
      width: 23,
    },
  }),
);

export default useStyles;
