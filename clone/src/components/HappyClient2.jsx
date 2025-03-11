import React from 'react';
import './HappyClient2.css';
import Container from './Contanier';

const HappyClient2 = () => {
  return (
    <div className="happy-client">
      <Container> 
      <div className="container">
        <div className="row">
          <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up">
            <img
              src="https://www.schoolaura.com/Content/new_assets/images/happy-clients/client.png"
              alt="Happy Clients"
            />
          </div>
          <div className="col-lg-8">
            <h1 className="main-heading">
              WE <br /> <span>ARE SPREADING</span>
            </h1>
            <div className="happy-client-stats">
              <div className="container">
                <div className="row-1">
                  <div className="col-sm-6">
                    <div
                      className="client-stats-item aos-init"
                      data-aos="zoom-in-up"
                    >
                      <div className="client-stats-item-img">
                        <img
                          src="https://www.schoolaura.com/Content/new_assets/images/happy-clients/client-1.png"
                          alt="Happy School"
                        />
                      </div>
                      <div className="client-stats-item-nos">
                        <h4>108+</h4>
                        <h6>Happy School</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="client-stats-item aos-init"
                      data-aos="zoom-in-up"
                    >
                      <div className="client-stats-item-img">
                        <img
                          src="https://www.schoolaura.com/Content/new_assets/images/happy-clients/client-2.png"
                          alt="Students"
                        />
                      </div>
                      <div className="client-stats-item-nos">
                        <h4>58030+</h4>
                        <h6>Students</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-1">
                  <div className="col-sm-6">
                    <div
                      className="client-stats-item aos-init"
                      data-aos="zoom-in-up"
                    >
                      <div className="client-stats-item-img">
                        <img
                          src="https://www.schoolaura.com/Content/new_assets/images/happy-clients/client-3.png"
                          alt="Happy Parents"
                        />
                      </div>
                      <div className="client-stats-item-nos">
                        <h4>5360+</h4>
                        <h6>Happy Parents</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="client-stats-item aos-init"
                      data-aos="zoom-in-up"
                    >
                      <div className="client-stats-item-img">
                        <img
                          src="https://www.schoolaura.com/Content/new_assets/images/happy-clients/client-4.png"
                          alt="Happy Tutors"
                        />
                      </div>
                      <div className="client-stats-item-nos">
                        <h4>10+</h4>
                        <h6>Happy Tutors</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default HappyClient2;
