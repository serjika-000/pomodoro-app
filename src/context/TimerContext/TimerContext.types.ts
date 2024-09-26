import { ModeLabels } from './TimerContext.enumerations';
import type { Dispatch, SetStateAction } from 'react';

export type TimerContextType = {
  progressValuePercentage: number | null;
  formattedTimeLabel: string;
  ongoingTimeInSeconds: number;
  isRunning: boolean;
  mode: ModeLabels;
  modeDurationInSeconds: { [key in ModeLabels]: number };
  setInitialTimerValue: (time: number) => void;
  setIsRunning: any;
  setMode: (mode: ModeLabels) => void;
  setRemainingTimerValue: (time: number) => void;
  setSettingsOpen: Dispatch<SetStateAction<boolean>>;
  settingsOpen: boolean;
  isFinished: boolean;
  resetTimer: () => void;
  setModeDuration: (modeLabel: ModeLabels, value: number) => void;
  handleStartProgress: () => void;
  handleStopProgress: () => void;
}
