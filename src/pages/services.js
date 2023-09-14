import React from 'react';
import Header from '../Component/header'
import'./services.css';
import { Helmet} from 'react-helmet-async';
const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <Header/>
        <section className="servicesClass">
      <h3>Services</h3>
      <div className="container">
        <div className="card">
          <i className="fa-solid fa-desktop"></i>
          <h3>paypal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.
          </p>
        </div>
        <div className="card">
          <i className="fa-solid fa-tablet-screen-button"></i>
          <h3>paypal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.
          </p>
        </div>
        <div className="card">
          <i className="fa-solid fa-mobile-screen"></i>
          <h3>paypal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.
          </p>
        </div>
        <div className="card">
          <i className="fa-solid fa-house-chimney-crack"></i>
          <h3>paypal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.
          </p>
        </div>
        <div className="card">
          <i className="fa-regular fa-window-restore"></i>
          <h3>paypal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.
          </p>
        </div>
        <div className="card">
          <i className="fa-solid fa-print"></i>
          <h3>paypal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Services;
