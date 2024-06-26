import { Theme, Components } from '@mui/material/styles';

const BottomNavigation = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiBottomNavigation: {
      styleOverrides: {}
    }
  };
};

export default BottomNavigation;
