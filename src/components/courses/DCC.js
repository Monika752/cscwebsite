export default function DCC() {
    return <div style={{ backgroundColor: "lightsteelblue" }}>

        {/* <!--heading--> */}
        <div className="container">
            <div style={{ backgroundColor: "#175692" }}>
                <h3 className=" d-flex justify-content-center m-2 text-white">DCC - Diploma in Cloud Computing
                </h3>
            </div>
        </div>

        {/* <!--objective--> */}
        <div className="container my-2">
            <div className="card m-2" style={{ maxWidth: "100" }}>
                <div className="row g-0">
                    <div className="col-12 col-md-4">
                        <img src="/images/DCC.png" className="img-fluid rounded-start p-4" alt="logo" />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="card-body">
                            <p className="card-title">
                                <h4 style={{ color: "rgb(39, 39, 182)", textDecoration: "underline" }}>OBJECTIVE</h4>
                            </p>
                            <p>Upon completion of the course, you will have a comprehensive understanding of the full Cloud
                                Computing lifecycle, including fundamental concepts and deployment models. Gain advanced
                                knowledge in the Hadoop ecosystem, Apache Spark, and Apache Hive, along with mastery of
                                cloud architecture and service models (IaaS, PaaS, SaaS). Develop expertise in cloud
                                platforms , open-source tools, virtualization technologies
                                , and networking with industry-leading cloud solutions.</p>
                            <p>
                                <h5>COURSE DURATION: 4 Months</h5>
                            </p>
                            <p>
                                <p><b>TARGET AUDIENCE:</b> Diploma/B.Sc/BCA/M.Sc/MCA/Engineering Students</p>
                                <p><b>PREREQUISITES:</b> Basic computer Knowledge</p>
                                <p><b>OVERVIEW:</b> This course covers the fundamentals of cloud computing, diving into the
                                    Hadoop ecosystem, Apache Spark, and Apache Hive. Gain hands-on experience with open-source
                                    tools and understand cloud architecture and service models (IaaS, PaaS, SaaS).</p>
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
            <h6>1. Introduction to Cloud Computing</h6>
            <br />
            <h5>Basics of Cloud Computing</h5>
            <p>
                <li>Cloud Computing Concepts: IaaS, PaaS, SaaS, Public, Private, Hybrid Clouds
                </li>
                <li>Benefits and Challenges: Scalability, Cost Efficiency, Flexibility, Security, Data </li>
            </p><br />
            <h6>2. Hadoop Ecosystem</h6>
            <br />
            <h5>Hadoop Overview</h5>
            <p>
                <li>Introduction to Hadoop: History and Evolution, Components, HDFS, YARN, MapReduce</li>
                <li>Architecture: HDFS, YARN, MapReduce</li>
            </p>
            <h5>HDFS</h5>
            <p>
                <li>Architecture: HDFS Nodes, Block Storage</li>
                <li>File Operations: Commands and Management</li>
            </p>
            <h5>MapReduce</h5>
            <p>
                <li>Programming Model: Mapper and Reducer, Job Configuration</li>
                <li>Writing Jobs : Development and Testing</li>
            </p>
            <h5>Hadoop Installation and Configuration</h5>
            <p>
                <li>Setting Up a Hadoop Cluster: Installation Steps, Basic Configuration
                </li>
                <li>Cluster Management: Daemon Management</li>
            </p>
            <h5>Data Ingestion with Hadoop</h5>
            <p>
                <li>Flume: Setup and Usage
                </li>
                <li>Sqoop: Data Import/Export Commands</li>
            </p>
            <h5>Hadoop Ecosystem Tools</h5>
            <p>
                <li>Apache Pig: Pig Latin Basics
                </li>
                <li>Apache Oozie: Workflow Scheduling</li>
            </p><br />
            <h6>3. Apache Spark</h6>
            <h5>Spark Overview</h5>
            <p>
                <li>Introduction: History and Components, Architecture
                </li>
                <li>RDDs, DataFrames, Datasets</li>
            </p>
            <h5>Spark Installation and Configuration</h5>
            <p>
                <li>Setup: Installation Process
                </li>
            </p>
            <h5>Core Spark Components</h5>
            <p>
                <li>Spark SQL: Basics
                </li>
                <li>Spark Streaming: Real-time Processing</li>
                <li>Spark MLlib: Machine Learning</li>
            </p>
            <h5>Spark Programming</h5>
            <p>
                <li>Development: Writing Applications in Python, Scala, Java
                </li>
                <li>Data Processing: DataFrames and RDDs</li>
            </p>
            <h5>Performance Tuning</h5>
            <p>
                <li>Optimizing Jobs: Metrics and Tools
                </li>
                <li>Resource Management: Configuration</li>
            </p><br />
            <h6>4. Apache Hive</h6>
            <h5>Hive Overview</h5>
            <p>
                <li>Introduction: Architecture and Hive Metastore
                </li>
            </p>
            <h5>Hive Query Language</h5>
            <p>
                <li>Basic Operations: DDL and DML Statements
                </li>
                <li>Advanced Queries: Joins and Aggregations
                </li>
            </p>
            <h5>Hive Installation and Configuration</h5>
            <p>
                <li>Setup: Configuration and Integration with Hadoop
                </li>
            </p>
            <h5>Advanced Hive Features</h5>
            <p>
                <li>UDFs: User-Defined Functions
                </li>
                <li>Partitions and Bucketing: Optimization Techniques
                </li>
            </p><br />
            <h6>5. Open-Source Tools NoSQL Databases</h6>
            <h5>NoSQL Databases</h5>
            <p>
                <li>HBase Overview: Architecture and Operations
                </li>
                <li>Integration with Hadoop: Data Management
                </li>
            </p>
            <h5>Containerization</h5>
            <p>
                <li>Docker Basics: Container Management
                </li>
                <li>Kubernetes Overview: Orchestration Basics
                </li>
            </p>
        </div>

    </div>
}