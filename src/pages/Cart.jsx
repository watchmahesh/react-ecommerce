/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem,incrementQuantity } from '../store/cartSlice';
import 'react-toastify/dist/ReactToastify.css';
import { TOAST_CONFIG } from '../contants/custom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const handleRemove = (id) => {
        dispatch(
            removeItem({
                id
            })
        );
        toast.success('Product Removed From Whishlist', TOAST_CONFIG)
    }
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = (id) => {
        dispatch(
            incrementQuantity({
                id
            })
        );
        setQuantity(quantity + 1);
    };
    const getTotal = () => {
        let totalPrice = 0;
        cart.cart.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        return { totalPrice };
    };
    const { totalPrice } = getTotal();

    return (
        <Layout>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Shopping Cart</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Shopping-cart-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="li-product-remove">remove</th>
                                                <th className="li-product-thumbnail">images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="li-product-price">Unit Price</th>
                                                <th className="li-product-quantity">Quantity</th>
                                                <th className="li-product-subtotal">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart?.cart.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="li-product-remove" onClick={() => handleRemove(item.id)} ><i className="fa fa-times"></i></td>
                                                    <td className="li-product-thumbnail"><a href="#"><img src={item.image} alt="" style={{ width: '100px', height: '100px' }} /></a></td>
                                                    <td className="li-product-name"><Link to={`/product-detail/${item.id}`}>{item.title}</Link></td>
                                                    <td className="li-product-price"><span className="amount">$ {item.price}</span></td>

                                                    <td className="quantity">
                                                        <label>Quantity</label>
                                                        <div className="cart-plus-minus">
                                                            <input className="cart-plus-minus-box" value={quantity} type="text" />
                                                            <div className="dec qtybutton" onClick={()=>handleDecrement(item.id)}>
                                                                <i className="fa fa-angle-down"></i>
                                                            </div>
                                                            <div className="inc qtybutton" onClick={()=>handleIncrement(item.id)}>
                                                                <i className="fa fa-angle-up"></i>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="li-product-price"><span className="amount">$ {totalPrice}</span></td>
                                                </tr>
                                            ))}


                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="coupon-all">
                                            <div className="coupon">
                                                <input id="coupon_code" className="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text" />
                                                <input className="button" name="apply_coupon" value="Apply coupon" type="submit" />
                                            </div>
                                            <div className="coupon2">
                                                <input className="button" name="update_cart" value="Update cart" type="submit" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 ml-auto">
                                        <div className="cart-page-total">
                                            <h2>Cart totals</h2>
                                            <ul>
                                                <li>Subtotal <span>{totalPrice}</span></li>
                                                <li>Total <span>{totalPrice}</span></li>
                                            </ul>
                                            <a href="#">Proceed to checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart