// src/components/aboutComponents/photoCarouselAbout.js

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../../styles/FilmStrip.scss";
import "../../styles/FeaturedIssueGallery.scss";
import "../../styles/PhotoCarouselAbout.scss";

class PhotoCarouselAbout extends React.Component {
  render() {
    const responsiveObject = {
      0: { items: 1 },
      500: { items: 2 },
      900: { items: 3, itemsFit: "contain" },
    };

    const handleDragStart = (e) => e.preventDefault();

    // Import images from carouselAbout directory
    const images = [
      require("../../static/carouselAbout/about_01.jpg"),
      require("../../static/carouselAbout/about_02.jpg"),
      require("../../static/carouselAbout/about_03.jpg"),
      require("../../static/carouselAbout/about_04.jpg"),
      require("../../static/carouselAbout/about_05.jpg"),
      require("../../static/carouselAbout/about_06.jpg"),
      require("../../static/carouselAbout/about_07.jpg"),
      require("../../static/carouselAbout/about_08.jpg"),
      require("../../static/carouselAbout/about_09.jpg"),
    ];

    const carouselImages = images.map((img, index) => (
      <div className="img-container" key={index}>
        <LazyLoadImage 
          className="film-strip-img" 
          src={img} 
          onDragStart={handleDragStart} 
          alt={`About Image ${index + 1}`} 
          effect="blur" 
        />
      </div>
    ));

    return (
      <div className="photo-carousel-about">
        <h2>Photo Carousel</h2>
        {images.length > 0 ? (
          <div className="gallery-container">
            <AliceCarousel
              items={carouselImages}
              disableDotsControls
              disableButtonsControls
              mouseTrackingEnabled
              infinite={true}
              autoPlay={true}
              autoPlayInterval={1500}
              responsive={responsiveObject}
            />
          </div>
        ) : (
          <div>
            <p>Loading carousel images...</p>
            <p>Images found: {images.length}</p>
          </div>
        )}
      </div>
    );
  }
}

export default PhotoCarouselAbout;
