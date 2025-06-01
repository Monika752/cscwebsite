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
        aspectRatio: "16 / 9",
        width: "100%",
        maxHeight: "500px",
        overflow: "hidden",
        backgroundColor: "#000", 
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
              src="/images/cover1.webp"
              alt="..."
              width="1200"
              height="675"
              style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover"
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
