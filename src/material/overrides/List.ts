import { Theme, Components } from '@mui/material/styles';

const List = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiList: {
      styleOverrides: {}
    }
  };
};

export default List;
