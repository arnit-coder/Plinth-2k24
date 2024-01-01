import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import './AboutUs.css';
import image1 from './assets/image 3.png';
import image2 from './assets/image_4-removebg-preview 1.png';
import image3 from './assets/image_42-removebg-preview 1.png';
import ArrowPic from "../home/arrow.png";

const AboutUs = () => {
  const contentRef = useRef();
  const content2Ref = useRef();
  const content3Ref = useRef();

  // Use inView hook for each section
  const [contentInViewRef, contentInView] = useInView({ triggerOnce: true });
  const [content2InViewRef, content2InView] = useInView({ triggerOnce: true });
  const [content3InViewRef, content3InView] = useInView({ triggerOnce: true });

  // UseAnimation hook to control animations
  const contentControls = useAnimation();
  const content2Controls = useAnimation();
  const content3Controls = useAnimation();

  useEffect(() => {
    // Start animations once the component has mounted
    contentControls.start({ opacity: 1, x: 0 });
    content2Controls.start({ opacity: 1, x: 0 });
    content3Controls.start({ opacity: 1, x: 0 });
  }, []); // Empty dependency array ensures the effect runs once after mount

  // Handle animations when in view
  useEffect(() => {
    if (contentInView) {
      contentControls.start({ opacity: 1, x: 0 });
    }
  }, [contentInView, contentControls]);

  useEffect(() => {
    if (content2InView) {
      content2Controls.start({ opacity: 1, x: 0 });
    }
  }, [content2InView, content2Controls]);

  useEffect(() => {
    if (content3InView) {
      content3Controls.start({ opacity: 1, x: 0 });
    }
  }, [content3InView, content3Controls]);
  return (
    <div id='aboutUs' className='about'>
    <div style={{display:"flex",justifyContent:"center",marginTop:"5px",rotate:"180deg"}}><Link to='/'> <button className='downButton' >
          <img className='arrow' src={ArrowPic} />
         </button></Link> </div>
      <h1 className='topHeading'>WHO WE ARE?</h1>

      {/* Content 1 */}
      <div className='content' ref={contentRef}>
        <motion.div
          ref={contentInViewRef}
          initial={{ opacity: 0, x: 400 }}
          animate={contentInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
        >
          <div className='text'>
            <h1 className='content-text1'>WE CRAFT VIRTUAL <br />REALMS OF <br /> INNOVATION...</h1>
            <p className='content-text2'>Plinth, the annual Tech-Fest of The LNMIIT,<br /> Jaipur, India's first Web3 based College Tech fest.</p>
          </div>
        </motion.div>
        
        <motion.div
      initial={{ opacity: 0 }}
      animate={contentInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
      className='content-image'
    >
          <img src={image1} className='image1' alt='content1' />
        </motion.div>
      </div>

      {/* Content 2 */}
      <div className='content2' ref={content2Ref}>
      <motion.div
      initial={{ opacity: 0 }}
      animate={content2InView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
      className='content2-image'
    >
          <img src={image2} className='image2' alt='content2' />
        </motion.div>
  

          <motion.div ref={content2InViewRef}
          initial={{ opacity: 0, x: -400 }}
          animate={content2InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }} className='text2'>
            <h1 className='content2-text1'>CONTENT TEAM<br /> WILL GIVE CONTENT OF MAYBE 2 LINES OR SHAYAD 3.</h1>
            <p className='content2-text2'>Plinth, the annual Tech-Fest of The LNMIIT,<br /> Jaipur, India's first Web3 based College Tech fest.</p>
          </motion.div>
         
      </div>

      {/* Content 3 */}
      <div className='content3' ref={content3Ref}>
        <motion.div
          ref={content3InViewRef}
          initial={{ opacity: 0, x: 400 }}
          animate={content3InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
        >
          <div className='text3'>
            <h1 className='content3-text1'>WE CRAFT VIRTUAL <br />REALMS OF <br /> INNOVATION...</h1>
            <p className='content3-text2'>Plinth, the annual Tech-Fest of The LNMIIT,<br /> Jaipur, India's first Web3 based College Tech fest.</p>
          </div>
        </motion.div>
        <motion.div
      initial={{ opacity: 0 }}
      animate={content3InView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
      className='content3-image'
    >
      <img src={image3} className='image3' alt='content3' />
    </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
