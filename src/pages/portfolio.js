import React from 'react';
import'./portfolio.css';
import Header from '../Component/header';
import Img1 from '../photo/1618676397-101006.jpg';
import Img2 from '../photo/React Properties.jpg';
import Img3 from '../photo/ReactJS-Tutorial.jpg';
import Img4 from '../photo/What-is-ReactJS-and-Why-to-Use-It.png';
import Img5 from '../photo/nigommoqt57x17bwt8m3.webp';
import Img6 from '../photo/images (17).jfif';
import { Helmet} from 'react-helmet-async';

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Header/>
      <section className="portfolio">
      <h2>portfolio</h2>
      <div className="container">
        <div className="card">
          <img src={Img1} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            nulla magnam. Ea quasi harum doloribus recusandae facere eos
            voluptatum. Non?
          </p>
          <button>see more</button>
        </div>
        <div className="card">
          <img src={Img2} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            nulla magnam. Ea quasi harum doloribus recusandae facere eos
            voluptatum. Non?
          </p>
          <button>see more</button>
        </div>
        <div className="card">
          <img src={Img3} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            nulla magnam. Ea quasi harum doloribus recusandae facere eos
            voluptatum. Non?
          </p>
          <button>see more</button>
        </div>
        <div className="card">
          <img src={Img4} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            nulla magnam. Ea quasi harum doloribus recusandae facere eos
            voluptatum. Non?
          </p>
          <button>see more</button>
        </div>
        <div className="card">
          <img src={Img5} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            nulla magnam. Ea quasi harum doloribus recusandae facere eos
            voluptatum. Non?
          </p>
          <button>see more</button>
        </div>

        <div className="card">
          <img src={Img6} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            nulla magnam. Ea quasi harum doloribus recusandae facere eos
            voluptatum. Non?
          </p>
          <button>see more</button>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Portfolio;
