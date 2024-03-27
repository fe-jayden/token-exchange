import { Theme, Components } from '@mui/material/styles';

const Checkbox = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  const { primary } = theme.palette;
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          MuiSvgIcon: {
            root: {
              stroke: primary['main']
            }
          },

          '&.Mui-disabled': {
            svg: {
              path: {
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

export default Checkbox;
