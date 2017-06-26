import React from 'react';
import { Col, Badge } from 'react-bootstrap';

export default (props) => (
  <Col xs={12} md={4} lg={3}>
    <div className="item">
      <img
        className="item-image"
        src={props.item.image}
        alt={props.item.name}
      />
      <h4 className="item-header">
        {props.item.name}
        <Badge className="price">
          {'5.00'}
        </Badge>
      </h4>
      <p className="item-description">
        {props.item.description}
      </p>
    </div>
  </Col>
)
