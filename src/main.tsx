import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import App from './App';
import { CustomThemeProvider, TimerProvider } from './context';
import { theme } from './theme';


const container = document.getElementById('root');


if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <CustomThemeProvider>
          <TimerProvider>
            <App />
          </TimerProvider>
        </CustomThemeProvider>
      </MuiThemeProvider>
      <Analytics />
    </React.StrictMode>
  );
} else {
  
  console.error("Root element with id 'root' not found");
}
