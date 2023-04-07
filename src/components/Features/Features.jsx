import React from 'react';
import './features.css';
import {images} from '../../constants';
import {AiOutlineArrowRight} from 'react-icons/ai';

const featuresSection = {
  decorator: images.star3,
  subtext: 'Features',
  title: 'Our promise to the future',
  description: 'Premium electric features has found a new form',
}

const featuresItems = {
  item1: {
    img: images.rivianPhoto20,
    title: 'Functional aesthetics',
    description: 'A mission to find the optimal balance between cooling and performance to withstand its inevitably heavier weight.',
    expandText: 'Learn more',
    expandParagraphs: [
      '',
      ''
    ]
  },
  item2: {
    img: images.rivianPhoto17,
    title: 'Electrifying experience',
    description: 'Integrating high performance technology into a new design.',
    expandText: 'Learn more',
    expandParagraphs: [
      '',
      ''
    ]
  },
  item3: {
    img: images.rivianPhoto21,
    title: 'Finding optimal balance',
    description: 'Feel the road beneath you. See the sky above. Hear the music around you.',
    expandText: 'Learn more',
    expandParagraphs: [
      '',
      ''
    ]
  },
}

const Features = () => {
  return (
    <section id='features' className='app__features'>
      <div className="app__features-heading">
        <img src={featuresSection.decorator} alt="" />
        <h4>{featuresSection.subtext}</h4>
        <h1>{featuresSection.title}</h1>
        <h3>{featuresSection.description}</h3>
      </div>
      <div className="app__features-container">
        <div className='app__features-subContainer'>
          <div className="app__features-item1">
            <img src={featuresItems.item1.img} alt="" />
            <div className='app__features-item1-content'>
              <h4>{featuresItems.item1.title}</h4>
              <h3>{featuresItems.item1.description}</h3>
              <div className='app__features-item-expandButton'>
                <a>{featuresItems.item1.expandText}</a>
                <AiOutlineArrowRight/>
              </div>
            </div>
          </div>
          <div className="app__features-item2">
            <img src={featuresItems.item2.img} alt="" />
            <div className='app__features-item2-content'>
              <h4>{featuresItems.item2.title}</h4>
              <div>
                <h3>{featuresItems.item2.description}</h3>
                <div className='app__features-item-expandButton'>
                  <a>{featuresItems.item2.expandText}</a>
                  <AiOutlineArrowRight/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app__features-item3">
          <div className='app__features-item3-img'>
            <img src={featuresItems.item3.img} alt="" />
          </div>
          <div className='app__features-item3-content'>
            <h4>{featuresItems.item3.title}</h4>
            <h3>{featuresItems.item3.description}</h3>
            <div className='app__features-item-expandButton'>
              <a>{featuresItems.item3.expandText}</a>
              <AiOutlineArrowRight/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features