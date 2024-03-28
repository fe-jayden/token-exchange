import RootProvider from './provider';
import '../styles/libs/index.scss'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
