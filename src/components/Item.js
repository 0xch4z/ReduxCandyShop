import React from 'react';
import { Badge, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
    <Col xs={12} md={4} lg={3}>
      <div className="item">
        <Link to={`/item=${props.item.name}`}>
          <img
            className="item-image"
            src={props.item.image}
            alt={props.item.name}
          />
      </Link>
        <h4 className="item-header">
          {props.item.name}
          <Badge className="price">
            {"5.00"}
          </Badge>
        </h4>
        <p className="item-description">
          {props.item.description}
        </p>
        <Button bsSize="small">
          {"Add to Cart"}
        </Button>
      </div>
    </Col>
  );
}
