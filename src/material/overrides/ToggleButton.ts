import { Theme, Components } from '@mui/material/styles';

const ToggleButton = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  const { grey, primary } = theme.palette;
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          flex: 1,
          border: 0,
          borderRadius: '6px',
          backgroundColor: grey[50],
          color: grey[400],
          fontSize: '15px',
          fontWeight: '500',
          lineHeight: '18px',
          '&.Mui-selected': {
            backgroundColor: primary['main'],
            color: grey[50],
            ':hover': {
              backgroundColor: primary['main']
            }
          }
        }
      }
    }
  };
};

export default ToggleButton;
