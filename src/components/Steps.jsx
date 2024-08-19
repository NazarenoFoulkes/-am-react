import React from 'react';
import step1 from '../images/step-1.jpg';
import step2 from '../images/step-2.jpg';
import step3 from '../images/step-3.jpg';

const Steps = () => (
  <section className="step-container">
    <h1 className="heading">Cómo <span>Funciona</span></h1>
    <section className="steps">
      <div className="box">
        <img src={step1} alt="Step 1" />
        <h3>Elegí lo que más te guste</h3>
      </div>
      <div className="box">
        <img src={step2} alt="Step 2" />
        <h3>Entrega en la puerta de tu casa</h3>
      </div>
      <div className="box">
        <img src={step3} alt="Step 3" />
        <h3>Cualquier método de pago</h3>
      </div>
    </section>
  </section>
);

export default Steps;
