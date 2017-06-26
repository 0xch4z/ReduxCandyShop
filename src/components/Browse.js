import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './Layout';
import Item from './Item';

class Browse extends Component {
  render() {
    return(
      <Layout>
        {this.props.items.map(item =>
          <Item
            key={item.id}
            item={item}
          />
        )}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: (state.items)
  }
}

export default connect(mapStateToProps)(Browse);
