import { createTheme } from '@mui/material/styles';


export const byName = {
  bluishGrey: '#d7e0ff',
  lightGrey: '#eff1fa',
  carrot: '#f87070',
  turquoise: '#70f3f8',
  neonPink: '#d881f8',
  deepBlue: '#1e213f',
  darkBlue: '#161932',
};

export const theme = createTheme({
  palette: {
    byName,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0
        }
      }
    },
  },
});

export type Theme = typeof theme;

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    byName: typeof byName;
  }

  export interface PaletteOptions {
    byName?: Partial<Palette['byName']>;
  }
}
