import React from 'react';
import { Link } from 'react-router-dom';


const Hero = ({ backgroundImage, title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="hero" style={{ backgroundImage }}>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <Link to={buttonLink} className="hero-button">{buttonText}</Link>
      </div>
     
    </div>
  );
};

export default Hero;
