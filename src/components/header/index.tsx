import React from 'react';
import * as S from './styles';


const Header = () => {
  return (
    <S.SHeader>
      <S.SHeaderIcon>
        <span>Logo</span>
        <span>Home</span>
        <span>Airdrop</span>
      </S.SHeaderIcon>
      <S.SHeaderAction>
        <S.SHeaderWallet>Wallet</S.SHeaderWallet>
      </S.SHeaderAction>
    </S.SHeader>
  );
};

Header.propTypes = {};

export default Header;
