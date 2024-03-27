'use client';
import Header from '@components/header';
import * as S from './styles';
export default function RootClientComponent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
