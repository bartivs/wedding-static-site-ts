import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useIsMovil, useWindowSize } from '../helpers';

interface Props {
  children: React.ReactNode;
}

export const Page: React.FC<Props> = (props) => {
  const screenSize = useWindowSize();
  const isMovil = useIsMovil();

  return (
    <main className="w-screen h-screen">
      <div className="relative w-screen h-screen">
        <div className="absolute h-full w-full flex justify-center flex-col z-50">
          {props.children}
          {isMovil && <div className="pl-4"></div>}
        </div>
        <div id="noise-filter" className="absolute top-0 h-screen w-screen flex flex-col justify-between -z-10">
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
          <div className="absolute top-0 h-screen w-screen flex flex-col justify-between -z-10">
            <StaticImage src={'../images/flor1.png'} className={'w-80 h-auto z-10'} alt="flores" />
            <StaticImage src={'../images/flor2.png'} className={'w-60  h-auto self-end'} alt="flores" />
          </div>
        )}
        {isMovil && (
          <div className="absolute top-0 h-screen w-screen flex flex-col justify-between z-20">
            <div className="pr-4 ">
              <StaticImage className="rotate-180 " src={'../images/flores4.png'} alt="Flores footer" />
            </div>
            <div className="pl-4 ">
              <StaticImage src={'../images/flores4.png'} alt="Flores footer" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
