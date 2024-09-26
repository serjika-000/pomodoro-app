import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    wrapper: {
      alignItems: 'center',
      background: theme.palette.byName.deepBlue,
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
      justifyContent: 'flex-start',
      minHeight: '100vh',
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 2.5),
      }
    },
    title: {
      color: theme.palette.byName.bluishGrey,
      fontFamily: 'Kumbh Sans, sans-serif',
      fontSize: 32,
      fontWeight: 700,
      marginBottom: 21,
      marginTop: 48,
      position: 'relative',
      textAlign: 'center',
      top: -10,
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
        marginBottom: 15,
        marginTop: 32,
      }
    },
    settingsIcon: {
      color: theme.palette.byName.bluishGrey,
      height: 34,
      opacity: 0.5,
      transition: 'opacity 0.3s',
      width: 34,
      '&:hover': {
        opacity: 1,
      },
    }
  }),
);
