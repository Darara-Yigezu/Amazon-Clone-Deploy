import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { images } from './images/data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classes from './carousel.module.css';

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {images?.map((imgItemLink) => (
          <img key={imgItemLink} 
          src={imgItemLink} alt="carousel-image" />
        ))}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
};

export default CarouselEffect;
