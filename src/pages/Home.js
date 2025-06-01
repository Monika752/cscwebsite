import React, { memo, useEffect, useCallback } from "react";
import { lazy, Suspense } from "react";
import { Carousel as BootstrapCarousel } from "bootstrap"; 
import Carousel from "../components/Carousel"; 


export default function Home() {
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  useEffect(() => {
    const carouselElement = document.querySelector("#carouselExampleIndicators");
    if (carouselElement) {
      new BootstrapCarousel(carouselElement, {
        interval: 3000,
        ride: "carousel",
      });
    }
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url('/images/cover1.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="container my-2 containertrans">
          <div className="card m-2 cardtrans" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  loading="lazy"
                  src="/images/home1.webp"
                  className="img-fluid rounded-start p-4"
                  style={{ borderRadius: "50%" }}
                  alt="logo"
                  width="250"
                  height="250"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">About Us</h5>
                  <p>CSC Computer Education provides top-notch training in technology and programming.</p>
                  <button onClick={handleClick} className="button">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="container">
          <div style={{ backgroundColor: "#175692" }}>
            <h2 className="text-center text-white p-2">Courses We Offer</h2>
          </div>
        </div>

        <div className="containertrans text-center">
          <div className="container cardtrans d-flex justify-content-center flex-wrap gap-3">
            {["Python", "C++", "JAVA", "HTML", "Tally"].map((course, index) => (
              <div key={index} className="homecourse">
                <img
                  loading="lazy"
                  src={`/images/${course}.webp`}
                  alt={`Course ${index + 1}`}
                  width="200"
                  height="200"
                />
              </div>
            ))}
          </div>
          <div className="card-body">
            <p>CSC provides programming and tech courses to help you excel.</p>
            <a href="courses.html" className="button">
              More Courses...
            </a>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="container my-2 containertrans">
          <div className="card m-2 cardtrans" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  loading="lazy"
                  src="/images/why.webp"
                  className="img-fluid rounded-start p-4"
                  style={{ borderRadius: "50%", width: "100%" }}
                  alt="why choose us"
                  width="250"
                  height="250"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Why Choose Us?</h5>
                  <p>Choosing CSC gives you access to expert faculty and industry-leading courses.</p>
                  <a href="about.html" className="button">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Partners */}
        <div className="container">
          <div style={{ backgroundColor: "#175692" }}>
            <h2 className="text-center text-white p-2">Educational Partners</h2>
          </div>
          <div className="card containertrans">
            <ul className="list-group list-group-flush cardtrans">
              {["Tally India Pvt Ltd", "IBT Institute Pvt Ltd", "Speak Easy English Training Pvt Ltd"].map(
                (partner, index) => (
                  <li key={index} className="list-group-item">
                    {partner}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
