import React from 'react';
import './blog.css';
import {AiOutlineRead} from 'react-icons/ai';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs';
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
    const scrollLeft = () => {
        const blogItems = document.querySelector('.app__blog-items');
        blogItems.scrollLeft -= blogItems.offsetWidth * 0.3;
    }
    
    const scrollRight = () => {
        const blogItems = document.querySelector('.app__blog-items');
        blogItems.scrollLeft += blogItems.offsetWidth * 0.3;
    }

  return (
    <section id='blog' className='app__blog'>
        <div className="app__blog-sidebar">
            <h4>News</h4>
        </div>
        <div className="app__blog-container">
            <h1>Stories behind the wheel</h1>
            <div className="app__blog-items">
                <BsFillArrowLeftSquareFill className="app__blog-items-scroll-left" onClick={scrollLeft}/>
                <BsFillArrowRightSquareFill className="app__blog-items-scroll-right" onClick={scrollRight}/>
                {blogItems.map((item, index) => (
                    <div className="app__blog-item">
                        <div className="app__blog-item-img">
                            <img src={item.imgBackground} alt="" />
                            <img src={item.imgForeground} alt="" />
                            <a href={item.link}><AiOutlineRead/></a>
                        </div>
                        <div className="app__blog-item-tags">
                            <h1>{item.tag}</h1>
                            <h1>{item.minutesToRead} min read</h1>
                        </div>
                        <div className="app__blog-item-content">
                            <h4>{item.title}</h4>
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