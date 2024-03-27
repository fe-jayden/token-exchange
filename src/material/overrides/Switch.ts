import { Theme, Components } from '@mui/material/styles';

const Switch = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiSwitch: {
      styleOverrides: {}
    }
  };
};

export default Switch;
