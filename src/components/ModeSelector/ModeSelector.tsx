import React, { useContext } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import type { TabsProps } from '@mui/material';

import {
  ModeLabels,
  ThemeContext,
  TimerContext,
} from '../../context';

import { useStyles } from './ModeSelector.styles';


const TABS = [ ModeLabels.Pomodoro, ModeLabels.ShortBreak, ModeLabels.LongBreak ];

export const ModeSelector = () => {
  const { mode, setMode, modeDurationInSeconds, setInitialTimerValue, setRemainingTimerValue } = useContext(TimerContext);
  const { themeColor, themeFont } = useContext(ThemeContext);
  const { classes } = useStyles({ themeFont, themeColor });

  const onTabChangeHandler: TabsProps['onChange'] = (_, selectedMode: ModeLabels) => {
    setMode(selectedMode);
    const newTime = modeDurationInSeconds[selectedMode]
    setInitialTimerValue(newTime);
    setRemainingTimerValue(newTime);
  }

  return (
    <>
      <Box className={classes.root}>
        <Tabs
          TabIndicatorProps={{ style: { display: 'none' } }}
          aria-label="timer mode selector"
          onChange={onTabChangeHandler}
          value={mode}
        >
          {TABS.map((tab, index) => (
            <Tab
              key={index}
              label={tab}
              className={classes.tab}
              value={tab}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
}