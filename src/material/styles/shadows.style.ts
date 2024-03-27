import { Shadows } from '@mui/material/styles';

export default function shadows(): Shadows {
  const shadows = [
    'none',
    '0px 4px 6px 0px rgba(47, 51, 122, 0.12), 0px 0px 4px 0px rgba(47, 51, 122, 0.12)',
    ...Array(23).fill('none')
  ] as Shadows;

  return shadows;
}
