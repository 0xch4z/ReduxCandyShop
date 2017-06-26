import React from 'react';

import Navigation from '../containers/Navigation';

export default (props) => (
  <div id="Layout">
    <Navigation />
    <div className="main container">
      {props.children}
    </div>
    <footer>
      <p>{"© 2017 Charles Kenney"}</p>
    </footer>
  </div>
);
