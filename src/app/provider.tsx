import { MuiConfigRegistry } from '../libs/config';
import RootClientComponent from './client';

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiConfigRegistry options={{ key: 'mui' }}>
      <RootClientComponent>{children}</RootClientComponent>
    </MuiConfigRegistry>
  );
}
