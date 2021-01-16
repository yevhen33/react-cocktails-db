import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
          <Link className="navbar-brand" to='/'>The Cocktail DB</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/yevhen33">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <Link className="search nav-link" to='/by_ingredient'>Search by ingredient</Link>
            </NavItem>
            <NavItem>
              <Link className="search nav-link" to='/by_category'>Search by Category</Link>
            </NavItem>
            <NavItem>
              <Link className="search nav-link" to='/by_glass'>Search by Glass</Link>
            </NavItem>
            <NavItem>
              <Link className="search nav-link" to='/about_alcohol'>About Alcohol</Link>
            </NavItem>

          </Nav>
          <NavbarText>Pleasant Use</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;