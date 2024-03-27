import { Theme, Components } from '@mui/material/styles';
import { LB_PRIMARY } from '../styles';

const Chip = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: LB_PRIMARY['100'],
          borderRadius: '4px',

          '&.Mui-disabled': {
            svg: {
              display: 'none'
            },
            opacity: '0'
          }
        },
        label: {
          color: LB_PRIMARY['500'],
          fontSize: '15px',
          fontWeight: 600,
          lineHeight: '18px'
        }
      }
    }
  };
};

export default Chip;
