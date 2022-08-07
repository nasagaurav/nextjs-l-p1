import React from 'react';
function Card(props) {
  return (
    <div className="w-40 m-2 p-2 shadow-[0px_10px_10px_grey]">
      <img className="object-cover w-24 h-24" src={props.image} />

      <h4>{props.title.slice(0, 20)}</h4>
      <h4>{props.category}</h4>
      <h4>{props.price}</h4>
      <h4>{props.rating.rate}</h4>
      <h4>{props.rating.count}</h4>
    </div>
  );
}

export default Card;
