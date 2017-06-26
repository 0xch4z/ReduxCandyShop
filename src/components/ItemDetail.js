import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './Layout';
import ItemView from './ItemView';

class ItemDetail extends Component {
  render() {
    const item = this.props.items.filter(item =>
      item.name === (this.props.match.params.name).replace("%20", " ")
    )[0] || null;
    console.log(item);
    return(
      <Layout>
        <h1>{item.name}</h1>
        <ItemView item={item} />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(ItemDetail);
