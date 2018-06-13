import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

const Header = () => (
  <div className="headerLinks">
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <dl>HeaderImage</dl>
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          <Link to="/info">
            <dl>Info</dl>
          </Link>
        </NavItem>
        <NavItem eventKey={2} href="#">
          <Link to="/code">
            <dl>Code</dl>
          </Link>
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>
            <Link to="/images">
              <dl>Images</dl>
            </Link>
          </MenuItem>
          <MenuItem eventKey={3.2}>
            <Link to="/videos">
              <dl>Videos</dl>
            </Link>
          </MenuItem>
          <MenuItem eventKey={3.3} />
          <MenuItem divider />
          <MenuItem eventKey={3.4} />
        </NavDropdown>
        <NavItem>
          <Link to="/contact">
            <dl>Contact</dl>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default Header;
