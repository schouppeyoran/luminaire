import React, {useState} from 'react';
import { images } from '../../constants';
import './navbar.css';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const navLinks = [
  {
    title: 'Pick your car',
    id: '#gallery'
  },
  {
    title: 'Features',
    id: '#features'
  },
  {
    title: 'News',
    id: '#blog'
  },
  {
    title: 'Stay in touch',
    id: '#cta'
  }
]

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='container app__navbar'>
      <div className="app__navbar-content">
        <div className="app__navbar-logo">
          <a href='#'><img src={images.logo} alt="" /></a>
        </div>
        <div className="app__navbar-menu">
          {toggleMenu
          ? <AiOutlineClose onClick={() => setToggleMenu(false)} />
          : <AiOutlineMenu onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='app__navbar-links-container scale-in-top'>
              <ul className='app__navbar-links'>
                {navLinks.map((navLink) => (
                  <a href={navLink.id}><li>{navLink.title}</li></a>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar