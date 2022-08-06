import React from 'react';

function CartItem(props) {
  const { productid, quantity } = props;
  const [product, setproduct] = React.useState({
    image: '',
    title: '',
    rating: { rate: 0, count: 0 },
    price: 0,
  });
  return (
    <div>
      <h3>{productid}</h3>
      <h3>qty:({quantity})</h3>

      <img width="100" height="100" src={product.image} />
      <h4>product.title</h4>
      <strong>product.price</strong>
      <font size={7} color="orange">
        product.rating.rate - product.rating.count
      </font>
    </div>
  );
}

export default CartItem;
