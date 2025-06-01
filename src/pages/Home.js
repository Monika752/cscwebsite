import React, { useEffect } from "react";
// You might need to import Bootstrap's JS here if `data-bs-ride` alone isn't sufficient
// import { Carousel as BootstrapCarousel } from "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css"; // Ensure your Bootstrap CSS is loaded globally or here

export default function Home() {
  // If you find that the carousel isn't auto-initializing with data-bs-ride="carousel",
  // you might need this useEffect. Otherwise, you can remove it.
  useEffect(() => {
    // If you are relying on data-bs-ride="carousel", you likely don't need this.
    // If you do, uncomment the import above and this block:
    /*
    const carouselElement = document.querySelector("#carouselExampleIndicators");
    if (carouselElement) {
      // Ensure Bootstrap is available globally or imported as BootstrapCarousel
      // You might need to import BootstrapCarousel from "bootstrap" at the top
      new BootstrapCarousel(carouselElement, {
        interval: 3000,
        ride: "carousel",
      });
    }
    */
  }, []); // Empty dependency array means it runs once after initial render

  return (
    <div
      style={{
        backgroundImage: `url('/images/cover1.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container containertrans" style={{ marginTop: "15px" }}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {/* Using a map for indicators for cleaner code */}
            {["0", "1", "2", "3"].map((index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === "0" ? "active" : ""}
                aria-current={index === "0" ? "true" : undefined} // Add aria-current for accessibility
                aria-label={`Slide ${parseInt(index) + 1}`} // Add aria-label for accessibility
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {/* Map over an array of image paths for the carousel items */}
            {[
              "slideimage1.webp",
              "slideimage2.webp",
              "slideimage3.webp",
              "slideimage4.webp",
            ].map((imgSrc, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={`images/${imgSrc}`}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                  width="1200" // Replace with actual image width
                  height="675" // Replace with actual image height
                  loading={index === 0 ? "eager" : "lazy"} // Load first image eagerly, others lazily
                  style={{ objectFit: "cover" }} // Ensure consistent image scaling
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
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container my-2 containertrans">
        <div className="card m-2 cardtrans" style={{ maxWidth: "100%" /* Corrected from "100" */ }}>
          <div className="row g-0">
            <div className="col-12 col-md-4">
              <img
                src="images/home1.webp"
                className="img-fluid rounded-start p-4"
                style={{ borderRadius: "50%" }}
                alt="logo"
                width="250" // Add width for CLS prevention
                height="250" // Add height for CLS prevention
                loading="lazy" // Lazy load
              />
            </div>
            <div className="col-12 col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ textDecoration: "None" }}>
                  About Us
                </h5>
                <p>
                  <h5 style={{ textDecoration: "None" }}>CSC Computer Education</h5>
                  <p>
                    At CSC, We are dedicated to providing Top-notch Computer Education and Training to
                    help you achieve your goals. Whether you're a beginner looking to learn the basics or an advanced user aiming to
                    enhance your skills
                  </p>
                </p>
                <p>
                  Our team of experts is passionate about leveraging cutting-edge technology to create
                  customized solutions tailored to meet your unique needs. With a commitment to quality and customer satisfaction, CSC
                  stands at the forefront of the
                  tech industry, continually pushing boundaries and setting new standards.
                </p>
                <br />
                <a href="about.html" className="button">
                  Learn More
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ backgroundColor: "#175692" }}>
          <h2 className=" d-flex justify-content-center m-2 text-white">Courses we are offering..</h2>
        </div>
      </div>

      <div className="containertrans" style={{ textAlign: "center" }}>
        <div className="container cardtrans d-flex justify-content-center flex-wrap gap-3"> {/* Added flex-wrap and gap for better layout */}
          {/* Use map for course images for cleaner code and consistency */}
          {["Python", "C++", "JAVA", "HTML", "Tally"].map((course, index) => (
            <div key={index} className="homecourse">
              <img
                src={`images/${course}.png`} // Assuming .png for these based on your code
                alt={`Course ${course}`}
                width="200" // Add width for CLS prevention
                height="200" // Add height for CLS prevention
                loading="lazy" // Lazy load
              />
            </div>
          ))}
        </div>
        <div className="card-body">
          <div className=" container p-4 containertrans">
            <p
              className="card-text cardtrans"
              style={{ fontFamily: "Segoe UI", fontWeight: "400", fontSize: "17px", textAlign: "left" }}
            >
              At CSC, we are offering a diverse range of courses designed to equip you with the skills needed to excel
              in the tech industry. From introductory courses in programming and web development to advanced
              training in data science, and artificial intelligence, our curriculum is crafted by industry experts to ensure relevance and
              excellence. Whether you're a beginner looking to start a career in tech or a professional seeking to enhance your
              skills, CSC provides the knowledge and hands-on experience to help you succeed.
            </p>
            <div>
              <a href="courses.html" className="button">
                More Courses...
              </a>
            </div>
          </div>
          <br />
        </div>
      </div>

      <div className="container my-2 containertrans">
        <div className="card m-2 cardtrans" style={{ maxWidth: "100%" /* Corrected from "100" */ }}>
          <div className="row g-0">
            <div className="col-12 col-md-4">
              <img
                src="images/why.webp"
                className="img-fluid rounded-start p-4"
                style={{ borderRadius: "50%", height: "auto", width: "100%" }}
                alt="why choose us"
                width="250" // Add width for CLS prevention
                height="250" // Add height for CLS prevention
                loading="lazy" // Lazy load
              />
            </div>
            <div className="col-12 col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ textDecoration: "None" }}>
                  Why to choose us ?
                </h5>
                <p>
                  Choosing CSC means opting for excellence, innovation, and a commitment to your success.
                  We stand out with our cutting-edge technology solutions, expert faculty, and hands-on learning approach. Our
                  comprehensive courses are designed to meet the evolving demands of the tech industry, ensuring you gain the skills and knowledge that
                  employers value. With CSC, you benefit from personalized support, a vibrant community of learners, and a track record
                  of success stories. Join us and take the next step toward a promising and fulfilling career in technology.
                </p>
                <p>
                  CSC provides the best quality education at affordable cost. The CSC also helps by providing
                  scholarships frequently. Nearly 1Lakh Students are trained every year and succesfully running since 1986.
                  Join us to gain more skills and knowledge and start your new journey forwarding to your career.
                </p>
                <a href="about.html" className="button">
                  Learn More
                </a>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ backgroundColor: "#175692" }}>
          <h2 className=" d-flex justify-content-center m-2 text-white">Educational Partners</h2>
        </div>
        <div className="card containertrans">
          <ul className="list-group list-group-flush cardtrans">
            {/* Using a map for educational partners for cleaner code */}
            {[
              "Tally India Pvt Ltd",
              "IBT Institute Pvt Ltd(Bank/ SSC/ Railways/ TNPSC Coaching)",
              "Speak Easy English Training (P) Ltd.",
            ].map((partner, index) => (
              <li key={index} className="list-group-item">
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
