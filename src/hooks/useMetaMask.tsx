'use client';
import { useState, useEffect, createContext, PropsWithChildren, useContext, useCallback } from 'react';

import detectEthereumProvider from '@metamask/detect-provider';
import { formatBalance } from '@common/utils';

interface WalletState {
  accounts: any[];
  balance: string;
  chainId: string;
}

interface MetaMaskContextData {
  wallet: WalletState;
  hasProvider: boolean | null;
  error: boolean;
  errorMessage: string;
  isConnecting: boolean;
  connectMetaMask: () => void;
  disconnectWallet: () => void;
  clearError: () => void;
}

const disconnectedState: WalletState = {
  accounts: [],
  balance: '',
  chainId: '',
};

const MetaMaskContext = createContext<MetaMaskContextData>({} as MetaMaskContextData);

export const MetaMaskContextProvider = ({ children }: PropsWithChildren) => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);

  const [isConnecting, setIsConnecting] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const clearError = () => setErrorMessage('');

  const [wallet, setWallet] = useState(disconnectedState);

  const _updateWallet = useCallback(async (providedAccounts?: any) => {
    const accounts = providedAccounts || (await window.ethereum.request({ method: 'eth_accounts' }));
    if (accounts.length === 0) {
      setWallet(disconnectedState);
      return;
    }

    const balance = formatBalance(
      await window.ethereum.request({
        method: 'eth_getBalance',
        params: [accounts[0], 'latest'],
      })
    );

    const chainId = await window.ethereum.request({
      method: 'eth_chainId',
    });

    setWallet({ accounts, balance, chainId });
  }, []);

  const updateWalletAndAccounts = useCallback(() => _updateWallet(), [_updateWallet]);
  const updateWallet = useCallback((accounts: any) => _updateWallet(accounts), [_updateWallet]);

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));

      if (provider) {
        updateWalletAndAccounts();
        window.ethereum.on('accountsChanged', updateWallet);
        window.ethereum.on('chainChanged', updateWalletAndAccounts);
      }
    };

    getProvider();

    return () => {
      window.ethereum?.removeListener('accountsChanged', updateWallet);
      window.ethereum?.removeListener('chainChanged', updateWalletAndAccounts);
    };
  }, [updateWallet, updateWalletAndAccounts]);

  const connectMetaMask = async () => {
    setIsConnecting(true);

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log('accounts', accounts);

      clearError();
      updateWallet(accounts);
    } catch (err: any) {
      setErrorMessage(err.message);
    }
    setIsConnecting(false);
  };
  const disconnectWallet = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    setWallet(disconnectedState);
    await window.ethereum.request({
      method: 'wallet_revokePermissions',
      params: [
        {
          eth_accounts: { accounts },
        },
      ],
    });
  };

  return (
    <MetaMaskContext.Provider
      value={{
        wallet,
        hasProvider,
        error: !!errorMessage,
        errorMessage,
        isConnecting,
        disconnectWallet,
        connectMetaMask,
        clearError,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};

export const useMetaMask = () => {
  const context = useContext(MetaMaskContext);
  if (context === undefined) {
    throw new Error('useMetaMask must be used within a MetaMaskContextProvider');
  }
  return context;
};
