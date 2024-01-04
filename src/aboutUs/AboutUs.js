import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import './AboutUs.css';
import image1 from './assets/image 3.png';
import image2 from './assets/IMG_0285.png';
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
          initial={{ opacity: 0, x: 300 }}
          animate={contentInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
        >
          <div className='text'>
            <h1 className='content-text1'>The LNMIIT's annual Tech-Fest,</h1>
            <p className='content-text2'>is a three-day event that will explore artificial intelligence and big data. This three-day event will awaken your curiosity and push your intellectual boundaries, with a series of stimulating competitions, mind-bending workshops, and encounters with renowned experts.</p>
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
          initial={{ opacity: 0, x: -200 }}
          animate={content2InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }} className='text2'>
            <h1 className='content2-text1'>INDUSTRY 5.0,</h1>
            <p className='content2-text2'>Get ready for three days that crackle with excitement as we delve into the revolutionizing world of Industry 5.0. This isn't just a tech fest; it's a portal to the cutting edge, where students from across the nation converge to witness, compete, and ignite their minds in the face of transformative technologies. Through captivating workshops and interactive sessions, you'll gain hands-on experience with cutting-edge technologies and unravel the limitless possibilities of transformative fields.</p>
          </motion.div>
         
      </div>

      {/* Content 3 */}
      <div className='content3' ref={content3Ref}>
        <motion.div
          ref={content3InViewRef}
          initial={{ opacity: 0, x: 300 }}
          animate={content3InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
        >
          <div className='text3'>
            <h1 className='content3-text1'>A COGNITIO CASCADE,</h1>
            <p className='content3-text2'>Plinth 2024 promises to be an unforgettable immersion, a harmonious symphony of science, innovation, and intellectual exploration. Join us as we embark on a mission to rekindle the tech-enthusiasm of our youth. Plinth 2024 is your gateway to the future of technology, where technology is revolutionising the way we live, work, and interact with the world around us. From January 19th to 21st, 2024, we invite you to step into this future with us!</p>
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
