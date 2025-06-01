import { Link } from "react-router-dom"
export default function Header() {
    return <div>
        <div className="sticky-top" style={{ backgroundColor: "#175692" }}>
            <div>
                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#175692" }}>
                    <div className=" container">
                        <Link className="navbar-brand text-white" to="/">
                            <img src="/images/CSClogo.jpg" alt="logo" style={{ height: "40px", width: "60px" }} />
                        </Link>

                        <div>
                            <h5 className=" d-flex justify-content-center justify-content-md-start mt-2 text-white"
                                style={{ backgroundColor: "#175692", fontSize: "22px", textDecoration: "None" }}>
                                COMPUTER EDUCATION</h5>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Bar">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-start justify-content-md-end" id="Bar"
                            style={{ fontSize: "16px" }}>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white" to="/courses">Courses</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white" to="/gallery">Gallery</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white" to="/review">Reviews</Link></li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        </div >
    </div >

}
