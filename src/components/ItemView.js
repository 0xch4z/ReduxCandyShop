import React from 'react';
import { Col } from 'react-bootstrap';

export default (props) => {
  return(
    <Col xs={12}>
      <div className="centerfold">
        <Col xs={12} md={4}>
          <img
            src={props.item.image}
            alt={props.item.name}
            className="img-spotlight"
          />
        </Col>
      </div>
    </Col>
  );
}
