import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div>
      <div>Ecommerce</div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/signup">
          <a>signup</a>
        </Link>
        <Link href="/cart">
          <a>cart</a>
        </Link>
        <Link href="/orders">
          <a>orders</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
