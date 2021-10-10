import { useTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const useClasses = () => {
  const theme = useTheme();
  return {
    card: {
      backgroundImage: theme.foregroundGradient,
    },
    grid: {
      container: {
        backgroundImage: theme.backgroundGradient,
        paddingTop: theme.spacing(3),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
      },
      item: {},
    },
    error: {
      color: red[500],
    },
    pokemon: {
      backgroundImage: theme.foregroundGradient,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    search: {
      backgroundImage: theme.foregroundGradient,
    },
    toolbar: {
      container: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      items: {
        margin: theme.spacing(1),
      },
    },
  };
};
