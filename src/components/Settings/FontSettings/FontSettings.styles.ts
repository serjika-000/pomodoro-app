import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) =>({
  buttonGroup: {
    gap: 16,
  },
  root: {
    height: 40,
    textTransform: 'capitalize',
    width: 40,
    zIndex: 2,
    position: 'relative',
    '&:hover': {
      boxShadow: `0 0 0 4px white, 0 0 0 6px ${theme.palette.byName.lightGrey}`,
    },
  },
  selectedButton: {
    background: theme.palette.byName.darkBlue,
    border: theme.palette.byName.darkBlue,
    borderRadius: '50% !important',
    color: theme.palette.common.white,
  },
  button: {
    background: theme.palette.byName.lightGrey,
    border: theme.palette.byName.lightGrey,
    borderRadius: '50% !important',
    color: theme.palette.byName.deepBlue,
    transition: 'all 0.3s ease-in-out',
    '&.Mui-selected': {
      background: theme.palette.byName.darkBlue,
      color: theme.palette.common.white,
      '&:hover': {
        background: theme.palette.byName.darkBlue,
        color: theme.palette.common.white,
      },
    }
  },
  firstButton: {
    fontFamily: 'Kumbh Sans, sans-serif',
    fontWeight: 700,
  },
  middleButton: {
    fontFamily: 'Roboto Slab, serif',
    fontWeight: 400,
  },
  lastButton: {
    fontFamily: 'Space Mono, monospace',
    fontWeight: 700,
  }
}));
