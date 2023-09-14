import React from 'react';
import Header from '../Component/header';
import { Helmet} from 'react-helmet-async';
import'./mainpage.css';

const MainPage = () => {
  return (
    <div>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
      <Header/>
      <section className="carsourClass">
      <div>
      
      
      
      </div>
    </section>
    </div>
  );
}

export default MainPage;
