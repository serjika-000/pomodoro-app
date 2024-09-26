import React, { useContext } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Settings } from '@mui/icons-material';
import type { IconButtonProps } from '@mui/material';
import type { PropsWithChildren } from 'react';

import { TimerContext } from '../../context';
import { useStyles } from './Wrapper.styles';

export const Wrapper = ({ children }: PropsWithChildren<{}>) => {

  const { classes } = useStyles();
  const { setSettingsOpen } = useContext(TimerContext);

  const onSettingsToggle: IconButtonProps['onClick'] = () => {
    setSettingsOpen(prev => !prev);
  }

  const COPY = {
    title: 'pomodoro',
  }

  return (
    <Box className={classes.wrapper}>
      <header>
        <Typography component="h1" className={classes.title}>
          {COPY.title}
        </Typography>
      </header>
      <main>
        {children}
      </main>
      <IconButton onClick={onSettingsToggle}>
        <Settings className={classes.settingsIcon} />
      </IconButton>
    </Box>
  )
}
