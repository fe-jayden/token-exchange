import { Theme, Components } from '@mui/material/styles';

const Typography = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word'
        }
      }
    }
  };
};

export default Typography;
