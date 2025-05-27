export default function DMO() {
    return <div style={{ backgroundColor: "rgb(91, 150, 170)" }}>

        {/* <!--heading--> */}
        <div className="container">
            <div style={{ backgroundColor: "#175692" }}>
                <h2 className=" d-flex justify-content-center m-2 text-white">DMO - Diploma in MS-Office
                </h2>
            </div>
        </div>
        {/* <!--objective--> */}
        <div className="container my-2">
            <div className="card m-2" style={{ maxWidth: "100" }}>
                <div className="row g-0">
                    <div className="col-12 col-md-4">
                        <img src="/images/DMO.png" className="img-fluid rounded-start p-4" alt="logo" />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="card-body">
                            <p className="card-title">
                                <h4 style={{ color: "rgb(39, 39, 182)", textDecoration: "underline" }}>OBJECTIVE</h4>
                            </p>
                            <p>Upon completion of the course, The participant will be an expert in using all
                                Windows products and surfing the internet.</p>
                            <p>
                                <h5>COURSE DURATION: 2 Months</h5>
                            </p>
                            <p>
                                <p><b>TARGET AUDIENCE:</b> House Wife/ Elders, Professionals, Executives, Secretaries and
                                    students.
                                </p>
                                <p><b>PREREQUISITES:</b> No prior computer knowledge is required.</p>
                                <p><b>OVERVIEW:</b> This course is a complete office suite preparing documentations, making
                                    graphs,
                                    displaying statistics,
                                    giving presentations using the MS-Office package and will enable the participants to handle
                                    any
                                    office work independently
                                    using computers</p>
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
            <h5>WINDOWS</h5>
            <p>Computer Fundamentals- Introduction to OS/GUI- Wordpad- Notepad- Paintbrush- Windows Explorer-
                Control Panel.</p>
            <br />
            <h5>MS-OFFICE</h5>
            <p><b>Word - </b>Creating text and Documents- Indexes and Tables- Embedding Picture- Table
                Manipulation- Mail Merge- Macro.</p>
            <p><b>Excel - </b>Formatting Cells- Charts- Pivot table- Data Table- Forms- Scenarios- Goal seek-
                Macros and Modules.</p>
            <p><b>Powerpoint - </b>Creating Presentations- OLE- Enhancing Presentation- Adding Audio & Video-
                Special Effects.</p>
            <br />
            <h5>INTERNET</h5>
            <p>Introduction to Internet, www, http & E-mail - Creating E-mail ID- Receiving & Sending E-mail-
                Chatting- Locating Information
                - Downloading.</p>
            <br />
            <h5>CASE STUDY</h5>
            <p>A case study reflecting a real-time situation would be given to the students, so that it gives
                confidence for them to
                manage any office work independently using computers.</p>
        </div>

    </div>
}