export default function CCAE() {
    return <div style={{ backgroundColor: "lightgray" }}>

        {/* <!--heading--> */}
        <div className="container">
            <div style={{ backgroundColor: "#175692" }}>
                <h2 className=" d-flex justify-content-center m-2 text-white">CCAE - Certified Course in Advanced Excel
                </h2>
            </div>
        </div>

        {/* <!--objective--> */}
        <div className="container my-2">
            <div className="card m-2" style={{ maxWidth: "100" }}>
                <div className="row g-0">
                    <div className="col-12 col-md-4">
                        <img src="/images/CCAE.png" class="img-fluid rounded-start p-4" alt="logo" />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="card-body">
                            <p className="card-title">
                                <h4 style={{ color: "rgb(39, 39, 182)", textDecoration: "underline" }}>OBJECTIVE</h4>
                            </p>
                            <p>Upon completion of this course, the participant will be an expert in advanced Excel features including
                                macro programming and functions.
                            </p>
                            <p>
                                <h5>COURSE DURATION: 2 Months</h5>
                            </p>
                            <p>
                                <p><b>TARGET AUDIENCE:</b> BBA, MBA Students, Data Analyst, Auditor, BPOs, Call centres professionals, Data conversion technicians, Programmers.</p>
                                <p><b>PREREQUISITES:</b> No prior computer knowledge is required.</p>
                                <p><b>OVERVIEW:</b> This course helps in promoting Excel professionials in advanced stage.</p>
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
            <h5>ADVANCED EXCEL</h5>
            <p>Introduction to MS Excel and Understanding Basic Working with it- Formatting Worksheet- Working with Formulas/Functions
                (Lookup and Reference Funtions, Logical Function, Database Functions, Date and Time Funtions, Information Functions,
                Math and Trigonometry Funtions, Statistical Functions, Text Functios) - Conditional Formatting- Connect to other Database-
                Data storing and Filtering- Pivot Tables & Charts.</p>
            <br />
            <h5>VBA PROGRAMMING</h5>
            <p>VBA Overview- VBA Programming Variables- Conditional Logic- String and String Functions- Programming Loops - Programming
                Arrays - Subs and Functions- Creating your first Macro - Excel VBA- Excel Objects- Excel Events - Excel VBA Error Handling-
                Excel VBA and User forms- Connect with an external data - Work on automation project.</p>
        </div>

    </div>
}