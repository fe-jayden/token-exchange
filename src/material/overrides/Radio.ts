import { Theme, Components } from '@mui/material/styles';

const Radio = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  const { primary } = theme.palette;
  return {
    MuiRadio: {
      styleOverrides: {
        root: {
          svg: {
            root: {
              rect: {
                stroke: primary['main']
              }
            }
          },
          '&.Mui-disabled': {
            svg: {
              circle: {
                fill: '#A3A3A3'
              },
              rect: {
                stroke: '#A3A3A3'
              }
            }
          }
        }
      }
    }
  };
};

export default Radio;
