import { Theme, Components } from '@mui/material/styles';
import { LB_PRIMARY } from '../styles';

const Select = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  const { grey, primary } = theme.palette;
  return {
    MuiSelect: {
      styleOverrides: {}
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: '0'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: grey['600'],
          fontSize: '15px',
          lineHeight: '18px',
          fontWeight: 500,
          WebkitScrollbarTrack: {
            background: 'red',
            color: 'red'
          },

          '&.Mui-selected': {
            backgroundColor: '#fff',
            color: primary['main'],
            ':hover': {
              backgroundColor: '#fff'
            }
          },
          ':hover': {
            backgroundColor: '#fff',
            color: primary['main']
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          color: primary['main'],
          '&.MuiMenu-paper': {
            backgroundColor: '#fff'
          }
        }
      }
    }
  };
};

export default Select;
