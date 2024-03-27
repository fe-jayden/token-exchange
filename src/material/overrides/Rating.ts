import { Theme, Components } from '@mui/material/styles';

const Rating = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: '#FFB800',
          '.MuiRating-icon': {}
        },
        iconEmpty: {
          color: '#E0E0E0'
        },
        sizeLarge: {
          width: '32px',
          height: '32px'
        }
      }
    }
  };
};

export default Rating;
