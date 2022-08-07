import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div
      className="
      my-menu 
      bg-black text-white
      flex justify-between items-center 
      sticky top-0 
      px-5 
      "
    >
      <div className="left">
        <h1 className="p-2 text-4xl">Ecommerce</h1>
      </div>

      <div className="right">
        <Link href="/">
          <a className="p-2">Home</a>
        </Link>
        <Link href="/login">
          <a className="p-2">Login</a>
        </Link>
        <Link href="/signup">
          <a className="p-2">signup</a>
        </Link>
        <Link href="/cart">
          <a className="p-2">cart</a>
        </Link>
        <Link href="/orders">
          <a className="p-2">orders</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
