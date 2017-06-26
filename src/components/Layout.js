import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import Navigation from './Navigation';

class Layout extends Component {
  render() {
    return(
      <div id="Layout">
        <Navigation cartQuantity={this.props.quantity} />
        <div className="main container">
          {this.props.children}
        </div>
        <footer>
          <p>{'© 2017 Charles Kenney'}</p>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quantity: (state.cart.quantity)
  }
}

export default connect(mapStateToProps)(Layout);
