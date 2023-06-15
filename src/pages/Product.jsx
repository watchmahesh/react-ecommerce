/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Product = () => {
  return (
    <div className="product-area pt-60 pb-50">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="li-product-tab">
                    <ul className="nav li-product-menu">
                       <li><a className="active" data-toggle="tab" href="#li-new-product"><span>New Arrival</span></a></li>
                       <li><a data-toggle="tab" href="#li-bestseller-product"><span>Bestseller</span></a></li>
                       <li><a data-toggle="tab" href="#li-featured-product"><span>Featured Products</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="tab-content">
            <div id="li-new-product" className="tab-pane active show" role="tabpanel">
                <div className="row">
                    <div className="product-active owl-carousel">
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="/images/product/large-size/1.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                        <div className="price-box">
                                            <span className="new-price">$46.80</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="/images/product/large-size/2.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Studio Design</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$71.80</span>
                                            <span className="old-price">$77.22</span>
                                            <span className="discount-percentage">-7%</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="/images/product/large-size/3.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                        <div className="price-box">
                                            <span className="new-price">$46.80</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="images/product/large-size/4.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Studio Design</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$71.80</span>
                                            <span className="old-price">$77.22</span>
                                            <span className="discount-percentage">-7%</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="/images/product/large-size/5.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                        <div className="price-box">
                                            <span className="new-price">$46.80</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="/images/product/large-size/6.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Studio Design</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$71.80</span>
                                            <span className="old-price">$77.22</span>
                                            <span className="discount-percentage">-7%</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="li-bestseller-product" className="tab-pane" role="tabpanel">
                <div className="row">
                    <div className="product-active owl-carousel">
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="/images/product/large-size/12.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                        <div className="price-box">
                                            <span className="new-price">$46.80</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="/images/product/large-size/11.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Studio Design</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$71.80</span>
                                            <span className="old-price">$77.22</span>
                                            <span className="discount-percentage">-7%</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="/images/product/large-size/10.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                        <div className="price-box">
                                            <span className="new-price">$46.80</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="/images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Studio Design</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$71.80</span>
                                            <span className="old-price">$77.22</span>
                                            <span className="discount-percentage">-7%</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="/images/product/large-size/8.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                        <div className="price-box">
                                            <span className="new-price">$46.80</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="product/large-size/7.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Studio Design</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$71.80</span>
                                            <span className="old-price">$77.22</span>
                                            <span className="discount-percentage">-7%</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="li-featured-product" className="tab-pane" role="tabpanel">
                <div className="row">
                    <div className="product-active owl-carousel">
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="images/product/large-size/3.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                        <div className="price-box">
                                            <span className="new-price">$46.80</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
]                        </div>
                        <div className="col-lg-12">
]                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="images/product/large-size/5.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Studio Design</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$71.80</span>
                                            <span className="old-price">$77.22</span>
                                            <span className="discount-percentage">-7%</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="images/product/large-size/7.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                        <div className="price-box">
                                            <span className="new-price">$46.80</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="images/product/large-size/9.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Studio Design</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$71.80</span>
                                            <span className="old-price">$77.22</span>
                                            <span className="discount-percentage">-7%</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="images/product/large-size/11.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Graphic Corner</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Accusantium dolorem1</a></h4>
                                        <div className="price-box">
                                            <span className="new-price">$46.80</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <a href="single-product.html">
                                        <img src="images/product/large-size/12.jpg" alt="Li's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="shop-left-sidebar.html">Studio Design</a>
                                            </h5>
                                            <div className="rating-box">
                                                <ul className="rating">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h4><a className="product_name" href="single-product.html">Mug Today is a good day</a></h4>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$71.80</span>
                                            <span className="old-price">$77.22</span>
                                            <span className="discount-percentage">-7%</span>
                                        </div>
                                    </div>
                                    <div className="add-actions">
                                        <ul className="add-actions-link">
                                            <li className="add-cart active"><a href="#">Add to cart</a></li>
                                            <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                            <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


  )
}

export default Product