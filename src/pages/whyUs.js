import React from 'react';
import'./whyUs.css';
import Header from '../Component/header';
import { Helmet} from 'react-helmet-async';

const WhyUs = () => {
  return (
    <div style={{backgroundColor:'#663300'}}
    >  
    <Helmet>
      <title>WhyUs</title>
    </Helmet>
    <Header/>
       <section className="NTIgroup">
          <div className="NTIimage">
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_w51pcehl.json" background="transparent" speed={1} style={{width: '300px', height: '300px'}} loop autoPlay />
          </div>
          <div className="NTIdes">
            <h3>Cairo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
              earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              maiores sed odio optio sapiente ipsum, consequuntur amet quisquam, at
              la
            </p>
          </div>
        </section>
        <section className="NTIgroup" dir="rtl">
          <div className="NTIimage-rtl">
            <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_obidsi0t.json" background="transparent" speed={1} style={{width: '300px', height: '300px'}} loop autoPlay />
          </div>
          <div className="NTIdes">
            <h3>Cairo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
              earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              maiores sed odio optio sapiente ipsum, consequuntur amet quisquam, at
              la
            </p>
          </div>
        </section>
        <section className="NTIgroup">
          <div className="NTIimage">
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_dsxct2el.json" background="transparent" speed={1} style={{width: '300px', height: '300px'}} loop autoPlay />
          </div>
          <div className="NTIdes">
            <h3>Cairo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
              earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              maiores sed odio optio sapiente ipsum, consequuntur amet quisquam, at
              la
            </p>
          </div>
        </section>
        <section className="NTIgroup" dir="rtl">
          <div className="NTIimage-rtl">
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_xvmprung.json" background="transparent" speed={1} style={{width: '300px', height: '300px'}} loop autoPlay />
          </div>
          <div className="NTIdes">
            <h3>Cairo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
              earum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              maiores sed odio optio sapiente ipsum, consequuntur amet quisquam, at
              la
            </p>
          </div>
        </section>
    </div>
  );
}

export default WhyUs;
