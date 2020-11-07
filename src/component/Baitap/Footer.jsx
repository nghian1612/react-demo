import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <section className="footer-navbar">
                    <div className="footer-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 col-lg-8">
                                    <div className="footer-column pull-left collapsed-block">
                                        <h4>Shopping Guide<a className="expander visible-xs" href="#TabBlock-1">+</a></h4>
                                        <div className="tabBlock" id="TabBlock-1">
                                            <ul className="links">
                                                <li className="first"><a href="#" title="How to buy">How to buy</a></li>
                                                <li><a href="faq.html" title="FAQs">FAQs</a></li>
                                                <li><a href="#" title="Payment">Payment</a></li>
                                                <li><a href="#" title="Shipment</a>">Shipment</a></li>
                                                <li><a href="#" title="Where is my order?">Where is my order?</a></li>
                                                <li className="last"><a href="#" title="Return policy">Return policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer-column pull-left collapsed-block">
                                        <h4>Style Advisor<a className="expander visible-xs" href="#TabBlock-2">+</a></h4>
                                        <div className="tabBlock" id="TabBlock-2">
                                            <ul className="links">
                                                <li className="first"><a title="Your Account" href="login.html">Your Account</a></li>
                                                <li><a title="Information" href="#">Information</a></li>
                                                <li><a title="Addresses" href="#">Addresses</a></li>
                                                <li><a title="Addresses" href="#">Discount</a></li>
                                                <li><a title="Orders History" href="#">Orders History</a></li>
                                                <li className="last"><a title=" Additional Information" href="#">Additional Information</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer-column pull-left collapsed-block">
                                        <h4>Information<a className="expander visible-xs" href="#TabBlock-3">+</a></h4>
                                        <div className="tabBlock" id="TabBlock-3">
                                            <ul className="links">
                                                <li className="first"><a href="#" title="privacy policy">Privacy policy</a></li>
                                                <li><a href="#" title="Search Terms">Search Terms</a></li>
                                                <li><a href="#" title="Advanced Search">Advanced Search</a></li>
                                                <li><a href="contact_us.html" title="Contact Us">Contact Us</a></li>
                                                <li><a href="#" title="Suppliers">Suppliers</a></li>
                                                <li className=" last"><a href="#" title="Our stores" className="link-rss">Our stores</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-lg-4">
                                    <div className="footer-column-last">
                                        <div className="newsletter-wrap collapsed-block">
                                            <h4>Sign up for emails<a className="expander visible-xs" href="#TabBlock-4">+</a></h4>
                                            <div className="tabBlock" id="TabBlock-4">
                                                <form id="newsletter-validate-detail" method="post" action="#">
                                                    <div id="container_form_news">
                                                        <div id="container_form_news2">
                                                            <input type="text" className="input-text required-entry validate-email" defaultValue="Enter your email address" onfocus=" this.value='' " title="Sign up for our newsletter" id="newsletter" name="email" />
                                                            <button className="button subscribe" title="Subscribe" type="submit"><span>Subscribe</span></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="social">
                                            <h4>Follow Us</h4>
                                            <ul className="link">
                                                <li className="fb pull-left"><a href="#" /></li>
                                                <li className="tw pull-left"><a href="#" /></li>
                                                <li className="googleplus pull-left"><a href="#" /></li>
                                                <li className="rss pull-left"><a href="#" /></li>
                                                <li className="pintrest pull-left"><a href="#" /></li>
                                                <li className="linkedin pull-left"><a href="#" /></li>
                                                <li className="youtube pull-left"><a href="#" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-middle">
                        <div className="container">
                            <div className="row">
                                <div style={{ textAlign: 'center' }}><a href="index.html"><img src="img/footer-logo.png" alt="footer-logo" /></a></div>
                                <address>
                                    <i className="icon-location-arrow" /> 123 Main Street, Anytown, CA 12345  USA <i className="icon-mobile-phone" /><span> +(408) 394-7557</span> <i className="icon-envelope" /><a href="mailto:support@magikcommerce.com">support@magikcommerce.com</a>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-5 col-xs-12 coppyright">© 2015 Magikcommerce. All Rights Reserved.</div>
                                <div className="col-sm-7 col-xs-12 company-links">
                                    <ul className="links">
                                        <li><a title="Magento Themes" href="#">Magento Themes</a></li>
                                        <li><a title="Premium Themes" href="#">Premium Themes</a></li>
                                        <li><a title="Responsive Themes" href="#">Responsive Themes</a></li>
                                        <li className="last"><a title="Magento Extensions" href="#">Magento Extensions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        )
    }
}
