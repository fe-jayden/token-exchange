import React from 'react';
import * as S from './styles';
import { useMetaMask } from '@hooks/useMetaMask';
import { StringUtils } from '@common/utils';

const Header = () => {
  const { wallet, isConnecting, connectMetaMask, disconnectWallet } = useMetaMask();

  return (
    <S.SHeader>
      <S.SHeaderIcon>
        <span>Logo</span>
        <span>Home</span>
        <span>Airdrop</span>
      </S.SHeaderIcon>
      <S.SHeaderAction>
        {typeof window !== 'undefined' && window?.ethereum?.isMetaMask && wallet?.accounts.length < 1 ? (
          <S.SButtonHeaderWallet disabled={isConnecting} onClick={connectMetaMask}>
            Connect Wallet
          </S.SButtonHeaderWallet>
        ) : (
          <S.SButtonHeaderWallet disabled={isConnecting} onClick={disconnectWallet}>
            {StringUtils.compactAdd(wallet?.accounts[0])}
          </S.SButtonHeaderWallet>
        )}
      </S.SHeaderAction>
    </S.SHeader>
  );
};

Header.propTypes = {};

export default Header;
