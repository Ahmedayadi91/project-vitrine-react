// import React , {useState}  from 'react'
// import { Link} from 'react-router-dom'
// import logo from '../img/logo.png'

// function Navbar() {
//    const [click, setClick] = useState (false)

//      const handleClick = () => setClick (!click)
//      const closeMobileMenu = () => setClick(false)
//     return (
//         <div>
//             <nav className="navbar">
//                  <div className='navbar-container'>
//                      <Link to='/' className='navbar-logo'> 
//                           Karhaba <img src={logo} alt='' className="fab fa-typo3 "   />
//                      </Link>
//                      <div className="menu-icon" onClick={ handleClick}   >
//                          <i className={ click ? 'fas fa-times' : 'fas fa-bars'}   />
//                      </div>
//                      <ul className={click ? 'nav-menu active' : 'nav-manu' } >
//                         <li className='nav-item'>
//                             <Link to='/' className='nav-links' onClick={closeMobileMenu} >
//                                 Home
//                             </Link>
//                         </li>
//                         <li className='nav-item'>
//                             <Link to='/product' className='nav-links' onClick={closeMobileMenu} >
//                                 Product
//                             </Link>
//                         </li>
//                         <li className='nav-item'>
//                             <Link to='/contact' className='nav-links' onClick={closeMobileMenu} >
//                                 Contact
//                             </Link>
//                         </li>
//                         <li className='nav-item'>
//                             <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu} >
//                                 Sign-up
//                             </Link>
//                         </li>
//                      </ul>
//                  </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../img/logo.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Karhaba
            <img src={Logo} class='fab fa-typo3' width='70px' height='70px' alt='' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
