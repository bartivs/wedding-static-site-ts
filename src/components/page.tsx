import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { useIsMovil, useWindowSize } from '../helpers';

interface Props {
  children: React.ReactNode;
  principalPage?: boolean;
}

export const Page: React.FC<Props> = (props) => {
  const screenSize = useWindowSize();
  const isMovil = useIsMovil();
  const principal = useState(!!props.principalPage);

  return (
    <main className="w-screen h-screen grid bg-[#f6f8f300]">
      <div id="noise-filter" className="justify-between -z-10" style={{ gridArea: '1/1' }}>
        {!!screenSize?.height && !!screenSize.width && (
          <svg viewBox={`0 0 ${screenSize?.width} ${screenSize?.height}`} xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="1.94" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        )}
      </div>

      {!isMovil && (
        <div className="h-screen w-screen flex flex-col justify-between -z-10" style={{ gridArea: '1/1' }}>
          <div /> <StaticImage src={'../images/flor2.png'} className={'w-64  h-auto self-end'} alt="flores" />
        </div>
      )}
      {isMovil && screenSize && screenSize?.height > 750 && (
        <div className="h-screen w-screen flex flex-col justify-between z-20" style={{ gridArea: '1/1' }}>
          <div className=""></div>
          <div className="pl-4 ">
            <StaticImage src={'../images/flores4.png'} alt="Flores footer" />
          </div>
        </div>
      )}
      <div className="flex flex-col z-50" style={{ gridArea: '1/1' }}>
        {!props.principalPage && (
          <div className="flex items-center justify-center flex-col w-full  h-[30vh]">
            <Link to="/" className="px-4 py-11 rounded-full bg-gray-400 w-auto  m-4 text-white ">
              <h1 className="text-6xl">S | B</h1>
            </Link>
          </div>
        )}
        {props.children}
      </div>
    </main>
  );
};
