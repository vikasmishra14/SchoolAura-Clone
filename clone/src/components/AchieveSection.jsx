import React, { useEffect, useRef, useState } from 'react';
import './AchieveSection.css';
import Container from './Contanier';

const AchieveSection = () => {
   

    return ( 
        <div className="section-achieve">
             <Container> 
                            <div className="row">
                    <div className="col-lg-4">
                        <div className="col4-bg">
                            <img className='colbg' src="https://www.schoolaura.com/Content/new_assets/images/banner-2/Clip.png" alt="" />
                         </div>
                         <ul>
                            <li>- 256 Courses</li>
                            <li>- Expert Teachers</li>
                            <li>- Online Education</li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        <div className='col-lg-8-text'>
                            <h2 className="sub-heading">Why Online Study With SchoolAura</h2>
                            <p>
                                The world is changing for the better. Because of the advancement of technology, geek minds have grown tired of doing more work, and carrying books, notebooks, and how much to buy books?
                            </p>
                            <p>
                                <strong>Solution:</strong> Now you can find a simple solution with schoolaura. In these days almost everyone has a Smartphone, Tab, or Laptop. So just open your device and start your study from anywhere anytime while you are traveling, sitting in the park, etc.
                            </p>
                            <p>Now Use your time and gain knowledge in every second and Use your device for the right things, not to waste your time.</p>
                        </div>
                    </div>
                </div>

                {/* Image inside rows */}
                <div className='rows' >
                    <img
                        src="https://www.schoolaura.com/Content/new_assets/images/banner-2/Layer-20.png"
                        alt="banner-2"
                    />
                </div>
                </Container> 
        </div>
      
    );
};

export default AchieveSection;
