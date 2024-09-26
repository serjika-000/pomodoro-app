import React, { useContext } from 'react';
import { Check } from '@mui/icons-material';
import {
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import type { ToggleButtonProps } from '@mui/material';

import { Colors, ThemeContext } from '../../../context';
import { useStyles } from './ColorSettings.styles';

export const ColorSettings = () => {

  const { themeColor, switchColor } = useContext(ThemeContext);

  const { classes } = useStyles();

  const THEME_COLORS = [
    Colors.Carrot,
    Colors.Turquoise,
    Colors.NeonPink,
  ];

  const checkIcon =
    <IconButton className={classes.checkIcon} type="button">
      <Check />
    </IconButton>


  const handleFontChange: ToggleButtonProps['onChange'] = ( _, value ) => {
    switchColor(value);
  };

  return (
    <ToggleButtonGroup
      aria-label="theme colors"
      exclusive
      onChange={handleFontChange}
      value={themeColor}
      classes={{
        root: classes.buttonGroup,
        firstButton: classes.firstButton,
        middleButton: classes.middleButton,
        lastButton: classes.lastButton,
      }}
    >
      {THEME_COLORS.map(( color, index ) => {
        return (
          <ToggleButton
            key={index}
            value={color}
            aria-label={color}
            classes={{ root: classes.root}}
          >
            {themeColor === color ? checkIcon : null}
          </ToggleButton>
        )
      })}
    </ToggleButtonGroup>
  );
}
