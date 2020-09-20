import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    keyboard: {
      width: '90%',
      margin: '-5px auto',
      userSelect: 'none',
    },
    keyboard__item: {
      verticalAlign: 'top',
      display: 'inline-block',
      width: '33.3%',
      height: '55px',
      lineHeight: '55px',
      fontSize: '36px',
      textAlign: 'center',
      position: 'relative',
      cursor: 'pointer',
    },
    keyboard__item__delete: {
      display: 'inline-block',
      color: 'inherit',
      width: '23px',
      height: '18px',
      verticalAlign: 'middle',
      margin: '-8px 0 0 -4px',
    },
  }),
);

export default useStyles;
