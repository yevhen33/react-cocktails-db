import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import './header.scss'; 

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">The Cocktail DB</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/yevhen33">GitHub</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cocktail by ingredient
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Rum</DropdownItem>
                <DropdownItem>Gin</DropdownItem>
                <DropdownItem>Scotch</DropdownItem>
                <DropdownItem>Brandy</DropdownItem>
                <DropdownItem>Champagne</DropdownItem>
                <DropdownItem>Bourbon</DropdownItem>
                <DropdownItem>Tequila</DropdownItem>
                <DropdownItem>Vodka</DropdownItem>
                <DropdownItem>Pisco</DropdownItem>
                <DropdownItem>Grapes</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cocktail by Category
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Ordinary Drink</DropdownItem>
                <DropdownItem>Cocktail</DropdownItem>
                <DropdownItem>Milk / Float / Shake</DropdownItem>
                <DropdownItem>Other/Unknown</DropdownItem>
                <DropdownItem>Shot</DropdownItem>
                <DropdownItem>Homemade Liqueur</DropdownItem>
                <DropdownItem>Punch / Party Drink</DropdownItem>
                <DropdownItem>Beer</DropdownItem>
                <DropdownItem>Coffee / Tea</DropdownItem>
                <DropdownItem>Soft Drink / Soda</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cocktail by Glass
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Highball glass</DropdownItem>
                <DropdownItem>Cocktail glass</DropdownItem>
                <DropdownItem>Old-fashioned glass</DropdownItem>
                <DropdownItem>Collins glass</DropdownItem>
                <DropdownItem>Brandy snifter</DropdownItem>
                <DropdownItem>White wine glass</DropdownItem>
                <DropdownItem>Shot glass</DropdownItem>
                <DropdownItem>Beer Glass</DropdownItem>
                <DropdownItem>Margarita glass</DropdownItem>
                <DropdownItem>Martini Glass</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
          <NavbarText>Pleasant Use</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;