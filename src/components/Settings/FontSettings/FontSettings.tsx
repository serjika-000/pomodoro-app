import { ToggleButton, ToggleButtonGroup, } from '@mui/material';
import React, { useContext } from 'react';
import type { ToggleButtonProps } from '@mui/material';

import { useStyles } from './FontSettings.styles';
import { Fonts, ThemeContext } from '../../../context';

export const FontSettings = () => {

  const { themeFont, switchFont } = useContext(ThemeContext);

  const { classes, cx } = useStyles();

  const DEFAULT_LABEL = "Aa";

  const THEME_FONTS = [
    Fonts.KumbhSans,
    Fonts.RobotoSlab,
    Fonts.SpaceMono,
  ];


  const handleFontChange: ToggleButtonProps['onChange'] = ( _, value ) => {
    switchFont(value);
  };

  return (
    <ToggleButtonGroup
      aria-label="theme fonts"
      exclusive
      onChange={handleFontChange}
      value={themeFont}
      classes={{
        root: classes.buttonGroup,
        firstButton: cx(classes.firstButton, classes.button),
        middleButton: cx(classes.middleButton, classes.button),
        lastButton: cx(classes.lastButton, classes.button),
      }}
    >
      {THEME_FONTS.map(( font, index ) => {
        return (
          <ToggleButton
            key={index}
            value={font}
            aria-label={font}
            classes={{
              root: classes.root,
              selected: classes.selectedButton,
            }}
          >
            {DEFAULT_LABEL}
          </ToggleButton>
        )
      })}
    </ToggleButtonGroup>
  );
}
