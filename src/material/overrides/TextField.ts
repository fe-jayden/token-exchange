import { Theme, Components } from '@mui/material/styles';

const TextField = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
          '.MuiInputBase-root': {
            height: '44px',
            overflow: 'hidden'
          },
          '.MuiOutlinedInput-root': {
            padding: '0 9px !important'
          },
          '.MuiInputBase-multiline': {
            height: 'inherit',
            padding: '9px !important'
          },
          '.MuiInputBase-adornedEnd': {
            padding: '0 !important'
          }
        }
      },
      variants: [
        {
          props: {
            variant: 'outlined'
          },
          style: {
            color: '#fff'
          }
        }
      ]
    }
  };
};

export default TextField;
