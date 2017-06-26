import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Navigation extends Component {
  render() {
    console.log(this.props)
    return(
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
              <NavItem eventKey={1}>
                <Link to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem eventKey={2}>
                <Link to="/browse">
                  Browse
                </Link>
              </NavItem>
              <NavItem eventKey={3}>
                <Link to="/sign-in">
                  Sign In
                </Link>
              </NavItem>
              <NavItem eventKey={4}>
                <Link to="/cart">
                  Cart <Badge>{this.props.quantity}</Badge>
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quantity: (state.cart.quantity)
  }
}

export default connect(mapStateToProps)(Navigation);
