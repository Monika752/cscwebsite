import { Link } from "react-router-dom"

export default function ContactUs() {
    return <div style={{ 
    backgroundImage: `url('/images/cover.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>

        <div className="container">
            <div style={{ backgroundColor: "#175692" }}>
                <h2 className=" d-flex justify-content-center m-2 text-white">Contact Us</h2>
            </div>
        </div>

        <div className="containertrans"style={{ textAlign: "center" }}>
            <div className="courses-container">
                <div class="course">
                    <img src="images/Python.png" alt="Course 1" />
                </div>
                <div className="course">
                    <img src="images/C++.png" alt="Course 2" />
                </div>
                <div className="course">
                    <img src="images/JAVA.png" alt="Course 3" />
                </div>
                <div className="course">
                    <img src="images/HTML.png" alt="Course 4" />
                </div>
                <div className="course">
                    <img src="images/Tally.png" alt="Course 5" />
                </div>
            </div>
            <h2 style={{ textAlign: "center" }}>
                <Link to="/courses" className="button">Find more courses</Link>
            </h2>

            <br /><br />
        </div><br/>

        <div className="container p-3 containertrans" style={{ backgroundColor: "aliceblue" }}>
            <h2> &nbsp;<u>Contact-info</u></h2><br />
            <div style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "20px" }}>
                <p><strong> Email id:</strong> cscperungudiomr@gmail.com</p>
                <p style={{ display: "inline", color: "rgb(61, 8, 61)" }}><b>For more details</b></p>
                <a href="mailto:cscperungudiomr@gmail.com? subject=Hello%20again" class="button">Mail-us</a><br /><br />
                <p style={{ fontSize: "25px", color: "rgb(61, 8, 61)" }}><b><u>Address:</u></b></p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 justify-content-md-start">
                        <p style={{ backgroundColor: "#175692", color: "white" }}><b><u>Perungudi Branch:</u></b></p>
                        <p>No.105, OMR Perungudi (Near SBI bank, above Surabi electronics),<br />
                            Perungudi, chennai-600096.</p>
                        <p><strong> Mobile No:</strong> 95141 14455, 94441 54915</p>
                        <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
                            <iframe
                                src="https://www.google.com/maps/embed/v1/place?q=csc+education+perungudi+chennai&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                title="CSC Computer Education Perungudi Map"
                                width="100%"
                                height="100%"
                                style={{ border: "none" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div><br />
                    <div class="col-12 col-md-6 justify-content-md-end">
                        <p style={{ backgroundColor: "#175692", color: "white" }}><b><u>Thiruporur Branch:</u></b></p>
                        <p>No. 30, Old Mahabalipuram Road, Opp.Thirukkulam,<br />
                            Thiruporur-603110.</p>
                        <p><strong> Mobile No:</strong> 8015621029</p>
                        <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.832583924244!2d80.18486047356338!3d12.724342420254073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52579f232f323b%3A0x2e2eccbffcafc311!2sCSC%20computer%20education%20Thirupporur!5e0!3m2!1sen!2sus!4v1723897829841!5m2!1sen!2sus"
                                title="CSC Computer Education Map"
                                width="100%"
                                height="100%"
                                style={{ border: "none" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    </div>
}
