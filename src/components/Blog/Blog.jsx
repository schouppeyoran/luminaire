import React from 'react';
import './blog.css';
import {AiOutlineRead} from 'react-icons/ai';
import { images } from '../../constants';

const blogItems = [
    {
        tag: 'lifestyle',
        minutesToRead: '10',
        title: 'The pinnacle of electric performance',
        description: "Introducing our new ultra-high-performance brand; the world's first fully electric luxury super-sports car.",
        imgBackground: images.rivianPhoto1,
        imgForeground: images.rivianPhoto2,
        link: '#blog'
    },
    {
        tag: 'lifestyle',
        minutesToRead: '7',
        title: 'Beyond charging vehicles',
        description: 'Hear about the new ways electric vehicles are powering up offices and transforming remote businesses',
        imgBackground: images.rivianPhoto3,
        imgForeground: images.rivianPhoto5,
        link: '#blog'
    },
    {
        tag: 'lifestyle',
        minutesToRead: '5',
        title: 'Never-ending road trip',
        description: 'How the expanding electric network is changing the way families plan for vacations.',
        imgBackground: images.rivianPhoto9,
        imgForeground: images.rivianPhoto10,
        link: '#blog'
    },
    {
        tag: 'placeholder',
        minutesToRead: '1',
        title: 'This is a placeholder article',
        description: "The figma design only provided me with 3 articles but I need more than 3 to develop the scrolling functionality of this component.",
        imgBackground: images.rivianPhoto11,
        imgForeground: images.rivianPhoto12,
        link: '#blog'
    },
    {
        tag: 'placeholder',
        minutesToRead: '1',
        title: 'This is a placeholder article',
        description: 'The figma design only provided me with 3 articles but I need more than 3 to develop the scrolling functionality of this component.',
        imgBackground: images.rivianPhoto13,
        imgForeground: images.rivianPhoto15,
        link: '#blog'
    },
    {
        tag: 'placeholder',
        minutesToRead: '1',
        title: 'This is a placeholder article',
        description: 'The figma design only provided me with 3 articles but I need more than 3 to develop the scrolling functionality of this component.',
        imgBackground: images.rivianPhoto16,
        imgForeground: images.rivianPhoto19,
        link: '#blog'
    },
]

const Blog = () => {
  return (
    <section id='blog' className='app__blog'>
        <div className="app__blog-sidebar">
            <h4>News</h4>
        </div>
        <div className="app__blog-container">
            <h1>Stories behind the wheel</h1>
            <div className="app__blog-items">
                {blogItems.map((item, index) => (
                    <div className="app__blog-item">
                        <div className="app__blog-item-img">
                            <img src={item.imgBackground} alt="" />
                            <img src={item.imgForeground} alt="" />
                            <a href={item.link}><AiOutlineRead/></a>
                        </div>
                        <div className="app__blog-item-tags">
                            <h3>{item.tag}</h3>
                            <h3>{item.minutesToRead} min read</h3>
                        </div>
                        <div className="app__blog-item-content">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blog