import { Theme, Components } from '@mui/material/styles';

const Drawer = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiDrawer: {
      styleOverrides: {}
    }
  };
};

export default Drawer;
