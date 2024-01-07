import React, { useState, useEffect } from 'react';
import preloaderGif from './preloader.gif'; // Replace 'preloader.gif' with the path to your GIF
import preCss from './preloader.module.css';
const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (you can replace this with actual data loading)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: loading ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'black', zIndex: 9999 }}>
      <img className={preCss.image} src={preloaderGif} alt="Loading..."  />
    </div>
  );
};

export default Preloader;