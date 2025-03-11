import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import './HeroBanner.css';
import StudentLogin from './StudentLogin';
import ParentLogin from './ParentLogin';

const HeroBanner =()=>{
    const [login, setLogin] = React.useState(false);
    const handleClick=()=>{
        setLogin(!login);
    }
    return (
<>
<div className="hero-banner">
    <div className="banner-bg"></div>
    <div className="herobanner-container">
        <div className="hero-text">
            <div className="hero-heading">
                <h1>
                    Be A
                    <span> SMART STUDENT</span>
                </h1>
                <h4>SchoolAura Is A Smart Education Platform</h4>
            </div>
            <div className="hero-services">
                <div className="hero-services-bg"></div>
                <div className="hero-services-item">
                    <div className="services-item-heading">
                        <h4>ENTRANCE
                            <br />
                            SOLUTION
                        </h4>
                    </div>
                    <div className="services-item-exam">
                        <a href="/exam?title=entrance-exam&catid=3">Exam</a>
                    </div>
                    <div className="services-item-course">
                    <a href="/course?title=entrance-courses&amp;catid=3">Courses</a>
                    </div>
                    <div className="services-item-more">
                    <a href="/home/entrance_solutions">READ MORE</a>
                    </div>
                </div>

                <div className="hero-services-item">
                    <div className="services-item-heading">
                        <h4>ENTRANCE
                            <br />
                            SOLUTION
                        </h4>
                    </div>
                    <div className="services-item-exam">
                        <a href="/exam?title=entrance-exam&catid=3">Exam</a>
                    </div>
                    <div className="services-item-course">
                    <a href="/course?title=entrance-courses&amp;catid=3">Courses</a>
                    </div>
                    <div className="services-item-more">
                    <a href="/home/entrance_solutions">READ MORE</a>
                    </div>
                </div>

                

                <div className="hero-services-item">
                    <div className="services-item-heading">
                        <h4>ENTRANCE
                            <br />
                            SOLUTION
                        </h4>
                    </div>
                    <div className="services-item-exam">
                        <a href="/exam?title=entrance-exam&catid=3">Exam</a>
                    </div>
                    <div className="services-item-course">
                    <a href="/course?title=entrance-courses&amp;catid=3">Courses</a>
                    </div>
                    <div className="services-item-more">
                    <a href="/home/entrance_solutions">READ MORE</a>
                    </div>
                </div>


                <div className="hero-services-item">
                    <div className="services-item-heading">
                        <h4>ENTRANCE
                            <br />
                            SOLUTION
                        </h4>
                    </div>
                    <div className="services-item-exam">
                        <a href="/exam?title=entrance-exam&catid=3">Exam</a>
                    </div>
                    <div className="services-item-course">
                    <a href="/course?title=entrance-courses&amp;catid=3">Courses</a>
                    </div>
                    <div className="services-item-more">
                    <a href="/home/entrance_solutions">READ MORE </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="login-form-section">
            <div className="hero-login-form">
                <div className="form-user-img">
                    <img src="https://www.schoolaura.com/Content/new_assets/images/header/user-img.png" alt="" />
                </div>
                <div className="form-container">
                    <div className="form-btn">
                        <ul className="nav nav-tabs">
                            <li> <a className='active' href="#home">Student Login</a> 
                            </li>
                            <li>
                               
                            <a href="#" onClick={handleClick}>Parents Login</a> 
                            </li>
                        </ul>
                    </div>
                    {/* <div className="tab-content">
                        <div id="home" className='active'>
                            <div className="inputs">
                                <span>Mobile Number or Key</span>
                                <input type="text" />
                            </div>
                            <div className="inputs">
                                <span>Mobile Number or Key</span>
                                <input type="text" />
                            </div>
                            <div className="inputs"> 
                                <input type="button" value='Login' />
                            </div>
                        </div>
                    </div> */}
                     {
                        login?(
                            <StudentLogin/>
                        ):(
                            <ParentLogin/>
                        )
                     }
                </div>
            </div>
        </div>
    </div>

    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
    <path fill="#ffffff" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
</div>
</>
    )
}
export default HeroBanner;