import { Theme, Components, alpha } from '@mui/material/styles';

const Backdrop = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: 'rgba(71, 71, 71, 0.30)',
          backdropFilter: 'blur(2px)'
        }
      }
    }
  };
};

export default Backdrop;
