import React from 'react';
import type { ChangeEvent } from 'react';
import { IconButton, TextField, Typography } from '@mui/material';
import { NavigateBefore } from '@mui/icons-material';

import { useStyles } from './TimeSettingsInput.styles';
import type { TimeSettingsInputProps } from './TimeSettingsInput.types';

export const TimeSettingsInput = (props: TimeSettingsInputProps) => {
  const {
    title,
    defaultValue,
    value: valueFromProps = defaultValue,
    updateInputChange,
  } = props;
  const { classes, cx } = useStyles();

  const handleIncrement = () => {
    if (valueFromProps < 60) {
      updateInputChange(valueFromProps + 1);
    }
  };

  const handleDecrement = () => {
    if (valueFromProps > 1) {
      updateInputChange(valueFromProps - 1);
    }
  };

  const onNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateInputChange(Number(event.target.value));
  }


  return (
    <div className={classes.root}>
      <Typography component="h5" className={classes.label}>
        {title}
      </Typography>
      <div className={classes.textFieldWrapper}>
      <TextField
        className={classes.textField}
        fullWidth
        InputProps={{
          classes: {
            root: classes.inputRoot,
            input: classes.input,
          },
          disableUnderline: true,
        }}
        inputProps={{
          min: 1,
          max: 60,
          className: classes.inputInner,
        }}
        onChange={onNumberChange}
        type="number"
        value={valueFromProps}
        variant="filled"
      />
        <IconButton type="button" disableRipple onClick={handleIncrement} className={cx(classes.arrow, classes.up)}>
          <NavigateBefore />
        </IconButton>
      <IconButton type="button" disableRipple onClick={handleDecrement} className={cx(classes.arrow, classes.down)}>
        <NavigateBefore />
      </IconButton>
      </div>
    </div>
  );
}
