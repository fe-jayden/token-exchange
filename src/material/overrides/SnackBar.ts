import { Theme, Components } from '@mui/material/styles';

const Snackbar = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiSnackbar: {
      styleOverrides: {}
    }
  };
};

export default Snackbar;
