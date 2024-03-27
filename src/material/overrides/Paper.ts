import { Theme, Components } from '@mui/material/styles';

const Paper = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {}
      }
    }
  };
};

export default Paper;
