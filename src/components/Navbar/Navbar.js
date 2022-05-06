import React,{useState} from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import {Nav, NavbarContainer,NavLogo,NavIcon ,MobileIcon,NavMenu,NavItem,NavLinks} from './Navbar.elements';
import { IconContext } from 'react-icons/lib';



const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>

    <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
          <MobileIcon onClick={handleClick}>
           { click? <FaTimes/> : <FaBars/>}
          </MobileIcon>
          <NavMenu onClick={handleClick}>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>

            </NavItem>

          </NavMenu>
          <NavMenu onClick={handleClick}>
          <NavItem>
            <NavLinks to="/services">Services</NavLinks>

            </NavItem>

          </NavMenu>
          <NavMenu onClick={handleClick}>
          <NavItem>
            <NavLinks to="/products">Products</NavLinks>

            </NavItem>

          </NavMenu>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar