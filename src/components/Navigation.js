import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';

export default (props) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <strong><Link to="/">Redux Candy Shop</Link></strong>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1}><Link to="/about">About</Link></NavItem>
          <NavItem eventKey={1}><Link to="/browse">Browse</Link></NavItem>
          <NavItem eventKey={1}><Link to="/sign-in">Sign In</Link></NavItem>
          <NavItem eventKey={2}><Link to="/cart">Cart <Badge>{props.cartQuantity}</Badge></Link></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
