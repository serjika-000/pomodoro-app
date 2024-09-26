import { useContext } from 'react';
import {
  Button, ButtonProps,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';

import { ColorSettings } from './ColorSettings';
import { FontSettings } from './FontSettings';
import { ModeLabels, ThemeContext, TimerContext } from '../../context';
import { TimeSettingsInput } from './TimeSettingsInput';
import { useStyles } from './Settings.styles';
import './Settings.css';

const COPY = {
  settings: 'Settings',
  time: 'Time (minutes)',
  font: 'Font',
  color: 'Color',
  pomodoro: 'Pomodoro',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
  apply: 'Apply',
}

export const Settings = () => {
  const {
    modeDurationInSeconds,
    setModeDuration,
    settingsOpen,
    setSettingsOpen
  } = useContext(TimerContext);
  const {themeFont, themeColor} = useContext(ThemeContext);

  const {classes, cx} = useStyles({themeFont, themeColor});

  const handleClose = () => {
    setSettingsOpen(false);
  };

  const updateInputChange = (modeLabel: ModeLabels) => (inputValue: number) => {
    setModeDuration(modeLabel, inputValue * 60);
  }

  const onSettingsClose: ButtonProps['onClick'] = () => {
    setSettingsOpen(false);
  }


  return (
      <Dialog
        classes={{paper: classes.dialogPaper}}
        onClose={handleClose}
        open={settingsOpen}
      >
        <DialogTitle className={classes.dialogTitle}>
          {COPY.settings}
        </DialogTitle>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          color="inherit"
          edge="end"
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <DialogContent
          dividers
          classes={{root: classes.dialogContent}}
        >
          <Typography
            component="h4"
            className={cx(classes.subTitle, classes.margin)}
          >
            {COPY.time}
          </Typography>
          <Grid
            container
            spacing={3}
            className={classes.gridContainer}
          >
            <Grid item sm={4} xs={12}>
              <TimeSettingsInput
                title={COPY.pomodoro}
                defaultValue={25}
                value={modeDurationInSeconds[ModeLabels.Pomodoro] / 60}
                updateInputChange={updateInputChange(ModeLabels.Pomodoro)}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TimeSettingsInput
                title={COPY.shortBreak}
                defaultValue={5}
                value={modeDurationInSeconds[ModeLabels.ShortBreak] / 60}
                updateInputChange={updateInputChange(ModeLabels.ShortBreak)}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <TimeSettingsInput
                title={COPY.longBreak}
                defaultValue={15}
                value={modeDurationInSeconds[ModeLabels.LongBreak] / 60}
                updateInputChange={updateInputChange(ModeLabels.LongBreak)}
              />
            </Grid>
          </Grid>

          <Divider sx={{my: 3}} />

          <Grid
            container
            className={classes.settingsContainer}
          >
            <Typography
              component="h4"
              className={classes.subTitle}
            >
              {COPY.font}
            </Typography>
            <FontSettings />
          </Grid>

          <Divider sx={{my: 3}} />

          <Grid
            container
            className={classes.settingsContainer}
          >
            <Typography
              component="h4"
              className={classes.subTitle}
            >
              {COPY.color}
            </Typography>
            <ColorSettings />
          </Grid>
        </DialogContent>

        <Button
          aria-label={COPY.apply}
          className={classes.applyButton}
          variant="contained"
          disableRipple
          onClick={onSettingsClose}
        >
          {COPY.apply}
        </Button>

      </Dialog>
  );
};
