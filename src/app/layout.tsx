'use client';
import RootProvider from './provider';
import '../styles/libs/index.scss';
import { useEffect } from 'react';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const body = document.querySelector('body');
    const mouse = document.getElementById('effectMouse');
    const container = document.getElementById('container');
    const count = 5;
    const timeoutID = setInterval(function () {
      for (let i = 0; i < count; i++) {
        const leftStar = Math.floor(Math.random() * (container?.clientHeight || 0));
        const bottomStar = Math.floor(Math.random() * (container?.clientWidth || 0));
        const sizeStar = Math.floor(Math.random() * 50);
        const timeStar = Math.floor(Math.random() * 5 + 1);
        console.log(timeStar);

        let div = document.createElement('div');

        div.classList.add('star');
        div.style.left = bottomStar + 'px';
        div.style.bottom = leftStar + 'px';
        div.style.width = sizeStar + 'px';
        div.style.height = sizeStar + 'px';
        div.style.animationDuration = timeStar + 's';
        container?.appendChild(div);
      }
    }, 4000);

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
      clearInterval(timeoutID);
    };
  }, []);
  return (
    <html lang='en'>
      <body>
        <div id='effectMouse'></div>
        <div id='container'>
          <div className='star'></div>
        </div>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
