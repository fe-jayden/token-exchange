import React from 'react';
import * as S from './styles';
import { useMetaMask } from '@hooks/useMetaMask';
import { StringUtils } from '@common/utils';

const Header = () => {
  const { wallet, hasProvider, isConnecting, connectMetaMask, disconnectWallet } = useMetaMask();

  return (
    <S.SHeader>
      <S.SHeaderIcon>
        <span>Logo</span>
        <span>Home</span>
        <span>Airdrop</span>
      </S.SHeaderIcon>
      <S.SHeaderAction>
        {typeof window?.ethereum?.isMetaMask && wallet.accounts.length < 1 ? (
          <S.SButtonHeaderWallet disabled={isConnecting} onClick={connectMetaMask}>
            Connect Wallet
          </S.SButtonHeaderWallet>
        ) : (
          <button disabled={isConnecting} onClick={disconnectWallet}>
            {StringUtils.compactAdd(wallet?.accounts[0])}
          </button>
        )}
      </S.SHeaderAction>
    </S.SHeader>
  );
};

Header.propTypes = {};

export default Header;
