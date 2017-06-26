import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';

import Layout from './Layout';

export default () => (
  <Layout>
    <Jumbotron>
      <h1>{"Hello, Raleigh!"}</h1>
      <p>
        {`
          We've just opened our first location in Raleigh. Head down to
          835 Main Street and see what all the buzz is about!
        `}
      </p>
      <p>
        <Button bsStyle="primary">
          <Link className="a" to="/browse">
            {"Shop Now"}
          </Link>
        </Button>
      </p>
    </Jumbotron>
  </Layout>
);
