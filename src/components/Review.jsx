import React from 'react';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';

const Review = () => (
  <section className="review" id="review">
    <h1 className="heading"> <span> Opiniones </span> de clientes</h1>
    <div className="box-container">
      <div className="box">
        <img src={pic1} alt="Review" />
        <h3>Julia</h3>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, debitis.</p>
      </div>
      <div className="box">
        <img src={pic2} alt="Review" />
        <h3>Pedro</h3>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, debitis.</p>
      </div>
      <div className="box">
        <img src={pic3} alt="Review" />
        <h3>Juana</h3>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, debitis.</p>
      </div>
    </div>
  </section>
);

export default Review;
