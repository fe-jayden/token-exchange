import { Theme, Components } from '@mui/material/styles';

const Pagination = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiPagination: {
      styleOverrides: {}
    }
  };
};

export default Pagination;
