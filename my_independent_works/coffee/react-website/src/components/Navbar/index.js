
import React from 'react';
import { Nav, NavLink, NavMenu, NavText } from './NavbarElements';
import logo from '../images/Logo.svg';


const Navbar = () => {
    return (
    <Nav>
         <NavMenu className="navigate">
            <NavLink className="menu" to="/goods" activeStyle>
                <img src={logo} alt="logotip"/></NavLink> 
            <NavLink className="menu" to="/coffee" activeStyle>
                <NavText>Our coffee</NavText></NavLink>
            <NavLink className="menu" to="/item" activeStyle>
                <NavText>For your pleasure</NavText></NavLink>                 
        </NavMenu>       
    </Nav>
    );
 }
export default Navbar;