import { Theme, Components } from '@mui/material/styles';

const Input = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  const { grey, primary, error } = theme.palette;

  return {
    MuiInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            borderColor: grey['50']
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: grey['50'],
          borderRadius: '8px',
          border: 'none',
          color: grey['400'],
          paddingRight: 0,

          ':hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: grey['50']
            }
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${primary['main']}`
            }
          },
          '&.Mui-readOnly': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            }
          },
          '&.Mui-disabled': {
            backgroundColor: grey['100'],

            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            }
          },
          '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: error['main']
            },
            input: {
              color: error['main']
            }
          }
        },
        input: {
          padding: '13px 12px',
          fontWeight: 400,
          fontSize: '15px',
          lineHeight: '18px',
          display: 'flex',
          alignItems: 'center',
          '&.Mui-disabled': {
            WebkitTextFillColor: grey['600'],
            fontWeight: 500,
            '::placeholder': {
              color: grey['600'],
              opacity: 1
            },
            ':-ms-input-placeholder': {
              color: grey['600']
            },
            '::-ms-input-placeholder': {
              color: grey['600']
            }
          }
        },

        notchedOutline: {
          borderColor: grey['50']
        }
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          padding: '6px 6px 6px 0',
          marginLeft: 0,
          '& .MuiTypography-root': {
            color: grey['400'],
            fontWeight: 500
          }
        }
      }
    }
  };
};

export default Input;
