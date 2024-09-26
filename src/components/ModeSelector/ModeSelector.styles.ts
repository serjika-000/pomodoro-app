import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<{ themeFont: string, themeColor: string }>()((theme, {
    themeFont,
    themeColor
  }) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: '31.5px',
      background: theme.palette.byName.darkBlue,
      width: 'auto',
      flexShrink: 0,
      padding: theme.spacing(1),
      marginBottom: 28,
      [theme.breakpoints.down('sm')]: {
        width: 327,
      }
    },
    tab: {
      fontWeight: 700,
      width: 'auto',
      minWidth: 120,
      height: 48,
      flexShrink: 0,
      borderRadius: '26.5px',
      background: 'transparent',
      color: theme.palette.byName.bluishGrey,
      textTransform: 'lowercase',
      fontSize: 13,
      opacity: 0.4,
      fontFamily: themeFont,
      '&.Mui-selected': {
        background: themeColor,
        color: theme.palette.byName.deepBlue,
        fontFamily: themeFont,
        opacity: 1,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 12,
        width: 106,
        minWidth: 106,
      }
    }
  }),
);
