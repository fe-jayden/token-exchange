'use client';
import RootProvider from './provider';
import '../styles/libs/index.scss';
import { useEffect } from 'react';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const body = document.querySelector('body');
    const mouse = document.getElementById('effectMouse');

    const handleMouseMove = (e: any) => {
      let scale = 1;

      // if (e.target.classList.contains('effect')) {
      //   scale = 3;
      // }

      if (mouse && mouse.style) {
        mouse.style.transform = `
            translateX(${e.clientX}px) 
            translateY(${e.clientY}px)
            scale(${scale})
        `;
      }
    };

    const handleMouseOut = (e: any) => {
      if (mouse && mouse.style) {
        mouse.style.transform = `
            translateX(${e.clientX}px) 
            translateY(${e.clientY}px)
            scale(0)
        `;
      }
    };

    if (body) {
      body.addEventListener('mousemove', handleMouseMove);
      body.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (body) {
        body.removeEventListener('mousemove', handleMouseMove);
        body.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);
  return (
    <html lang='en'>
      <body>
        <div id='effectMouse'></div>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
