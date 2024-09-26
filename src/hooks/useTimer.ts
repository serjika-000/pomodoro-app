import { useEffect, useReducer, useRef } from 'react';
import { ModeLabels } from '../context/TimerContext/TimerContext.enumerations';
import { FIVE_MINUTES, TEN_MINUTES, TWENTY_FIVE_MINUTES } from '../context/TimerContext/TimerContext.constants';

type TimerState = {
  mode: ModeLabels;
  modeDurationInSeconds: {
    [ModeLabels.Pomodoro]: number;
    [ModeLabels.ShortBreak]: number;
    [ModeLabels.LongBreak]: number;
  };
  ongoingTimeInSeconds: number;
  remainingTimerValue: number;
  isRunning: boolean;
  isFinished: boolean;
  settingsOpen: boolean;
};

type TimerAction =
  | { type: 'SET_MODE'; payload: ModeLabels }
  | { type: 'SET_IS_RUNNING'; payload: boolean }
  | { type: 'DECREMENT_TIMER' }
  | { type: 'RESET_TIMER' }
  | { type: 'SET_IS_FINISHED' }
  | { type: 'SETTINGS_OPEN' }
  | { type: 'SET_MODE_DURATION'; payload: { modeLabel: ModeLabels; value: number } };

const initialState: TimerState = {
  mode: ModeLabels.Pomodoro as ModeLabels,
  modeDurationInSeconds: {
    [ModeLabels.Pomodoro]: TWENTY_FIVE_MINUTES,
    [ModeLabels.ShortBreak]: FIVE_MINUTES,
    [ModeLabels.LongBreak]: TEN_MINUTES,
  },
  ongoingTimeInSeconds: TWENTY_FIVE_MINUTES,
  remainingTimerValue: TWENTY_FIVE_MINUTES,
  isRunning: false,
  isFinished: false,
  settingsOpen: false,
};

function timerReducer(state: TimerState, action: TimerAction): TimerState {
  switch (action.type) {
    case 'SET_MODE':
      return {
        ...state,
        mode: action.payload,
        ongoingTimeInSeconds: state.modeDurationInSeconds[action.payload],
        remainingTimerValue: state.modeDurationInSeconds[action.payload],
      };
    case 'SET_IS_RUNNING':
      return {
        ...state,
        isRunning: !state.isRunning,
      };
    case 'DECREMENT_TIMER':
      return { ...state, ongoingTimeInSeconds: state.ongoingTimeInSeconds - 1 };
    case 'SETTINGS_OPEN':
      return {
        ...state,
        settingsOpen: !state.settingsOpen,
      };
    case 'RESET_TIMER':
      return {
        ...state,
        isRunning: false,
        ongoingTimeInSeconds: state.modeDurationInSeconds[state.mode],
        remainingTimerValue: state.modeDurationInSeconds[state.mode],
        isFinished: false,
      };
    case 'SET_IS_FINISHED':
      return { ...state, isFinished: true };
    case 'SET_MODE_DURATION':
      return {
        ...state,
        ongoingTimeInSeconds: action.payload.value,
        modeDurationInSeconds: {
          ...state.modeDurationInSeconds,
          [action.payload.modeLabel]: action.payload.value,
        },
      };
    default:
      throw new Error(`Unsupported action type: ${action}`);
  }
}

export function useTimer() {
  const [ state, dispatch ] = useReducer(timerReducer, initialState);
  const isRunningRef = useRef(state.isRunning);

  useEffect(() => {
    isRunningRef.current = state.isRunning;
  }, [ state.isRunning ]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (state.isRunning && isRunningRef.current && state?.ongoingTimeInSeconds > 0) {
      timer = setInterval(() => {
        dispatch({ type: 'DECREMENT_TIMER' });
      }, 1000);
    } else if (!state.isRunning && !isRunningRef.current && timer) {
      clearInterval(timer);
    } else if (state.ongoingTimeInSeconds === 0) {
      dispatch({ type: 'SET_IS_FINISHED' });
    }
    return () => {
      if (timer !== null) {
        clearInterval(timer as unknown as number);
      }
    }
  }, [ state.ongoingTimeInSeconds, state.isRunning ]);

  const resetTimer = () => dispatch({ type: 'RESET_TIMER' });
  const setIsRunning = (isRunning: boolean) => dispatch({ type: 'SET_IS_RUNNING', payload: isRunning });
  const setMode = (mode: ModeLabels) => dispatch({ type: 'SET_MODE', payload: mode });
  const setModeDuration = (modeLabel: ModeLabels, value: number) => dispatch({ type: 'SET_MODE_DURATION', payload: { modeLabel, value } });
  const setSettingsOpen = () => dispatch({ type: 'SETTINGS_OPEN' });

  return {
    ...state,
    resetTimer,
    setIsRunning,
    setMode,
    setModeDuration,
    setSettingsOpen,
  };
}