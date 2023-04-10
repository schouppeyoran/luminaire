import React from 'react';
import { images } from '../../constants';
import './footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const newsletterTagline = 'Stay up to speed on the latest';

const footerLinks = [
  {
    label: 'Fleet',
    link: '#gallery'
  },
  {
    label: 'Features',
    link: '#features'
  },
  {
    label: 'Stories',
    link: '#blog'
  },
  {
    label: 'Investors',
    link: '#footer'
  },
  {
    label: 'FAQ',
    link: '#footer'
  },
]

const footerSocials = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  twitter: 'https://twitter.com/home',
  linkedin: 'https://www.linkedin.com/'
}

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
      <div className="app__footer-content container">
        <div className="app__footer-logo">
          <a href='#'><img src={images.logoBlack} alt="" /></a>
        </div>
        <ul className='app__footer-links'>
          {footerLinks.map((footerLink) => (
            <li><a href={footerLink.link}>{footerLink.label}</a></li>
          ))}
        </ul>
        <div className="app__footer-socials">
          <a href={footerSocials.facebook} target='_blank'><FaFacebookF/></a>
          <a href={footerSocials.instagram} target='_blank'><FaInstagram/></a>
          <a href={footerSocials.twitter} target='_blank'><FaTwitter/></a>
          <a href={footerSocials.linkedin} target='_blank'><FaLinkedin/></a>
        </div>
      </div>
      <div className="app__footer-disclaimer container">
        <p>Fictional company. Please don't sue me.</p>
        <a href="https://yoranschouppe.com/" target='_blank'>By Yoran Schouppe</a>
        <a href="#footer">Terms of Service</a>
        <a href="#footer">Privacy Policy</a>
      </div>
    </section>
  )
}

export default Footer