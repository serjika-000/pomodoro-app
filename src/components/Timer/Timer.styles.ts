import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<{ themeFont: string, themeColor: string }>()((theme, {
    themeFont,
    themeColor
  }) => ({
    wrapper: {
      alignItems: 'center',
      background: theme.palette.byName.deepBlue,
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(5),
      justifyContent: 'center',
      minHeight: '100vh',
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 2.5),
      }
    },
    largeCircle: {
      alignItems: 'center',
      background: 'linear-gradient(315deg, #2E325A 0%, #0E112A 100%)',
      borderRadius: '50%',
      boxShadow: '50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A',
      display: 'flex',
      flexShrink: 0,
      height: 410,
      justifyContent: 'center',
      width: 410,
      marginBottom: 36,
      [theme.breakpoints.down('sm')]: {
        width: 300,
        height: 300,
        marginBottom: 55,
      },
    },
    mediumCircle: {
      alignItems: 'center',
      background: theme.palette.byName.darkBlue,
      borderRadius: '366px',
      display: 'flex',
      height: 340,
      justifyContent: 'center',
      position: 'relative',
      width: 340,
      [theme.breakpoints.down('sm')]: {
        width: 267,
        height: 267,
      },
    },
    number: {
      color: theme.palette.byName.bluishGrey,
      fontFamily: themeFont,
      fontSize: 100,
      fontWeight: 700,
      letterSpacing: '-5px',
      position: 'absolute',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: 80,
        letterSpacing: '-4px',
      },
    },
    startButton: {
      background: 'transparent',
      border: 'none',
      bottom: 75,
      color: theme.palette.byName.bluishGrey,
      cursor: 'pointer',
      fontFamily: themeFont,
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: '15px',
      position: 'absolute',
      zIndex: 2,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        letterSpacing: '13.125px',
        bottom: 60,
      },
    },
    circularProgress: {
      color: themeColor,
      cursor: 'pointer',
      position: 'absolute',
      zIndex: 1,
    },
  }),
);
