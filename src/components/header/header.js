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


const ingredients = [
  'Rum',
  'Gin',
  'Scotch',
  'Brandy',
  'Champagne',
  'Bourbon',
  'Tequila',
  'Vodka',
  'Pisco',
  'Grapes'
];
const categories = [
  'Ordinary Drink',
  'Cocktail',
  'Milk / Float / Shake',
  'Other/Unknown',
  'Shot',
  'Homemade Liqueur',
  'Punch / Party Drink',
  'Beer',
  'Coffee / Tea',
  'Soft Drink / Soda'
];
const glass = [
  'Highball glass',
  'Cocktail glass',
  'Old-fashioned glass',
  'Collins glass',
  'Brandy snifter',
  'White wine glass',
  'Shot glass',
  'Beer Glass',
  'Margarita glass',
  'Martini Glass'
];

const Header = ({onSearch, renderSearch}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function renderDropdownItem(arr) {
    return arr.map(item => {
      let label = renderSearch(item);
      return (  
        <DropdownItem
          key={item}
          onClick={() => onSearch(label)}
          >{label}
          </DropdownItem>
      )
    })
  }

  const itemsIng = renderDropdownItem(ingredients);
  const itemsCateg = renderDropdownItem(categories);
  const itemsGlass = renderDropdownItem(glass);

  // console.log(onSearch(item));
  
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
                {itemsIng}
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cocktail by Category
              </DropdownToggle>
              <DropdownMenu right>
                {itemsCateg}
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cocktail by Glass
              </DropdownToggle>
              <DropdownMenu right>
                {itemsGlass}
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