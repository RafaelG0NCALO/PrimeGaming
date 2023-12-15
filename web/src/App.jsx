import React, { useState, useEffect } from 'react';
import Section01 from './components/section01';
import Section02 from './components/Section02';
import SectionMobile01 from './components/SectionMobile01';
import SectionMobile02 from './components/SectionMobile02';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-[#0B0418] h-full min-h-screen w-full'>
      <div>
        {windowWidth <= 900 ? (
          <>
          <SectionMobile01 />
          <SectionMobile02 />
          </>
        ) : (<>
          <Section01 />
          <Section02 />
          </>
        )}
      </div>
     
    </div>
  );
};

export default App;
