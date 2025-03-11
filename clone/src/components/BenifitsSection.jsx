import React from 'react';
import { FaTasks, FaFile, FaInfo, FaEye, FaLink, FaShare } from 'react-icons/fa';
import './BenifitsSection.css';
import Container from './Contanier';

const benefits = [
    { icon: <FaTasks />, title: 'Task Activities', description: 'Daily assignments and tasks can be easily completed through online availability of information. Subject-wise homework can be submitted online which helps students to finish their tasks online.' },
    { icon: <FaFile />, title: 'Exam Results', description: 'Exam and assessment results of each individual student can be seen. The report cards will be generated online for each individual student.' },
    { icon: <FaInfo />, title: 'Notice Updates', description: 'The necessary announcements and updates will reach the students and parents quickly.' },
    { icon: <FaEye />, title: 'Monitoring', description: 'All essential academic and administrative tasks can be easily monitored, such as students’ profile, exam results, fee details, transportation details, etc.' },
    { icon: <FaLink />, title: 'Connectivity', description: 'When all the information is available online, and is shared regularly with parents and students, transparency will be maintained.' },
    { icon: <FaShare />, title: 'Planning & Sharing', description: 'It becomes important nowadays for students to share their thoughts and ideas. SchoolAura Smart Education Platform provides the perfect stage to showcase and share brilliant ideas.' }
];

const BenefitsSection = () => {
    return (
        <section className="benefitSection">
             <Container> 
                <h1 className="main-heading text-center">
                    BENEFITS OF SCHOOLAURA <br /><span>FOR STUDENTS</span>
                </h1>
                <div className="benefit-grid">
                    {benefits.map((benefit, index) => (
                        <div className="benefit-card" key={index}>
                            <div className="icon">{benefit.icon}</div>
                            <h4>{benefit.title}</h4>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
                </Container>
        </section>
    );
};

export default BenefitsSection;
