import React from 'react';
import './hero.css';
import {images} from '../../constants';

const heroSection = {
  heroMediaLeft: images.heroVideo,
  heroMediaRight: images.rivian21,
  title: 'The future is electric',
  subtext: 'Discover the new standard of luxury',
  ctaText: 'Learn more',
  ctaLink: '#gallery',
  altCtaText: 'Learn more',
  altCtaLink: '#gallery'
}

const Hero = () => {
  return (
    <section id='hero' className='app__hero'>
      <div className="app__hero-left">
        <video src={heroSection.heroMediaLeft} className='app__hero-left-backdrop' autoPlay muted loop/>
        <h1>{heroSection.title}</h1>
        <h3>{heroSection.subtext}</h3>
        <a href={heroSection.ctaLink}>{heroSection.ctaText}</a>
      </div>
      <div className="app__hero-right">
        <img src={heroSection.heroMediaRight} alt="" className='app__hero-right-backdrop'/>
        <a href={heroSection.altCtaLink}>{heroSection.altCtaText}</a>
      </div>
    </section>
  )
}

export default Hero