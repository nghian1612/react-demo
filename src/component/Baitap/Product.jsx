import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (       
                    <div className="row">
                        <div className="product-grid-view">
                            <div className="col-md-12">
                                <div className="std">
                                    <div className="home-tabs wow bounceInUp animated">
                                        <div className="producttabs">
                                            <div id="magik_producttabs1" className="magik-producttabs">
                                                {/*<h3></h3>*/}
                                                <div className="magik-pdt-container">
                                                    {/*Begin Tab Nav */}
                                                    <div className="magik-pdt-nav">
                                                        <ul className="pdt-nav">
                                                            <li className="item-nav tab-loaded tab-nav-actived" data-type="order" data-catid data-orderby="best_sales" data-href="pdt_best_sales"><span className="title-navi">Best Seller</span></li>
                                                            <li className="item-nav" data-type="order" data-catid data-orderby="new_arrivals" data-href="pdt_new_arrivals"><span className="title-navi">New Arrivals</span></li>
                                                        </ul>
                                                    </div>
                                                    {/* End Tab Nav */}
                                                    {/*Begin Tab Content */}
                                                    <div className="magik-pdt-content wide-5">
                                                        <div className="pdt-content is-loaded pdt_best_sales tab-content-actived">
                                                            <ul className="pdt-list products-grid-home zoomOut play">
                                                                <li className="item item-animate wide-first">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product1.jpg" alt="Sample Product" /></a>
                                                                                <div className="new-label new-top-left">New</div>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '80%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box"><span className="regular-price"><span className="price">$125.00</span> </span> </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item item-animate">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product2.jpg" alt="Sample Product" /></a>
                                                                                <div className="sale-label sale-top-left">Sale</div>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '40%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box">
                                                                                            <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                                                            <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item item-animate">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product3.jpg" alt="Sample Product" /></a>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '0%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box">
                                                                                            <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                                                            <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item last item-animate">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product4.jpg" alt="Sample Product" /></a>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '100%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box">
                                                                                            <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                                                            <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item item-animate  wide-first">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product5.jpg" alt="Sample Product" /></a>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '100%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box">
                                                                                            <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                                                            <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item item-animate">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product6.jpg" alt="Sample Product" /></a>
                                                                                <div className="new-label new-top-left">New</div>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '80%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box"><span className="regular-price"><span className="price">$125.00</span> </span> </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item item-animate">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product7.jpg" alt="Sample Product" /></a>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '40%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box">
                                                                                            <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                                                            <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item item-animate">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product8.jpg" alt="Sample Product" /></a>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '0%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box">
                                                                                            <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                                                            <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="pdt-content pdt_new_arrivals is-loaded">
                                                            <ul className="pdt-list products-grid-home zoomOut play">
                                                                <li className="item item-animate wide-first">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product11.jpg" alt="Sample Product" /></a>
                                                                                <div className="new-label new-top-left">New</div>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '80%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box"><span className="regular-price"><span className="price">$125.00</span> </span> </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item item-animate">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product13.jpg" alt="Sample Product" /></a>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '0%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box">
                                                                                            <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                                                            <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item item-animate">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product15.jpg" alt="Sample Product" /></a>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '100%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box">
                                                                                            <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$90.00 </span> </p>
                                                                                            <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$80.00 </span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item last item-animate">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product1.jpg" alt="Sample Product" /></a>
                                                                                <div className="new-label new-top-left">New</div>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '80%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box"><span className="regular-price"><span className="price">$125.00</span> </span> </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item item-animate wide-first">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product2.jpg" alt="Sample Product" /></a>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '40%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box">
                                                                                            <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                                                            <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item item-animate">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product3.jpg" alt="Sample Product" /></a>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '0%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box">
                                                                                            <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                                                            <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item item-animate">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product4.jpg" alt="Sample Product" /></a>
                                                                                <div className="sale-label sale-top-right">Sale</div>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '100%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box">
                                                                                            <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                                                            <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="item last item-animate">
                                                                    <div className="item-inner">
                                                                        <div className="item-img">
                                                                            <div className="item-img-info"><a href="product_detail.html" title="Sample Product" className="product-image"><img src="products-img/product5.jpg" alt="Sample Product" /></a>
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
                                                                                <div className="item-title"><a href="product_detail.html" title="Sample Product">Sample Product</a> </div>
                                                                                <div className="item-content">
                                                                                    <div className="rating">
                                                                                        <div className="ratings">
                                                                                            <div className="rating-box">
                                                                                                <div className="rating" style={{ width: '100%' }} />
                                                                                            </div>
                                                                                            <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a href="#">Add Review</a> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item-price">
                                                                                        <div className="price-box">
                                                                                            <p className="old-price"><span className="price-label">Regular Price:</span> <span className="price">$100.00 </span> </p>
                                                                                            <p className="special-price"><span className="price-label">Special Price</span> <span className="price">$90.00 </span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
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
                    </div>
        )
    }
}
