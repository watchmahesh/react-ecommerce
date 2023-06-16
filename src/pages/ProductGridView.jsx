/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TOAST_CONFIG } from '../contants/custom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { addToWishList } from '../store/wishSlice';
import { useParams } from 'react-router-dom';

const ProductGridView = () => {
    const { category} = useParams();

    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            setProduct(await response.json())
        }
        fetchData()
    }, [])
    const handleWishList = (item) => {
        dispatch(
            addToWishList({
                id: item.id,
                title: item.title,
                image: item.image,
                price: item.price
            })
        );
        toast.success('Product added in Whishlist', TOAST_CONFIG)
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

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    //         const data = await response.json();
    //         setProduct(data);
    //     };

    //     fetchData();
    // }, [category]);
    return (
        <>
            {product ? product.map((item) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-40" key={item.id}>
                    <div className="single-product-wrap">
                        <div className="product-image">
                            <Link to="/product-detail">
                                <img src={item.image} alt="Li's Product Image" style={{ width: '100px', height: '100px' }} />
                            </Link>
                            <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                            <div className="product_desc_info">
                                <div className="product-review">
                                    <h5 className="manufacturer">
                                        <Link to={`/product-detail/${item.id}`}></Link>
                                    </h5>

                                </div>
                                <h4><Link to={`/product-detail/${item.id}`} className="product_name">{item.title}</Link></h4>
                                <div className="price-box">
                                    <span className="new-price">$ {item.price}</span>
                                </div>
                            </div>
                            <div className="add-actions">
                                <ul className="add-actions-link">
                                    <li className="add-cart active" onClick={() => handleAddToCart(item)} > Add to cart</li>
                                    {/* <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li> */}
                                    <li><a className="links-details" onClick={() => handleWishList(item)}><i className="fa fa-heart-o"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            )) : []}
        </>
    )
}

export default ProductGridView