import React, { useEffect, useLayoutEffect, useState } from 'react';

interface size {
  width: number;
  height: number;
}
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<size>();
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    //

    if (window !== undefined) {
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
    // Call handler right away so state gets updated with initial window size
    // Remove event listener on cleanup
    return () => null;
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export function useIsMovil() {
  const [isMovil, setIsMovil] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMovil(window.innerWidth < 768);
    };

    if (window !== undefined) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    return () => null;
  }, []);

  return isMovil;
}
