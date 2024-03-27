import { Theme, Components } from '@mui/material/styles';

const Popover = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiPopover: {
      styleOverrides: {
        root: {
          '&.menu-select': {
            '.MuiPaper-root': {
              borderRadius: '8px',
              marginTop: '4px',
              boxShadow: '0px 4px 6px 0px rgba(47, 51, 122, 0.12), 0px 0px 4px 0px rgba(47, 51, 122, 0.12)'
            }
          }
        }
      }
    }
  };
};

export default Popover;
