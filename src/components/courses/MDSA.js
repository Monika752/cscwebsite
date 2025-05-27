export default function MDSA() {
    return <div style={{ backgroundColor: "lightgray" }}>
        {/* <!--heading--> */}
        <div className="container">
            <div style={{ backgroundColor: "#175692" }}>
                <h3 className=" d-flex justify-content-center m-2 text-white">MDSA - Master Diploma in system Administration
                </h3>
            </div>
        </div>
        {/* <!--objective--> */}
        <div className="container my-2">
            <div className="card m-2" style={{ maxWidth: "100" }}>
                <div className="row g-0">
                    <div className="col-12 col-md-4">
                        <img src="/images/MDSA.png" className="img-fluid rounded-start p-4" alt="logo" />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="card-body">
                            <p className="card-title">
                                <h4 style={{ color: "rgb(39, 39, 182)", textDecoration: "underline" }}>OBJECTIVE</h4>
                            </p>
                            <p>Upon completion of this course one can obtain confidently international certification like A+, N+.
                                Immediately after finishing this course you can be mastered with Hardware & System Administration in Networking
                            </p>
                            <p>
                                <h5>COURSE DURATION: 4 Months</h5>
                            </p>
                            <p>
                                <p><b>TARGET AUDIENCE:</b> Candidates with minimum 10th, Diploma, Degree in Engineering, MCA/BCA or any software professional
                                    or Technician in electronics.</p>
                                <p><b>PREREQUISITES:</b> No prior computer knowledge is required.</p>
                                <p><b>OVERVIEW:</b> Hardware & Networking Course is taught from scratch to subject in detail</p>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--course coverage--> */}
        <div className="container">
            <div style={{ backgroundColor: "#175692" }}>
                <h2 className=" d-flex justify-content-center m-2 text-white">Course Coverage</h2>
            </div>
        </div>
        {/* <!--syllabus--> */}
        <div className="container bg-light p-4">
            <h5>HARDWARE(A+)</h5>
            <p>Introduction to Computers - System familiarization - Software classNameification - Commands - Details about Processor & Mother
                board - BIOS setup - Storage device (primary & secondary) Virus & antivirus- About Power Section- Assembling - Installation
                of OS- OS properties- About Input & Output Devices - Troubleshooting tips.</p>
            <br />
            <h5>NETW0RKING(N+)</h5>
            <p>Introduction to networks- Network essentials- Network Topology - Connecting devices - OSI model - TCP/IP
                Overview- Installation of OS (Windows) & NOS (Windows Server) - Connectivity and resource sharing- Remote Tools - DHCP
                server configuration- File system & Disk management- Troubleshooting tips.</p>
            <br />
            <h5>WINDOWS SERVER</h5>
            <p>Deploying and managing Windows server Introsuction to active directory domain services - Managing Active
                Directory Domain Services objects- Implementing IPV4 - Implementing dynamic host configuration protocol - Implementing
                domain name system - Implementing local storage - Implementing file and print services - Implementing group
                policy - Implementing server virtualization with hyper - Hyper-V - Implementing Windows Deployment Service.</p>
        </div>

    </div>
}