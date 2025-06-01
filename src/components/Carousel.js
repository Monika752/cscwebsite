import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Carousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      const bootstrap = require("bootstrap");
      new bootstrap.Carousel(carouselRef.current, {
        interval: 3000,
        ride: "carousel",
      });
    }
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      ref={carouselRef}
      style={{
        width: "100%",
        height: "400px", 
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="carousel-inner" style={{ height: "100%" }}>
        {["cover1.webp", "cover2.webp", "cover3.webp"].map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{ height: "100%" }}
          >
            <img
              loading="eager"
              src={`/images/${img}`}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%", 
              }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
