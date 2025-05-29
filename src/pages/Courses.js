import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Courses = () => {
    const handleCourseSelect = (event) => {
        const selectedCourse = event.target.value.toLowerCase();
        const courseItems = document.querySelectorAll('.course-item');

        courseItems.forEach((item) => {
            item.querySelector('img').classList.remove('highlight');
        });

        courseItems.forEach((item) => {
            const courseName = item.getAttribute('data-name').toLowerCase();
            if (courseName === selectedCourse) {
                const courseImage = item.querySelector('img');
                courseImage.classList.add('highlight');
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    };

    //  Declare the course options here
    const courses = [
        { label: 'DCA(Tally) - Diploma in Computer Application', value: 'DCATally' },
        { label: 'DCA(Programming) - Diploma in Computer Application', value: 'DCAProgramming' },
        { label: 'ADAD(Advanced Diploma in Artificial Intelligence & Data Science)', value: 'ADAD' },
        { label: 'ADCP - Advanced Diploma in Computer Programming', value: 'ADCP' },
        { label: 'ADDA - Advanced Diploma in Data Analytics', value: 'ADDA' },
        { label: 'ADJP - Advanced Diploma in Java Programming', value: 'ADJP' },
        { label: 'ADMS - Advanced Diploma in MERN/MEAN Stack', value: 'ADMS' },
        { label: 'ADPP - Advanced Diploma in Python Programming', value: 'ADPP' },
        { label: 'CCAE - Certificate Course in Advanced Excel', value: 'CCAE' },
        { label: 'DBDA - Diploma in Big Data Analytics', value: 'DBDA' },
        { label: 'DCC - Diploma in Cloud Computing', value: 'DCC' },
        { label: 'DFJD - Diploma in Full Stack Java Developer', value: 'DFJD' },
        { label: 'DFPD - Diploma in Full Stack Python Developer', value: 'DFPD' },
        { label: 'DMO - Diploma in MS-Office', value: 'DMO' },
        { label: 'DPFD - Diploma in PHP Full Stack Developer', value: 'DPFD' },
        { label: 'HDCA(Programming) - Honours Diploma in Computer Application', value: 'HDCAProgramming' },
        { label: 'HDCA(Tally) - Honours Diploma in Computer Application', value: 'HDCATally' },
        { label: 'HDFD - Honours Diploma in Full Stack Developer', value: 'HDFD' },
        { label: 'MDSA - Master Diploma in system Administration', value: 'MDSA' },
        { label: '.NET - Diploma in .Net', value: 'NET' },
        { label: 'Tally Prime - Certified Computer Accountant(CCA)', value: 'TallyPrime' },
       
    ];

    const renderCourseSections = () => {
        const courseData = [
            {
                title: 'Diploma Courses',
                courses: [
                    'DCATally', 'DCAProgramming', 'DPFD', 'DFJD', 'DFPD',
                    'NET', 'DMO', 'DCC', 'DBDA'
                ]
            },
            {
                title: 'Advanced Diploma Courses',
                courses: [
                    'ADAD', 'ADDA', 'ADMS', 'CCAE', 'ADPP',
                    'ADJP', 'MDSA', 'ADCP', 'TallyPrime'
                ]
            },
            {
                title: 'Honours Diploma Courses',
                courses: ['HDFD', 'HDCATally', 'HDCAProgramming']
            }
        ];

        return courseData.map((section, sectionIndex) => (
            <div className="container my-3" key={sectionIndex}>
                <div style={{ backgroundColor: '#175692' }}>
                    <h2 className="d-flex justify-content-center m-2 text-white">{section.title}</h2>
                </div>
                <div className="container p-4 cardtrans" style={{ backgroundColor: '' }}>
                    <div className="row">
                        {section.courses.map((course, courseIndex) => {
                            const formattedCourse = course.replace(/[()]/g, '').replace(/ /g, '');
                            return (
                                <div
                                    key={courseIndex}
                                    className="my-2 col-6 col-sm-4 col-md-3 course-item"
                                    data-name={course}
                                >
                                    <Link to={`/courses/${formattedCourse}`}>
                                        <img
                                            src={`/images/${formattedCourse}.png`}
                                            className="img-fluid courses_image"
                                            alt={course}
                                        />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div style={{ 
    backgroundImage: `url('/images/cover1.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
            <div className="container my-2">
                <div style={{ backgroundColor: '#2189b3' }}>
                    <h2 className="d-flex justify-content-center text-white">Courses Offered</h2>
                </div>
            </div>

            <div className="container" style={{ textAlign: 'right' }}>
                <select id="courseDropdown" onChange={handleCourseSelect}>
                    <option value="">Select a course...</option>
                    {courses.map((course) => (
                        <option key={course.value} value={course.value}>
                            {course.label}
                        </option>
                    ))}
                </select>
            </div>

            {renderCourseSections()}
        </div>
    );
};

export default Courses;
