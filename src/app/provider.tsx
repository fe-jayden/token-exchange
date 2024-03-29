import { MetaMaskContextProvider } from '@hooks/useMetaMask';
import { MuiConfigRegistry } from '../libs/config';
import RootClientComponent from './client';

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiConfigRegistry options={{ key: 'mui' }}>
      <MetaMaskContextProvider>
        <RootClientComponent>{children}</RootClientComponent>
      </MetaMaskContextProvider>
    </MuiConfigRegistry>
  );
}
