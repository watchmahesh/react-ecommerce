import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../pages/Cart';
import Header from './Header';

const TotalComponent = () => {
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const { totalPrice, totalQuantity } = getTotal();

  return <div>
          {/* <Cart totalPrice={totalPrice} totalQuantity={totalQuantity} />
          <Header totalPrice={totalPrice} totalQuantity={totalQuantity} /> */}

  </div>;
};

export default TotalComponent;