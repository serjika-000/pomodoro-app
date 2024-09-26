import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(theme => ({
  checkIcon: {
    color: theme.palette.byName.deepBlue,
    fontSize: '1.5rem',
  },
  buttonGroup: {
    borderRadius: '50px',
    gap: 16,
  },
  root: {
    border: 'none',
    height: 40,
    width: 40,
    borderRadius: '50% !important',
    transition: 'all 0.3s ease',
  },
  firstButton: {
    background: theme.palette.byName.carrot,
    '&:hover': {
      background: theme.palette.byName.carrot,
    },
    '&.Mui-selected': {
      background: theme.palette.byName.carrot,
      '&:hover': {
        background: theme.palette.byName.carrot,
      },
    }
  },
  middleButton: {
    background: theme.palette.byName.turquoise,
    '&:hover': {
      background: theme.palette.byName.turquoise,
    },
    '&.Mui-selected': {
      background: theme.palette.byName.turquoise,
      '&:hover': {
        background: theme.palette.byName.turquoise,
      },
    }
  },
  lastButton: {
    background: theme.palette.byName.neonPink,
    '&:hover': {
      background: theme.palette.byName.neonPink,
    },
    '&.Mui-selected': {
      background: theme.palette.byName.neonPink,
      '&:hover': {
        background: theme.palette.byName.neonPink,
      },
    }
  }
}));

