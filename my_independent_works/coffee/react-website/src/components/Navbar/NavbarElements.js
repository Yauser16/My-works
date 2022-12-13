

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav` 
  position: absolute;

`;
  
export const NavLink = styled(Link)` 
  display: table;
  
`;
  
export const NavText = styled.p`  
 font-size: 12px;
 display: table-cell;
 vertical-align: bottom;  
 font-family: 'Merienda', cursive;
 color: white;
`;
  
export const NavMenu = styled.div` 
    width:355px;
    height: 40px;
    display: flex;  
    margin-top: 38px;
    margin-left: 135px;
    justify-content: space-between;
`;