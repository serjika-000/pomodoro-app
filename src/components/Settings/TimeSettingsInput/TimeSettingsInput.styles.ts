import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
    },
  },
  label: {
    color: theme.palette.byName.deepBlue,
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 6,
    opacity: 0.4,
    textTransform: 'lowercase',
    [theme.breakpoints.down('sm')]: {
      flex: 1,
    },
  },
  textField: {
    [theme.breakpoints.down('sm')]: {
      flex: 1,
    },
  },
  inputRoot: {
    backgroundColor: theme.palette.byName.lightGrey,
    borderRadius: '10px',
    height: 48,
    width: 140,
  },
  input: {
    borderRadius: '10px',
    color: theme.palette.byName.deepBlue,
    fontSize: 14,
    fontWeight: 700,
    padding: theme.spacing(1.5, 2),
  },
  inputInner: {
    backgroundColor: theme.palette.byName.lightGrey,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  textFieldWrapper: {
    position: 'relative',
  },
  arrow: {
    position: 'absolute',
    padding: 0,
    color: theme.palette.byName.deepBlue,
    opacity: 0.4,
    transition: 'opacity 0.2s ease-in-out',
    '&:hover': {
      opacity: 1,
    }
  },
  down: {
    right: 7,
    bottom: 5,
    transform: 'rotate(-90deg)',
  },
  up: {
    right: 7,
    top: 5,
    transform: 'rotate(90deg)',
  },
}));
