import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ParentsReview.css";
import Container from "./Contanier";

const reviews = [
  {
    img: "https://www.schoolaura.com/Content/new_assets/images/tutor-solution-page/user-3.png",
    name: "Rakesh Sharma",
    location: "Faridabad, Haryana",
    text: "A parent who has a phobia for math would dread to see her child going through the same. I am glad we found School Aura, which gave a great teacher and a great platform for learning.",
  },
  {
    img: "https://www.schoolaura.com/Content/new_assets/images/tutor-solution-page/user-4.jpg",
    name: "Varun Kasyap",
    location: "Uttar Pradesh",
    text: "School Aura Teachers make sure one understands the concept by giving everyday observations. Thank You!",
  },
  {
    img: "https://www.schoolaura.com/Content/new_assets/images/tutor-solution-page/user-5.jpg",
    name: "Vishal Kumar",
    location: "Delhi",
    text: `"My daughter used to despise math, but now she can confidently take math tests." She's become enamoured with math, which is fantastic!" Thank You School Aura for your tremendous support.`,
  },
  {
    img: "https://www.schoolaura.com/Content/new_assets/images/tutor-solution-page/user-6.jpg",
    name: "Ravi Kaushal",
    location: "Indore, Madhya Pradesh",
    text: `Excellent teacher with a fantastic teaching method; if I had had this teacher in school, I believe I would have achieved my goal of becoming a lecturer."`,
  },
  {
    img: "https://www.schoolaura.com/Content/new_assets/images/tutor-solution-page/user2.jpg",
    name: "Rasmi Panday",
    location: "Delhi",
    text: "I have seen my son go from hating math to absolutely loving it. His marks have improved so much from last year. He looks forward to attending math sessions taken by …. Thank you, School Aura, for making math so much fun for my child! :)",
  },
];

const ParentsReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="parents-review">
      <Container> 
      <div className="container" data-aos="fade-up">
        <h1 className="main-heading">
          WHAT <span>PARENT SAYS</span>
        </h1>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="item">
              <div className="user">
                <div className="user-img">
                  <img src={review.img} alt={review.name} />
                </div>
                <div className="user-info">
                  <h4>{review.name}</h4>
                  <small>{review.location}</small>
                </div>
              </div>
              <div className="user-testi-info">
                <p className="text">{review.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </Container>
    </div>
  );
};

export default ParentsReview;
