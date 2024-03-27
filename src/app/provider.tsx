import { MuiConfigRegistry } from '../libs/config';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
export default function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiConfigRegistry options={{ key: 'mui' }}>
        <body className={inter.className}>{children}</body>
    </MuiConfigRegistry>
  );
}
