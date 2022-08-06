import CartItem from '../components/CartItem';
function Cart({ a }) {
  if (a.length === 0)
    return (
      <div>
        {' '}
        <h2>no items in cart</h2>{' '}
      </div>
    );

  const myCart = a[0].products;

  return (
    <div>
      <h2>Cart page {myCart.length}</h2>
      {myCart.map((item) => (
        <CartItem key={item.productId} {...item} />
      ))}
    </div>
  );
}

export default Cart;

export async function getServerSideProps() {
  const myCart = await fetch('https://fakestoreapi.com/carts/user/2').then(
    (d) => d.json()
  );

  return {
    props: { a: myCart },
  };
}
