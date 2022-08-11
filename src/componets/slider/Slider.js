import React from 'react';
import './Slider.scss';
const Slider = () => {
  return (
    <div className="slider">
      <img src="/img/doctor-shortage.jpeg" alt="doctor" />
      <div className="overlay"></div>
      <div className="slider-contant">
        <p>Mareket {'&'} Resources</p>
        <h1>
          Find The Best
          <br />
          Doctors Around You
        </h1>
        <div className="slider-btn">
          <button className="slider-find btns">Find Doctor {'+'}</button>
          <button className="slider-read btns">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
