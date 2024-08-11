import React from 'react';
import g1 from '../images/g-1.jpg';
import g2 from '../images/g-2.jpg';
import g3 from '../images/g-3.jpg';
import g4 from '../images/g-4.jpg';
import g5 from '../images/g-5.jpg';
import g6 from '../images/g-6.jpg';
import g7 from '../images/g-7.jpg';
import g8 from '../images/g-8.jpg';
import g9 from '../images/g-9.jpg';

const Gallery = () => (
  <section className="gallery" id="gallery">
    <h1 className="heading">Nuestra<span> Galería </span></h1>
    <div className="box-container">
      <div className="box">
        <img src={g1} alt="Gallery" />
        <div className="content">
          <h3>tasty food</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga?</p>
          <a href="#" className="btn">order now</a>
        </div>
      </div>
      <div className="box">
        <img src={g2} alt="Gallery" />
        <div className="content">
          <h3>tasty food</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga?</p>
          <a href="#" className="btn">order now</a>
        </div>
      </div>
      <div className="box">
        <img src={g3} alt="Gallery" />
        <div className="content">
          <h3>tasty food</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga?</p>
          <a href="#" className="btn">order now</a>
        </div>
      </div>
      <div className="box">
        <img src={g4} alt="Gallery" />
        <div className="content">
          <h3>tasty food</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga?</p>
          <a href="#" className="btn">order now</a>
        </div>
      </div>
      <div className="box">
        <img src={g5} alt="Gallery" />
        <div className="content">
          <h3>tasty food</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga?</p>
          <a href="#" className="btn">order now</a>
        </div>
      </div>
      <div className="box">
        <img src={g6} alt="Gallery" />
        <div className="content">
          <h3>tasty food</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga?</p>
          <a href="#" className="btn">order now</a>
        </div>
      </div>
      <div className="box">
        <img src={g7} alt="Gallery" />
        <div className="content">
          <h3>tasty food</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga?</p>
          <a href="#" className="btn">order now</a>
        </div>
      </div>
      <div className="box">
        <img src={g8} alt="Gallery" />
        <div className="content">
          <h3>tasty food</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga?</p>
          <a href="#" className="btn">order now</a>
        </div>
      </div>
      <div className="box">
        <img src={g9} alt="Gallery" />
        <div className="content">
          <h3>tasty food</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga?</p>
          <a href="#" className="btn">order now</a>
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;
