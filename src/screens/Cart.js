import React, { useEffect, useState } from 'react';
import { addToCart } from '../actions/cartActions';
import { useDispatch,useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
function Cart(props) {
    const cartItems = useSelector(state => state.ct.carts);
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    useEffect(() => {
      if (productId) {
        dispatch(addToCart(productId, qty));
      }
    }, []);
    let res = cartItems.map((cart)=>(
      <CartItem cart={cart}/>
    ));
    return(
      <div>
        {res}
      </div>
    );
}

export default Cart;
