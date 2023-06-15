/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const ProductListView = () => {
  return (
    <div>   <div className="col">
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

</div></div>
  )
}

export default ProductListView