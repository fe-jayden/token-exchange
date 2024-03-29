import { detectEthereumProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: detectEthereumProvider;
  }
}
