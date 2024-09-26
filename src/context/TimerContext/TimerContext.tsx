import { createContext, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type { TimerContextType } from './TimerContext.types';
import { useTimer } from '../../hooks/useTimer';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export const TimerContext = createContext<TimerContextType>({} as TimerContextType);

export const TimerProvider = ({ children }: PropsWithChildren<{}>) => {
  const {
    mode,
    modeDurationInSeconds,
    ongoingTimeInSeconds,
    isRunning,
    isFinished,
    setMode,
    setIsRunning,
    resetTimer,
    setSettingsOpen,
    settingsOpen,
    setModeDuration,
  } = useTimer();

  const [ startProgress, setStartProgress ] = useState(true);

  const minutesLeft = Math.floor(ongoingTimeInSeconds / 60);
  const secondsLeft = ongoingTimeInSeconds % 60;
  const secondsLabel = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
  const formattedTimeLabel = `${minutesLeft}:${secondsLabel}`;

  const progressValuePercentage = useMemo(() => {
    if (startProgress) {
      return (ongoingTimeInSeconds / modeDurationInSeconds[mode]) * 100;
    }
    return 0;
  }, [ mode, modeDurationInSeconds, ongoingTimeInSeconds, startProgress ]);

  useDocumentTitle(isRunning ? `(${formattedTimeLabel})Timer` : isFinished ? 'Finished!' : 'Timer');

  const handleStartProgress = () => {
    setStartProgress(true);
    setIsRunning(true);
  };

  const handleStopProgress = () => {
    setStartProgress(false);
    setIsRunning(false);
  };

  const contextValue = useMemo(() => {
    const context: TimerContextType = {
      progressValuePercentage,
      formattedTimeLabel,
      ongoingTimeInSeconds,
      isRunning,
      mode,
      setSettingsOpen,
      settingsOpen,
      setInitialTimerValue: resetTimer,
      setIsRunning,
      setMode,
      setRemainingTimerValue: resetTimer,
      modeDurationInSeconds,
      isFinished,
      resetTimer,
      setModeDuration,
      handleStartProgress,
      handleStopProgress,
    }
    console.log('TimerContext', context);
    return context;
  }, [ progressValuePercentage, formattedTimeLabel, ongoingTimeInSeconds, isRunning, mode, setSettingsOpen, settingsOpen, resetTimer, setIsRunning, setMode, modeDurationInSeconds, isFinished, setModeDuration, handleStartProgress, handleStopProgress ]);

  return (
    <TimerContext.Provider value={contextValue}>
      {children}
    </TimerContext.Provider>
  );
}
