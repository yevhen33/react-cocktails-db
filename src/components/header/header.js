import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { Link } from "react-router-dom";

import './header.scss'; 


const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/"><Link to='/'>The Cocktail DB</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/yevhen33">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="search"><Link to='/by_ingredient'>Search by ingredient</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="search"><Link to='/by_category'>Search by Category</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="search"><Link to='/by_glass'>Search by Glass</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="search"><Link to='/about_alcohol'>About Alcohol</Link></NavLink>
            </NavItem>

          </Nav>
          <NavbarText>Pleasant Use</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;