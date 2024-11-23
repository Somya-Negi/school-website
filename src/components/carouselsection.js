import React from "react";
import Slider from "react-slick";


// Sample Images (replace these with your actual images)

import image3 from "../assets/carousel/carousel-image-3.webp";
import image4 from "../assets/carousel/carousel-image-4.webp";
import image5 from "../assets/carousel/carousel-image-5.webp";

const CarouselSection = () => {
  const images = [
  
    { id: 3, src: image3, alt: "Music Room" },
    { id: 4, src: image4, alt: "PlayGround" },
    { id: 5, src: image5, alt: "Maths Classroom" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="carousel-section">
      <h2 className="carousel-title">Explore Our School</h2>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="carousel-slide">
            <img src={image.src} alt={image.alt} className="carousel-image" />
            <div className="carousel-caption">
              <h3>{image.alt}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSection;
