import { Theme, Components } from '@mui/material/styles';

const Autocomplete = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  const { grey } = theme.palette;
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  return {
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          boxShadow: '0px 4px 6px 0px rgba(47, 51, 122, 0.12), 0px 0px 4px 0px rgba(47, 51, 122, 0.12)'
        },
        option: {
          color: grey[500],
          fontSize: '15px',
          fontWeight: 400,
          lineHeight: '18px'
        }
      }
    }
  };
};

export default Autocomplete;
