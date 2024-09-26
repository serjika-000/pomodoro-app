import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import App from './App';
import { CustomThemeProvider, TimerProvider } from './context';
import { theme } from './theme';

// Get the root element
const container = document.getElementById('root');

// Check if the container exists before creating the root
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
  // Handle the case where the root element is not found
  console.error("Root element with id 'root' not found");
}
