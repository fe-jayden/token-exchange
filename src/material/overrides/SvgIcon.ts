import { Theme, Components } from '@mui/material/styles';

const SvgIcon = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          marginRight: 0,
          fontSize: '24px'
        }
      }
    }
  };
};

export default SvgIcon;
