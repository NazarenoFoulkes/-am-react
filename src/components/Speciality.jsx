import React from 'react';
import sImg1 from '../images/s-img-1.jpg';
import s1 from '../images/s-1.png';
import sImg2 from '../images/s-img-2.jpg';
import s2 from '../images/s-2.png';
import sImg3 from '../images/s-img-3.jpg';
import s3 from '../images/s-3.png';
import sImg4 from '../images/s-img-4.jpg';
import s4 from '../images/s-4.png';
import sImg5 from '../images/s-img-5.jpg';
import s5 from '../images/s-5.png';
import sImg6 from '../images/s-img-6.jpg';
import s6 from '../images/s-6.png';
const Speciality = () => (
  <section className="speciality" id="speciality">
    <h1 className="heading">Nuestra <span>Especialidad</span></h1>
    <div className="box-container">
      <div className="box">
        <span className="price">$20</span>
        <img className="image" src={sImg1} alt="Hamburguesa Clásica" />
        <div className="content">
          <div className="emoji">🍔</div>
          <h3>Hamburguesa Clásica</h3>
          <p>La hamburguesa tradicional con carne de res jugosa, lechuga, tomate, cebolla y queso cheddar.</p>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <a href="#" className="btn">Ordenar</a>
        </div>
      </div>
      <div className="box">
        <span className="price">$22</span>
        <img className="image" src={sImg2} alt="Hamburguesa BBQ" />
        <div className="content">
          <div className="emoji">🔥</div>
          <h3>Hamburguesa BBQ</h3>
          <p>Hamburguesa con salsa BBQ, tocino crujiente, cebolla caramelizada y queso cheddar.</p>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <a href="#" className="btn">Ordenar</a>
        </div>
      </div>
      <div className="box">
        <span className="price">$25</span>
        <img className="image" src={sImg3} alt="Hamburguesa con Queso Azul" />
        <div className="content">
          <div className="emoji">🧀</div>
          <h3>Hamburguesa con Queso Azul</h3>
          <p>Hamburguesa con queso azul, arúgula y cebolla roja.</p>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <a href="#" className="btn">Ordenar</a>
        </div>
      </div>
      <div className="box">
        <span className="price">$18</span>
        <img className="image" src={sImg4} alt="Hamburguesa Veggie" />
        <div className="content">
          <div className="emoji">🥑</div>
          <h3>Hamburguesa Veggie</h3>
          <p>Hamburguesa de vegetales con garbanzos, quinoa, lechuga, tomate y aguacate.</p>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <a href="#" className="btn">Ordenar</a>
        </div>
      </div>
      <div className="box">
        <span className="price">$24</span>
        <img className="image" src={sImg5} alt="Hamburguesa Picante" />
        <div className="content">
          <div className="emoji">🌶️</div>
          <h3>Hamburguesa Picante</h3>
          <p>Hamburguesa con jalapeños, salsa picante, lechuga y queso pepper jack.</p>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <a href="#" className="btn">Ordenar</a>
        </div>
      </div>
      <div className="box">
        <span className="price">$28</span>
        <img className="image" src={sImg6} alt="Hamburguesa Gourmet" />
        <div className="content">
          <div className="emoji">🍽️</div>
          <h3>Hamburguesa Gourmet</h3>
          <p>Hamburguesa con carne de res angus, foie gras, cebolla caramelizada y queso brie.</p>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <a href="#" className="btn">Ordenar</a>
        </div>
      </div>
    </div>
  </section>
);

export default Speciality;