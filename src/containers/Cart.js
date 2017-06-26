import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incrementQuantity, decrementQuantity } from '../actions';
import Layout from '../components/Layout';

class Cart extends Component {
  render() {
    return(
      <Layout>
        <h1>Cart</h1>
        <button type="button" onClick={this.props.incrementQuantity}> + </button>
        <button type="button" onClick={this.props.decrementQuantity}> - </button>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    quantity: (state.cart.quantity)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({incrementQuantity, decrementQuantity}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
