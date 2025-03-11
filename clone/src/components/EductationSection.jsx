import React, { useState } from 'react';
import './EducationSection.css';
import BenifitsSection from './BenifitsSection';
import Container from './Contanier';

const EducationSection = () => {
    const [activeTab, setActiveTab] = useState('school');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const courses = {
        school: [
            { id: 13, name: '11th Class', link: '/mcq-exam?Category_Id=13&Exam_Type=1', exams: 182 },
            { id: 14, name: '12th Class', link: '/mcq-exam?Category_Id=14&Exam_Type=1', exams: 178 },
            { id: 8, name: '6th Class', link: '/mcq-exam?Category_Id=8&Exam_Type=1', exams: 151 },
            { id: 9, name: '7th Class', link: '/mcq-exam?Category_Id=9&Exam_Type=1', exams: 150 },
            { id: 12, name: '10th Class', link: '/mcq-exam?Category_Id=12&Exam_Type=1', exams: 150 },
            { id: 11, name: '9th Class', link: '/mcq-exam?Category_Id=11&Exam_Type=1', exams: 141 },
            { id: 10, name: '8th Class', link: '/mcq-exam?Category_Id=10&Exam_Type=1', exams: 135 },
            { id: 7, name: '5th Class', link: '/mcq-exam?Category_Id=7&Exam_Type=1', exams: 87 }
        ],
        competitive: [
            { id: 24, name: 'SSC CHSL', link: '/mcq-exam?Category_Id=24&Exam_Type=1', exams: 29 },
            { id: 23, name: 'SSC CGL', link: '/mcq-exam?Category_Id=23&Exam_Type=1', exams: 15 },
            { id: 28, name: 'UPSC IAS', link: '/mcq-exam?Category_Id=28&Exam_Type=1', exams: 8 },
        ],
        entrance: [
            { id: 70, name: 'VITEEE', link: '/mcq-exam?Category_Id=70&Exam_Type=1', exams: 6 },
            { id: 71, name: 'CUCET', link: '/mcq-exam?Category_Id=71&Exam_Type=1', exams: 6 },
            { id: 45, name: 'CAT', link: '/mcq-exam?Category_Id=45&Exam_Type=1', exams: 5 },
        ],
        tutors: []
    };

    return (
        <>   
            <div className="education-section">
              <Container> 
                {/* <div className="container-education-heading"> */}
                    <div className="row">
                        <h1 className="main-heading">
                            PROVIDE <br /><span>BEST EDUCATIONAL </span>
                        </h1>
                    </div>
                {/* </div> */}

                <div className="horizontal-tabbed-menu menu-1">
                    <div className="container-education">
                        <div className="row educational-tabbed-menu">
                            <div className="col-3" style={{ padding: 0 }}>
                                <div className="nav flex-column nav-pills">
                                    {Object.keys(courses).map((tab) => (
                                        <a
                                            key={tab}
                                            className={`nav-link ${activeTab === tab ? 'active-education' : ''}`}
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => handleTabClick(tab)}
                                        >
                                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="col-9">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active">
                                        <div className="tab-content-data">
                                            {courses[activeTab].length === 0 ? (
                                                <h4 style={{ padding: '30px', textAlign: 'center' }}>Coming Soon</h4>
                                            ) : (
                                                courses[activeTab].map((course) => (
                                                    <div className="entrance-exam" key={course.id}>
                                                        <div className="entrance-img">
                                                            <h1>N</h1>
                                                        </div>
                                                        <div className="entrance-info">
                                                            <a href={course.link}>
                                                                <h5>{course.name}</h5>
                                                                <h6>{course.exams}+ </h6>
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Container> 
            </div>
        



<BenifitsSection/>
        </>
    );
};

export default EducationSection;