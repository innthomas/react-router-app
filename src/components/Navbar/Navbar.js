import React,{useState} from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import {Nav, NavbarContainer,NavLogo,NavIcon ,MobileIcon,NavMenu,NavItem,NavLinks} from './Navbar.elements';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';



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
          <MobileIcon onClick={handleClick} >
           { click? <FaTimes/> : <FaBars/>}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>

            </NavItem>

         
          <NavItem>
            <NavLinks to="/services">Services</NavLinks>

            </NavItem>

          
          <NavItem>
            <NavLinks to="/products">Products</NavLinks>

            </NavItem>
            <NavItemBtn>
              {button ? (<NavBtnLink to="/sign-up">
                <Button primary>SIGN UP</Button>

              </NavBtnLink>):(<NavBtnLink to="/sign-uo">
                <Button onClick={closeMobileMenu} fontBig primary>SIGN UP</Button>
              </NavBtnLink>)}
            </NavItemBtn>

          </NavMenu>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar