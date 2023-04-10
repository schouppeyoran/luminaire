import React from 'react';
import { images } from '../../constants';
import './footer.css';

const newsletterTagline = 'Stay up to speed on the latest';

const Footer = () => {
  return (
    <section id='footer' className='app__footer'>
      <div className="app__footer-newsletter">
        <div className="app__footer-newsletter-img-left">
          <img src={images.polestarHatch3} alt="" />
        </div>
        <div className="app__footer-newsletter-content">
          <h2>{newsletterTagline}</h2>
          <div className="app__footer-newsletter-content-input">
            <input type="email" placeholder='Enter your email'/>
            <button>Sign up</button>
          </div>
          <p>By clicking 'Sign up' you are confirming that you agree with our <a href="#footer">Terms and Conditions</a>.</p>
        </div>
        <div className="app__footer-newsletter-img-right">
          <img src={images.polestarHatch3} alt="" />
        </div>
      </div>
      <div className="app__footer-content">

      </div>
    </section>
  )
}

export default Footer