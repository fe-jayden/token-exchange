import React, { useState } from 'react';
import * as S from './styles';
import { useMetaMask } from '@hooks/useMetaMask';
import { StringUtils } from '@common/utils';
import { Menu, MenuItem } from '@mui/material';

const Header = () => {
  const { wallet, isConnecting, hasProvider, connectMetaMask, disconnectWallet } = useMetaMask();
  const [openMenuWallet, setOpenMenuWallet] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <S.SHeader>
      <S.SHeaderIcon>
        <span>Logo</span>
        <span>Home</span>
        <span>Airdrop</span>
      </S.SHeaderIcon>
      <div>
        <S.SHeaderAction>
          {!hasProvider && (
            <S.SButtonInstallMetamask href='https://metamask.io' target='_blank'>
              Install MetaMask
            </S.SButtonInstallMetamask>
          )}
          {window !== undefined && window?.ethereum?.isMetaMask && wallet?.accounts.length < 1 && (
            <S.SButtonHeaderWallet disabled={isConnecting} onClick={connectMetaMask}>
              Connect Wallet
            </S.SButtonHeaderWallet>
          )}
          {hasProvider && wallet.accounts.length > 0 && (
            <S.SButtonHeaderWallet
              disabled={isConnecting}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setOpenMenuWallet(true);
                setAnchorEl(event.currentTarget);
              }}
            >
              {StringUtils.compactAdd(wallet?.accounts[0])}
            </S.SButtonHeaderWallet>
          )}
          {hasProvider && wallet.accounts.length > 0 && (
            <Menu open={openMenuWallet} anchorEl={anchorEl} onClose={() => setOpenMenuWallet(false)}>
              <MenuItem onClick={() => navigator.clipboard.writeText(wallet?.accounts[0])}>
                Copy address
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setOpenMenuWallet(false);
                  disconnectWallet();
                }}
              >
                Disconnect
              </MenuItem>
            </Menu>
          )}
        </S.SHeaderAction>
      </div>
    </S.SHeader>
  );
};

Header.propTypes = {};

export default Header;
