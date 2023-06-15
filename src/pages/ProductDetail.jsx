/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Layout from '../components/Layout'
import SimilarProduct from './SimilarProduct'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TOAST_CONFIG } from '../contants/custom';
import { addToCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const ProductDetail = () => {
    const dispatch = useDispatch()

    const [product, setProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchData();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
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
                            <li className="active">Single Product Normal</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="content-wraper">
                <div className="container">
                    <div className="row single-product-area">
                        <div className="col-lg-5 col-md-6">
                            <div className="product-details-left">
                                <div className="product-details-images slider-navigation-1">
                                    <div className="lg-image">
                                        <img src={product.image} alt="product image" />
                                    </div>
                                    {/* <div className="lg-image">
                                        <img src="images/product/large-size/2.jpg" alt="product image"/>
                                    </div>
                                    <div className="lg-image">
                                        <img src="images/product/large-size/3.jpg" alt="product image"/>
                                    </div>
                                    <div className="lg-image">
                                        <img src="images/product/large-size/4.jpg" alt="product image"/>
                                    </div>
                                    <div className="lg-image">
                                        <img src="images/product/large-size/5.jpg" alt="product image"/>
                                    </div>
                                    <div className="lg-image">
                                        <img src="images/product/large-size/6.jpg" alt="product image"/>
                                    </div> */}
                                </div>
                                {/* <div className="product-details-thumbs slider-thumbs-1">
                                    <div className="sm-image"><img src="images/product/small-size/1.jpg" alt="product image thumb"/></div>
                                    <div className="sm-image"><img src="images/product/small-size/2.jpg" alt="product image thumb"/></div>
                                    <div className="sm-image"><img src="images/product/small-size/3.jpg" alt="product image thumb"/></div>
                                    <div className="sm-image"><img src="images/product/small-size/4.jpg" alt="product image thumb"/></div>
                                    <div className="sm-image"><img src="images/product/small-size/5.jpg" alt="product image thumb"/></div>
                                    <div className="sm-image"><img src="images/product/small-size/6.jpg" alt="product image thumb"/></div>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6">
                            <div className="product-details-view-content sp-normal-content pt-60">
                                <div className="product-info">
                                    <h2>{product.title}</h2>
                                    <div className="price-box pt-20">
                                        <span className="new-price new-price-2">$ {product.price}</span>
                                    </div>
                                    <div className="product-desc">
                                        <p>
                                            <span>{product.description}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="single-add-to-cart">
                                        <form action="#" className="cart-quantity">
                                            <div className="quantity">
                                                <label>Quantity</label>
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value="1" type="text" />
                                                    <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                    <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                </div>
                                            </div>
                                            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to cart</button>
                                        </form>
                                    </div>
                                    <div className="product-additional-info">
                                        <div className="product-social-sharing">
                                            <ul>
                                                <li className="facebook"><a href="#"><i className="fa fa-facebook"></i>Facebook</a></li>
                                                <li className="twitter"><a href="#"><i className="fa fa-twitter"></i>Twitter</a></li>
                                                <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i>Google +</a></li>
                                                <li className="instagram"><a href="#"><i className="fa fa-instagram"></i>Instagram</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SimilarProduct></SimilarProduct>
        </Layout>
    )
}

export default ProductDetail