import React from 'react';
function Card(props) {
  return (
    <div>
      <h4>
        <img src={props.image} width="100" height="100" />
      </h4>
      <h4>{props.title}</h4>
      <h4>{props.description}</h4>
      <h4>{props.category}</h4>
      <h4>{props.price}</h4>
      <h4>{props.rating.rate}</h4>
      <h4>{props.rating.count}</h4>
    </div>
  );
}

export default Card;
