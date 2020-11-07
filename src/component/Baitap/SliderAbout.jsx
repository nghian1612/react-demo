import React, { Component } from 'react'

export default class SliderAbout extends Component {
    render() {
        return (
            <div className="slider-items-products">
                <div className="new_title center">
                    <h2>Featured Products</h2>
                </div>
                <div id="featured-slider" className="product-flexslider hidden-buttons">
                    <div className="slider-items slider-width-col4 products-grid">
                        <div className="item">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"> <a className="product-image" title="Sample Product" href="product_detail.html"> <img alt="Sample Product" src="products-img/product10.jpg" /> </a>
                                        <div className="sale-label sale-top-left">sale</div>
                                        <div className="item-box-hover">
                                            <div className="box-inner">
                                                <div className="actions">
                                                    <div className="add_cart">
                                                        <button className="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                    </div>
                                                    <div className="product-detail-bnt"><a href="quick_view.html" className="button detail-bnt"><span>Quick View</span></a></div>
                                                    <span className="add-to-links"><a href="wishlist.html" className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="compare.html" className="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-info">
                                    <div className="info-inner">
                                        <div className="item-title"> <a title="Sample Product" href="product_detail.html"> Sample Product </a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div style={{ width: '80%' }} className="rating" />
                                                    </div>
                                                    <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Item */}
                        <div className="item">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"> <a className="product-image" title="Sample Product" href="product_detail.html"> <img alt="Sample Product" src="products-img/product11.jpg" /></a>
                                        <div className="item-box-hover">
                                            <div className="box-inner">
                                                <div className="actions">
                                                    <div className="add_cart">
                                                        <button className="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                    </div>
                                                    <div className="product-detail-bnt"><a href="quick_view.html" className="button detail-bnt"><span>Quick View</span></a></div>
                                                    <span className="add-to-links"><a href="wishlist.html" className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="compare.html" className="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-info">
                                    <div className="info-inner">
                                        <div className="item-title"> <a title="Sample Product" href="product_detail.html"> Sample Product </a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div style={{ width: '30%' }} className="rating" />
                                                    </div>
                                                    <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box">
                                                    <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                                                    <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Item */}
                        {/* Item */}
                        <div className="item">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"> <a className="product-image" title="Sample Product" href="product_detail.html"> <img alt="Sample Product" src="products-img/product12.jpg" /></a>
                                        <div className="item-box-hover">
                                            <div className="box-inner">
                                                <div className="actions">
                                                    <div className="add_cart">
                                                        <button className="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                    </div>
                                                    <div className="product-detail-bnt"><a href="quick_view.html" className="button detail-bnt"><span>Quick View</span></a></div>
                                                    <span className="add-to-links"><a href="wishlist.html" className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="compare.html" className="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-info">
                                    <div className="info-inner">
                                        <div className="item-title"> <a title="Sample Product" href="product_detail.html"> Sample Product </a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div style={{ width: '100%' }} className="rating" />
                                                    </div>
                                                    <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box">
                                                    <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $100.00 </span> </p>
                                                    <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $90.00 </span> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Item */}
                        <div className="item">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"> <a className="product-image" title="Sample Product" href="product_detail.html"> <img alt="Sample Product" src="products-img/product13.jpg" /> </a>
                                        <div className="new-label new-top-left">new</div>
                                        <div className="item-box-hover">
                                            <div className="box-inner">
                                                <div className="actions">
                                                    <div className="add_cart">
                                                        <button className="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                    </div>
                                                    <div className="product-detail-bnt"><a href="quick_view.html" className="button detail-bnt"><span>Quick View</span></a></div>
                                                    <span className="add-to-links"><a href="wishlist.html" className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="compare.html" className="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-info">
                                    <div className="info-inner">
                                        <div className="item-title"> <a title="Sample Product" href="product_detail.html"> Sample Product </a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div style={{ width: '80%' }} className="rating" />
                                                    </div>
                                                    <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Item */}
                        <div className="item">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"> <a className="product-image" title="Sample Product" href="product_detail.html"> <img alt="Sample Product" src="products-img/product14.jpg" /></a>
                                        <div className="item-box-hover">
                                            <div className="box-inner">
                                                <div className="actions">
                                                    <div className="add_cart">
                                                        <button className="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                    </div>
                                                    <div className="product-detail-bnt"><a href="quick_view.html" className="button detail-bnt"><span>Quick View</span></a></div>
                                                    <span className="add-to-links"><a href="wishlist.html" className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="compare.html" className="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-info">
                                    <div className="info-inner">
                                        <div className="item-title"> <a title="Sample Product" href="product_detail.html"> Sample Product </a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div style={{ width: '30%' }} className="rating" />
                                                    </div>
                                                    <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box">
                                                    <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                                                    <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Item */}
                        {/* Item */}
                        <div className="item">
                            <div className="item-inner">
                                <div className="item-img">
                                    <div className="item-img-info"> <a className="product-image" title="Sample Product" href="product_detail.html"> <img alt="Sample Product" src="products-img/product15.jpg" /></a>
                                        <div className="item-box-hover">
                                            <div className="box-inner">
                                                <div className="actions">
                                                    <div className="add_cart">
                                                        <button className="button btn-cart" type="button"><span>Add to Cart</span></button>
                                                    </div>
                                                    <div className="product-detail-bnt"><a href="quick_view.html" className="button detail-bnt"><span>Quick View</span></a></div>
                                                    <span className="add-to-links"><a href="wishlist.html" className="link-wishlist" title="Add to Wishlist"><span>Add to Wishlist</span></a> <a href="compare.html" className="link-compare add_to_compare" title="Add to Compare"><span>Add to Compare</span></a></span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-info">
                                    <div className="info-inner">
                                        <div className="item-title"> <a title="Sample Product" href="product_detail.html"> Sample Product </a> </div>
                                        <div className="item-content">
                                            <div className="rating">
                                                <div className="ratings">
                                                    <div className="rating-box">
                                                        <div style={{ width: '100%' }} className="rating" />
                                                    </div>
                                                    <p className="rating-links"> <a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                </div>
                                            </div>
                                            <div className="item-price">
                                                <div className="price-box">
                                                    <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $100.00 </span> </p>
                                                    <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $90.00 </span> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Item */}
                    </div>
                </div>
            </div>

        )
    }
}
