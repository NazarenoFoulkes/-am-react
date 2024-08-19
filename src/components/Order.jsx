import React from 'react';

const Order = () => (
  <section className="order" id="order">
    <h1 className="heading"><span>Pedí </span>Ahora</h1>
    <div className="row">
      <form action="">
        <div className="inputBox">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Your Address" />
          <input type="text" placeholder="Your Phone" />
        </div>
        <textarea placeholder="Your Message" name="" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="Order now" className="btn" />
      </form>
    </div>
  </section>
);

export default Order;
