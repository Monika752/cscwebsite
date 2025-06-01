import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Carousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      // Dynamically import Bootstrap to ensure it's available after the component mounts
      // This is generally fine for components that are always rendered on page load.
      const bootstrap = require("bootstrap");
      new bootstrap.Carousel(carouselRef.current, {
        interval: 3000,
        ride: "carousel",
      });
    }
  }, []);

  const carouselImages = ["cover1.webp", "cover2.webp", "cover3.webp"];

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      ref={carouselRef}
      style={{
        aspectRatio: "16 / 9",
        width: "100%",
        maxHeight: "500px",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <div className="carousel-inner" style={{ height: "100%" }}>
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{ height: "100%" }}
          >
            {/* Corrected image source and added lazy loading */}
            <img
              src={`/images/${img}`}
              alt={`Slide ${index + 1}`}
              width="1200" // Maintain original width for aspect ratio calculation
              height="675" // Maintain original height for aspect ratio calculation
              loading={index === 0 ? "eager" : "lazy"} // Load the first image eagerly, others lazily
              style={{
                width: "100%",
                height: "auto", // Set height to auto to maintain aspect ratio
                objectFit: "cover",
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
