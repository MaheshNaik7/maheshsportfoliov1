import React, { Component } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import KODNEST from '../Components/images/KodNestCertificate.png';
import UDEMY from '../Components/images/UdemyCertificate.png';
import SMUSK from '../Components/images/SoftMuskCertificate.png';


class Carousel extends Component {
  componentDidMount() {
    // Initialize Flickity carousel after component has mounted
    new Flickity('.carousel', {
      wrapAround: true,
      // Add any other options you want to customize
    });
  }

  render() {
    return (
      <div className="carousel" data-flickity='{ "wrapAround": true }'>
        <div className="carousel-cells"><img src={KODNEST} alt="KodNest Certificate" /></div>
        <div className="carousel-cell"><img src={UDEMY} alt="Udemy Certificate" /></div>
        <div className="carousel-cells"><img src={SMUSK} alt="SoftMusk Certificate" /></div>
      </div>
    );
  }
}

export default Carousel;
