import React from 'react';
import './SpreadingSection.css';
import Container from './Contanier';

const SpreadingSection = () => {
  return (
    <div className="spreading-section">
      <Container> 
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-8">
            <div>
              <h1 className="main-heading">
                Benefits of<br />
                <span>Online Education</span>
              </h1>
              <p>
                Online Education increases engagement by adding a human element. Studying in the comfort of your own home is convenient,
                but there are various other advantages of online study. It's especially beneficial for students who aren't as self-sufficient or
                who are used to the traditional educational model of "teacher and class."
              </p>
              <ul style={{ listStyle: 'disc', listStylePosition: 'inside', marginBottom: '60px' }}>
                <li>Time and Location Flexibility</li>
                <li>Find Unlimited Course Category</li>
                <li>No Need to Carry Books</li>
                <li>Get Access in any mobile, Tab, Laptop with your credential</li>
                <li>Use your time when you are traveling, Outing and free time</li>
                <li>Exam Practice before exam</li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <img src="https://www.schoolaura.com/Content/new_assets/images/spreading/spreading.png" alt="Online Education" />
          </div>
        </div>
      </div>
 
      <div className="spreading-stats aos-init" data-aos="fade-up">
        <div className="container">
          <div className="spreading-stats-bg">
            <img src="https://www.schoolaura.com/Content/new_assets/images/spreading/Clip.png" alt="Stats background" />
          </div>

          <div className="row">
            <div className="col-md-3">
              <h4>10000+</h4>
              <h6>Total Exams</h6>
            </div>

            <div className="col-md-3">
              <h4>600+</h4>
              <h6>Courses</h6>
            </div>

            <div className="col-md-3">
              <h4>3000+</h4>
              <h6>Success Stories</h6>
            </div>

            <div className="col-md-3">
              <h4>4.5/5</h4>
              <h6>Rating</h6>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default SpreadingSection;
