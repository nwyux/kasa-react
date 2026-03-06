import { useState } from 'react';
import './Carousel.scss';

interface CarouselProps {
  pictures: string[];
}

function Carousel({ pictures }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  // Si une seule image, pas de navigation
  if (pictures.length === 1) {
    return (
      <div className="carousel">
        <img src={pictures[0]} alt="" className="carousel__image" />
      </div>
    );
  }

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--prev" onClick={prevSlide}>
        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
        </svg>
      </button>
      <img src={pictures[currentIndex]} alt="" className="carousel__image" />
      <button className="carousel__button carousel__button--next" onClick={nextSlide}>
        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
        </svg>
      </button>
      <span className="carousel__counter">
        {currentIndex + 1}/{pictures.length}
      </span>
    </div>
  );
}

export default Carousel;
