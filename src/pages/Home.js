import React, { memo } from "react";
import { lazy, Suspense } from "react";

// Lazy load components
const Carousel = lazy(() => import("./Carousel"));

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url('/images/cover1.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Lazy-loaded Carousel */}
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel />
      </Suspense>

      {/* Main container */}
      <div className="container containertrans" style={{ marginTop: "15px" }}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {[...Array(4)].map((_, index) => (
              <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>
            ))}
          </div>
          <div className="carousel-inner">
            {["slideimage1", "slideimage2", "slideimage3", "slideimage4"].map((img, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img loading="lazy" src={`/images/${img}.webp`} className="d-block w-100" alt={`image${index}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container my-2 containertrans">
        <div className="card m-2 cardtrans" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img loading="lazy" src="/images/home1.webp" className="img-fluid rounded-start p-4" style={{ borderRadius: "50%" }} alt="logo" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <p>
                  <strong>CSC Computer Education</strong> provides top-notch training in technology and programming.
                  Whether you're a beginner or an advanced user, CSC is committed to enhancing your skills.
                </p>
                <a href="about.html" className="button">Learn More</a>
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
        <div className="container cardtrans">
          {["Python", "C++", "JAVA", "HTML", "Tally"].map((course, index) => (
            <div key={index} className="homecourse">
              <img loading="lazy" src={`/images/${course}.webp`} alt={`Course ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="card-body">
          <p>CSC provides a range of programming and tech courses to help you excel in your career.</p>
          <a href="courses.html" className="button">More Courses...</a>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container my-2 containertrans">
        <div className="card m-2 cardtrans" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img loading="lazy" src="/images/why.webp" className="img-fluid rounded-start p-4" style={{ borderRadius: "50%", width: "100%" }} alt="why choose us" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Why Choose Us?</h5>
                <p>Choosing CSC means access to expert faculty, modern tech solutions, and industry-leading courses.</p>
                <a href="about.html" className="button">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Partners Section */}
      <div className="container">
        <div style={{ backgroundColor: "#175692" }}>
          <h2 className="text-center text-white p-2">Educational Partners</h2>
        </div>
        <div className="card containertrans">
          <ul className="list-group list-group-flush cardtrans">
            {["Tally India Pvt Ltd", "IBT Institute Pvt Ltd", "Speak Easy English Training Pvt Ltd"].map((partner, index) => (
              <li key={index} className="list-group-item">{partner}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
