import { makeStyles } from 'tss-react/mui';
import { convertRgbaToLighterShade } from './Settings.utils';


export const useStyles = makeStyles<{ themeFont: string, themeColor: string }>()((theme, { themeFont, themeColor }) => ({
    dialogPaper: {
      borderRadius: 25,
      margin: 'auto 24px',
      maxWidth: 540,
      overflow: 'inherit',
      padding: 0,
      width: '100%',
    },
    dialogTitle: {
      fontFamily: themeFont,
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 1,
      padding: theme.spacing(4.5, 5),
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
        padding: 24,
      },
    },
    dialogContent: {
      padding: theme.spacing(3, 5, 7.5),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 3, 7.5),
      }
    },
    gridContainer: {
      [theme.breakpoints.down('sm')]: {
        paddingTop: 16,
        flexDirection: 'column',
        '& .MuiGrid-item': {
          paddingTop: 8,
        }
      },
    },
    closeButton: {
      color: theme.palette.byName.deepBlue,
      opacity: 0.5,
      position: 'absolute',
      right: 40,
      top: 30,
      [theme.breakpoints.down('sm')]: {
        right: 24,
        top: 14,
      },
    },
    subTitle: {
      fontFamily: themeFont,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: 5,
      lineHeight: 1,
      textTransform: 'uppercase',
      [theme.breakpoints.down('sm')]: {
        fontSize: 11,
        textAlign: 'center',
      },
    },
    margin: {
      marginBottom: 22,
    },
    settingsContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: 18,
      },
    },
    applyButton: {
      background: themeColor,
      borderRadius: 26.5,
      bottom: '-5%',
      boxShadow: 'none',
      color: theme.palette.common.white,
      fontFamily: themeFont,
      fontSize: 16,
      fontWeight: 700,
      height: 53,
      left: '50%',
      position: 'absolute',
      textTransform: 'capitalize',
      transform: 'translateX(-50%)',
      transition: 'background 0.3s ease-in-out',
      width: 160,
      zIndex: 2000, // larger than MUI Dialog
      '&:hover': {
        background: convertRgbaToLighterShade(themeColor),
        boxShadow: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        width: 140,
        height: 53,
      },
    }
  }
));
