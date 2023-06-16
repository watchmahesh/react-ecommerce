/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TOAST_CONFIG } from '../contants/custom';
import { removeWishItem } from '../store/wishSlice';
import { addToCart } from '../store/cartSlice';

const WishList = () => {
    const dispatch = useDispatch()
    const wish = useSelector((state) => state.wish)
    const handleRemove = (id) => {
        dispatch(
            removeWishItem({
                id
            })
        );
        toast.success('Product Removed From Whishlist', TOAST_CONFIG)
    }

    const handleAddToCart = (item) => {
        dispatch(
            addToCart({
                id: item.id,
                title: item.title,
                image: item.image,
                price: item.price
            })
        );
        toast.success('Product added to cart', TOAST_CONFIG);
    };

    return (
        <Layout>

            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Wishlist</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="wishlist-area pt-60 pb-60">
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
                                                <th className="li-product-add-cart">add to cart</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wish.wishlist ? wish.wishlist.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="li-product-remove" onClick={() => handleRemove(item.id)} ><i className="fa fa-times"></i></td>
                                                    <td className="li-product-thumbnail"><a href="#"><img src={item.image} alt="" style={{ width: '100px', height: '100px' }} /></a></td>
                                                    <td className="li-product-name"><Link to={`/product-detail/${item.id}`}>{item.title}</Link></td>
                                                    <td className="li-product-price"><span className="amount">$ {item.price}</span></td>
                                                    <td className="li-product-add-cart" onClick={() => handleAddToCart(item)}><a href="#">add to cart</a></td>
                                                </tr>
                                            )) : []}


                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default WishList