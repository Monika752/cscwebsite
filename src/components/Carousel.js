import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
  const carouselStyle = {
    minHeight: '400px',
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    aspectRatio: '2 / 1',
    display: 'block',
  };

  const iconStyle = {
    width: '2rem',
    height: '2rem',
    backgroundSize: '100% 100%',
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={carouselStyle}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/slide1.webp"
            width="800"
            height="400"
            className="d-block w-100"
            alt="Slide 1"
            style={imageStyle}
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slide2.webp"
            width="800"
            height="400"
            className="d-block w-100"
            alt="Slide 2"
            style={imageStyle}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={iconStyle}
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={iconStyle}
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
