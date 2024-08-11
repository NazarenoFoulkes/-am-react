import React from 'react';
import homeImg from '../images/home-img.png';

const Home = () => (
  <section className="home" id="home">
    <div className="content">
      <h3>Rápido, delicioso y al instante</h3>
      <p>Sumérgete en una experiencia de sabor y diversión. Momentos inolvidables te esperan aquí.</p>
      <a href="#" className="btn">Pedí ahora</a>
    </div>
    <div className="image">
      <img src={homeImg} alt="Home" />
    </div>
  </section>
);

export default Home;
