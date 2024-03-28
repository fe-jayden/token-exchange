import { Button, styled } from '@mui/material';

export const SHeader = styled(
  'div',
  {}
)(({ theme }) => ({
  position: 'fixed',
  right: '255px',
  left: '255px',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '14px',
  backdropFilter: 'blur(50px)',
  padding: '12px 24px',
  borderRadius: '50px',
}));

export const SHeaderIcon = styled(
  'div',
  {}
)(({ theme }) => ({
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  columnGap: '24px',
  cursor: 'pointer',
}));

export const SHeaderAction = styled(
  'div',
  {}
)(({ theme }) => ({
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  columnGap: '24px',
}));
export const SHeaderWallet = styled(
  Button,
  {}
)(({ theme }) => ({
  borderRadius: '50px',

  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  columnGap: '24px',
}));
