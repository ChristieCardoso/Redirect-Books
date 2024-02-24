import React from 'react';
import Link from 'next/link';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav className="navbar-container">
      <h1>
        <Link href="/">Redirect Shop</Link>
      </h1>

      <div className='navbar-itens'>
        <ul className="navbar-menu">
          <li>
            <Link href="/shop">Loja</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
          <li>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
        <button type="button" className="cart-icon" aria-label="Carrinho de compras" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        {showCart && <Cart />}
      </div>
    </nav>
  );
};

export default Navbar;
