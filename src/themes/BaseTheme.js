import { createTheme } from '@mui/material/styles';

export const BaseTheme = createTheme({
  palette: {
    primary: {
      main: '#062332',
      light: '#cfcfcf',
      dark: '#857e94',
      contrastText: '#ede7f6',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#ede7f6',
      secondary: '#ede7f6',
      disabled: '#9575cd',
      hint: '#d1c4e9',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  backgroundGradient: 'linear-gradient(to bottom , #190d28, #062332);',
  foregroundGradient: 'linear-gradient(to bottom , #4D4C6F, #503A52);',
  gradient: {
    foreground: 'linear-gradient(to bottom , #190d28, #062332);',
    background: 'linear-gradient(to bottom , #4D4C6F, #503A52);',
  },
});
