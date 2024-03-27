import { Theme, Components } from '@mui/material/styles';
import { LB_GRAY } from '../styles';
const ToggleButtonGroup = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          width: '138px',
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: '44px',
          padding: '2px',
          gap: '4px',
          backgroundColor: LB_GRAY[50]
        }
      }
    }
  };
};

export default ToggleButtonGroup;
