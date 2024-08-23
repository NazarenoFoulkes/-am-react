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
        <p>¡Las hamburguesas llegaron rápidamente y estaban deliciosas! El pedido online fue fácil de hacer, y la calidad de la comida superó mis expectativas. ¡Perfecto para disfrutar en casa!</p>
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
        <p>Excelente servicio y hamburguesas increíbles. La página web es muy intuitiva y el proceso de compra es sencillo. La comida llegó bien empaquetada y estaba caliente. ¡Volveré a pedir!</p>
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
        <p>Una experiencia de compra online sin complicaciones. Las hamburguesas estaban frescas y sabrosas, y el tiempo de entrega fue justo lo que prometieron. ¡Una opción fantástica para disfrutar de buenas hamburguesas sin salir de casa!</p>
      </div>
    </div>
  </section>
);

export default Review;
