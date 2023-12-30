import React, { useState, useEffect } from 'react';
import preloaderGif from './preloader.mp4'; // Replace 'preloader.gif' with the path to your GIF

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (you can replace this with actual data loading)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: loading ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'black', zIndex: 9999 }}>
      {/* Use an img tag with the preloader GIF */}
      <img src={preloaderGif} alt="Loading..." style={{ width: '50px', height: '50px' }} />
    </div>
  );
};

export default Preloader;