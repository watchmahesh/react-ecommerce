/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Layout from '../components/Layout'
import ProductGridView from './ProductGridView'
import ProductListView from './ProductListView'
const ProductByCategory = () => {

    return (
        <Layout>

            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Shop 4 Column</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="content-wraper pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-banner shop-page-banner">
                                <a href="#">
                                    <img src="images/bg-banner/2.jpg" alt="Li's Static Banner"/>
                                </a>
                            </div>
                            <div className="shop-top-bar mt-30">
                                <div className="shop-bar-inner">
                                    <div className="product-view-mode">
                                        <ul className="nav shop-item-filter-list" role="tablist">
                                            <li className="active" role="presentation"><a aria-selected="true" className="active show" data-toggle="tab" role="tab" aria-controls="grid-view" href="#grid-view"><i className="fa fa-th"></i></a></li>
                                            <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="list-view" href="#list-view"><i className="fa fa-th-list"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="toolbar-amount">
                                        <span>Showing 1 to 9 of 15</span>
                                    </div>
                                </div>
                                <div className="product-select-box">
                                    <div className="product-short">
                                        <p>Sort By:</p>
                                        <select className="nice-select">
                                            <option value="trending">Relevance</option>
                                            <option value="sales">Name (A - Z)</option>
                                            <option value="sales">Name (Z - A)</option>
                                            <option value="rating">Price (Low &gt; High)</option>
                                            <option value="date">Rating (Lowest)</option>
                                            <option value="price-asc">Model (A - Z)</option>
                                            <option value="price-asc">Model (Z - A)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="shop-products-wrapper">
                                <div className="tab-content">
                                    <div id="grid-view" className="tab-pane fade active show" role="tabpanel">
                                        <div className="product-area shop-product-area">
                                            <div className="row">
                                                {/* <div className="col-lg-3 col-md-4 col-sm-6 mt-40">
                                                    <div className="single-product-wrap">
                                                        <div className="product-image">
                                                            <a href="single-product.html">
                                                                <img src="images/product/large-size/1.jpg" alt="Li's Product Image"/>
                                                            </a>
                                                            <span className="sticker">New</span>
                                                        </div>
                                                        <div className="product_desc">
                                                            <div className="product_desc_info">
                                                                <div className="product-review">
                                                                    <h5 className="manufacturer">
                                                                        <a href="product-details.html">Graphic Corner</a>
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
                                                                    <li className="add-cart active"><Link to="/cart">Add to cart</Link></li>
                                                                    <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                                                    <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <ProductGridView></ProductGridView>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="list-view" className="tab-pane product-list-view fade" role="tabpanel">
                                        <div className="row">
                                        <ProductListView></ProductListView>
                                            {/* <div className="col">
                                                <div className="row product-layout-list">
                                                    <div className="col-lg-3 col-md-5 ">
                                                        <div className="product-image">
                                                            <a href="single-product.html">
                                                                <img src="images/product/large-size/12.jpg" alt="Li's Product Image"/>
                                                            </a>
                                                            <span className="sticker">New</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-md-7">
                                                        <div className="product_desc">
                                                            <div className="product_desc_info">
                                                                <div className="product-review">
                                                                    <h5 className="manufacturer">
                                                                        <a href="product-details.html">Graphic Corner</a>
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
                                                                <h4><a className="product_name" href="single-product.html">Hummingbird printed t-shirt</a></h4>
                                                                <div className="price-box">
                                                                    <span className="new-price">$46.80</span>
                                                                </div>
                                                                <p>Beach Camera Exclusive Bundle - Includes Two Samsung Radiant 360 R3 Wi-Fi Bluetooth Speakers. Fill The Entire Room With Exquisite Sound via Ring Radiator Technology. Stream And Control R3 Speakers Wirelessly With Your Smartphone. Sophisticated, Modern Desig</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="shop-add-action mb-xs-30">
                                                            <ul className="add-actions-link">
                                                                <li className="add-cart"><a href="#">Add to cart</a></li>
                                                                <li className="wishlist"><a href="wishlist.html"><i className="fa fa-heart-o"></i>Add to wishlist</a></li>
                                                                <li><a className="quick-view" data-toggle="modal" data-target="#exampleModalCenter" href="#"><i className="fa fa-eye"></i>Quick view</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="paginatoin-area">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <p>Showing 1-12 of 13 item(s)</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <ul className="pagination-box">
                                                    <li><a href="#" className="Previous"><i className="fa fa-chevron-left"></i> Previous</a>
                                                    </li>
                                                    <li className="active"><a href="#">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li>
                                                        <a href="#" className="Next"> Next <i className="fa fa-chevron-right"></i></a>
                                                    </li>
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
        </Layout>
    )
}

export default ProductByCategory