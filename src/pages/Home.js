import React from "react";
import { Link } from 'react-router-dom';

export default function Home() {
    return <div style={{
        backgroundImage: `url('/images/cover1.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

        <div className="container" style={{ marginTop: "20px" }}>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/slideimage1.png" className="d-block w-100" alt="image1" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slideimage2.png" className="d-block w-100" alt="image3" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slideimage3.png" className="d-block w-100" alt="image4" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slideimage4.png" className="d-block w-100" alt="image4" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div className="container my-2">
            <div className="card m-2" style={{ maxWidth: "100" }}>
                <div className="row g-0">
                    <div className="col-12 col-md-4">
                        <img src="images/home1.webp" className="img-fluid rounded-start p-4" style={{ borderRadius: "50%" }}
                            alt="logo" />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">About Us</h5>
                            <p>
                                <h5>CSC Computer Education</h5>
                                <p>
                                    At CSC, We are dedicated to providing Top-notch Computer Education and
                                    Training to
                                    help you achieve your goals.
                                    Whether you're a beginner looking to learn the basics or an advanced user aiming to
                                    enhance your
                                    skills</p>
                            </p>
                            <p>Our team of experts is passionate about leveraging cutting-edge technology
                                to create
                                customized solutions tailored
                                to meet your unique needs. With a commitment to quality and customer satisfaction, CSC
                                stands at
                                the forefront of the
                                tech industry, continually pushing boundaries and setting new standards.</p><br />
                            <Link to="/about" className="button">Learn More</Link>
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

        <div style={{ textAlign: "center" }}>
            <div className="container">
                <div className="homecourse">
                    <img src="images/Python.png" alt="Course 1" />
                </div>
                <div className="homecourse">
                    <img src="images/C++.png" alt="Course 2" />
                </div>
                <div className="homecourse">
                    <img src="images/JAVA.png" alt="Course 3" />
                </div>
                <div className="homecourse">
                    <img src="images/HTML.png" alt="Course 4" />
                </div>
                <div className="homecourse">
                    <img src="images/Tally.png" alt="Course 5" />
                </div>
            </div>
            <div className="card-body">
                <div className=" container bg-white p-4">
                    <p className="card-text"
                        style={{ fontFamily: "Segoe UI", fontWeight: "400", fontSize: "17px", textAlign: "left" }}>At CSC, we
                        are
                        offering a diverse range of courses designed to equip you with
                        the skills needed to excel
                        in the tech industry. From introductory courses in programming and web development to advanced
                        training in data science, and
                        artificial intelligence, our curriculum is crafted by industry experts to ensure relevance and
                        excellence. Whether
                        you're a beginner looking to start a career in tech or a professional seeking to enhance your
                        skills, CSC provides
                        the knowledge and hands-on experience to help you succeed.</p>
                    <div>
                        <Link to="/courses" className="button">More Courses...</Link>
                    </div>
                </div><br />
            </div>
        </div>

        <div className="container my-2">
            <div className="card m-2" style={{ maxWidth: "100" }}>
                <div className="row g-0">
                    <div className="col-12 col-md-4">
                        <img src="images/why.webp" className="img-fluid rounded-start p-4"
                            style={{borderRadius: "50%", height: "auto", width: "100%"}} alt="logo" />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Why to choose us ?</h5>
                            <p>Choosing CSC means opting for excellence, innovation, and a commitment to your
                                success.
                                We stand out
                                with our cutting-edge
                                technology solutions, expert faculty, and hands-on learning approach. Our
                                comprehensive
                                courses are
                                designed to meet the
                                evolving demands of the tech industry, ensuring you gain the skills and knowledge
                                that
                                employers
                                value. With CSC, you
                                benefit from personalized support, a vibrant community of learners, and a track
                                record
                                of success
                                stories. Join us and
                                take the next step toward a promising and fulfilling career in technology.</p>
                            <p>CSC provides the best quality education at affordable cost. The CSC also helps by
                                providing
                                scholarships frequently.
                                Nearly 1Lakh Students are trained every year and succesfully running since 1986.
                                Join us
                                to gain
                                more skills and
                                knowledge and start your new journey forwarding to your career.
                            </p>
                            <Link to="/about" className="button">Learn More</Link>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div style={{backgroundColor: "#175692"}}>
                <h2 className=" d-flex justify-content-center m-2 text-white">Educational Partners</h2>
            </div>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Tally India Pvt Ltd</li>
                    <li className="list-group-item">IBT Institute Pvt Ltd(Bank/ SSC/ Railways/ TNPSC Coaching)</li>
                    <li className="list-group-item">Speak Easy English Training (P) Ltd.</li>
                </ul>
            </div>
        </div>

    </div >

}
