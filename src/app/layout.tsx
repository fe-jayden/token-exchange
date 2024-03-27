'use client';
import Header from '@components/header';
import RootProvider from './provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
