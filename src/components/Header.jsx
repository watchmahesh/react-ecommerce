/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
    
    const [category, setCategory] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            setCategory(await response.json())
        }
        fetchData()
    }, [])
    // Get Data From Store.
    const cart = useSelector((state) => state.cart)
    const wish = useSelector((state) => state.wish)

    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const toggleSettingDropdown = () => {
        setIsSettingOpen(!isSettingOpen);
    };
    const [isDropdownOpen] = useState(false);
    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.cart.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
        totalPrice = totalPrice.toFixed(2);
        return { totalPrice, totalQuantity };
    };
    const { totalPrice, totalQuantity } = getTotal();
    const getTotalWishListQuantity = () => {
        let total = 0
        wish.wishlist.forEach(item => {
            total += item.quantity
        })
        return total ? total : 0
    }
    return (
        <>
            <header className="li-header-4">

                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="header-top-left">

                                </div>
                            </div>

                            <div className="col-lg-9 col-md-8">
                                <div className="header-top-right">
                                    <ul className="ht-menu">
                                        <li>
                                            <div className="ht-setting-trigger" onClick={toggleSettingDropdown}>
                                                <span>Setting</span>
                                            </div>
                                            {isSettingOpen && (
                                                <div className="setting ht-setting">
                                                    <ul className="ht-setting-list">
                                                        <li>
                                                            <a href="login-register.html">My Account</a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">Checkout</a>
                                                        </li>
                                                        <li>
                                                            <a href="login-register.html">Sign In</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="logo pb-sm-30 pb-xs-30">
                                    <Link to="/">
                                        <img src="/images/menu/logo/1.jpg" alt="" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                                <form action="#" className="hm-searchbox">
                                    <select className="nice-select select-search-category">
                                        <option value="0">All</option>
                                        <option value="10">Laptops</option>

                                    </select>
                                    <input type="text" placeholder="Enter your search key ..." />
                                    <button className="li-btn" type="submit"><i className="fa fa-search"></i></button>
                                </form>
                                {/* <Link className="nav-item nav-link" to="/menu">Menu</Link> */}

                                <div className="header-middle-right">
                                    <ul className="hm-menu">
                                        < li className="hm-wishlist">
                                            <Link to="/wishlist">
                                                <span className="cart-item-count wishlist-item-count" >{getTotalWishListQuantity() || 0}</span>
                                                <i className="fa fa-heart-o"></i>
                                            </Link>
                                        </li>
                                        <Link to="/cart">
                                            <li className={`hm-minicart ${isDropdownOpen ? 'open' : ''}`}>
                                                <div className="hm-minicart-trigger">
                                                    <span className="item-icon"></span>
                                                    <span className="item-text">$ {totalPrice}
                                                        <span className="cart-item-count">{totalQuantity || 0}</span>
                                                    </span>
                                                </div>
                                                <span></span>
                                                <div className="minicart">
                                                    <ul className="minicart-product-list">
                                                        <li>
                                                            <a href="single-product.html" className="minicart-product-image">
                                                                <img src="images/product/small-size/5.jpg" alt="cart products" />
                                                            </a>
                                                            <div className="minicart-product-details">
                                                                <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                                                <span>£40 x 1</span>
                                                            </div>
                                                            <button className="close" title="Remove">
                                                                <i className="fa fa-close"></i>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="single-product.html" className="minicart-product-image">
                                                                <img src="images/product/small-size/6.jpg" alt="cart products" />
                                                            </a>
                                                            <div className="minicart-product-details">
                                                                <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                                                <span>£40 x 1</span>
                                                            </div>
                                                            <button className="close" title="Remove">
                                                                <i className="fa fa-close"></i>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                    <p className="minicart-total">SUBTOTAL: <span>£80.00</span></p>
                                                    <div className="minicart-button">
                                                        <a href="shopping-cart.html" className="li-button li-button-fullwidth li-button-dark">
                                                            <span>View Full Cart</span>
                                                        </a>
                                                        <a href="checkout.html" className="li-button li-button-fullwidth">
                                                            <span>Checkout</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </Link>


                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hb-menu">
                                    <nav>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>

                                            {category ?.map((item)=>(
                                            <li><Link to={`/product-category/${item}`}>{item}</Link></li>
                                           ))}
                                            {/* <li><Link to="/product-category">Accessories</Link></li> */}
                                            {/* <li><Link to="/wishlist">Wishlist</Link></li> */}
                                            <li><Link to="/login">Login</Link></li>
                                            <li><Link to="/logout">Logout</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header