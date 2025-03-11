import React from "react";
import "./HappyClient.css";
import Container from "./Contanier";

const HappyClient = () => {
  return (
     
    <section className="happy-client">
       <Container> 
      <div className="client-container">
      
        <div className="image-section"></div>
        <div className="text-section">
          <h1 className="main-heading">
            Easy to Access with <span>Mobile APP</span>
          </h1>
          <p>
            If you're looking for easily accessible resources for your classroom, then you're in the right place. Online learning with the Android app is very easy to access. That's why we've hand-curated the School Aura free app and website. Easy to use and learn!
          </p>
          <p>
            To learn online, you need to be reasonably comfortable with Smart Mobile Phone, Tab, Laptops, and the internet. The advantage of learning online via an android app is that you can pause the video/audio whenever you need to take notes or simply absorb what has been said. Another fantastic feature of online learning is that you can re-listen to different parts as needed, which is something you can't do in a live lecture!
          </p>
          <p>
            <a href="https://play.google.com/store/apps/details?id=com.schoolaura" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn btn-primary">
              <i className="fab fa-android"></i> Download Now
            </a>
          </p>
        </div>
       
      </div>
      </Container>
    </section>
     
  );
};

export default HappyClient;
