import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./merch.css";
import silder1 from "../Team/imageex.jpg";
import silder2 from "../Team/imageex.jpg";
import silder3 from "../Team/imageex.jpg";
import silder4 from "../Team/imageex.jpg";
import ParticleComponent from "../Particle/ParticleComponent";
import Header1 from '../Header/Header';

const cards = [
  silder1,
  silder2,
  silder3,
  silder4,
];

const cardsx = [
    { image: silder1, description: 'Plinth Originals' ,d2: 'T-Shirt'},
    { image: silder1, description: 'Plinth Originals' ,d2: 'T-Shirt'},
    { image: silder1, description: 'Plinth Originals' ,d2: 'T-Shirt'},
    { image: silder1, description: 'Plinth Originals' ,d2: 'T-Shirt'},
  ];

const Card = ({ image, description,d2 }) => (
    <div style={{ width: '300px', margin: '10px', padding: '10px', border: '1px solid #ccc', color:"white" }}>
      <img src={image} alt="Card" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <p>{description}</p>
      <br />
      <p>{d2}</p>
      <button style={{ backgroundColor: '#007BFF', color: '#fff', padding: '5px 10px', border: 'none' }}>
        Buy Now
      </button>
    </div>
  );

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div style={{ position: 'relative', height: '500px', margin: 'auto', marginTop: '5%', width: '98%' }}>
     <div className="Header1"><Header1 /></div>
     <ParticleComponent />
      {/* Left Icon */}
      <button
        style={{ position: 'relative', left: '10px', top: '50%', transform: 'translate(0%, -50%)', zIndex: 2 }}
        onClick={handlePrev}
      >
      </button>
      {/* Right Icon */}
      <button
        style={{ position: 'relative', right: '10px', top: '50%', transform: 'translate(0%, -50%)', zIndex: 2 }}
        onClick={handleNext}
      >
      </button>
      {/* Carousel */}
      <Carousel
        showThumbs={false}
        showStatus={false}
        selectedItem={currentIndex}
        onChange={setCurrentIndex}
      >
        {cards.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} style={{ width: '100%', height: '100%' }} />
          </div>
        ))}
      </Carousel>

<div className='xse'>
      <div style={{ marginLeft:"5%" }}>
      <h1 style={{display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>TSHIRTS</h1>
      <Carousel showThumbs={false} showStatus={false} emulateTouch infiniteLoop centerMode centerSlidePercentage={33.33} useKeyboardArrows>
        {cardsx.map((card, index) => (
          <Card key={index} image={card.image} description={card.description} d2={card.d2}/>
        ))}
      </Carousel>
    </div>
      

    <div style={{ marginLeft:"5%" }}>
    <h1 style={{display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>HOODIES</h1>
      <Carousel showThumbs={false} showStatus={false} emulateTouch infiniteLoop centerMode centerSlidePercentage={33.33} useKeyboardArrows>
        {cardsx.map((card, index) => (
          <Card key={index} image={card.image} description={card.description} d2={card.d2}/>
        ))}
      </Carousel>
    </div>
</div>

    </div>
  );
};

export default CustomCarousel;
