import { Theme, Components } from '@mui/material/styles';

const Card = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiCard: {
      styleOverrides: {}
    }
  };
};

export default Card;
