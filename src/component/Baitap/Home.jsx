import React, { Component } from 'react'
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import LastBanner from './LastBanner';
import LastBlog from './LastBlog';
import Product from './Product/Product.jsx';
import Slider from './Slider';
import SliderAbout from './SliderAbout';
import SliderOffer from './SliderOffer';
import SliderTrademark from './SliderTrademark';

export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <div className="top-banner-section wow bounceInUp animated">
                <div className="container">
                <Banner />
                </div>
                </div>
                <div className="main-col">
                <div className="container">
                <Product />
                </div>
                </div>
                <section className="featured-pro container wow bounceInUp animated">
                    <SliderAbout />
                </section>
                <div className="offer-slider wow animated parallax parallax-2">
                <div className="container">
                    <SliderOffer />
                </div>
                </div>
                <section className="latest-blog wow bounceInUp animated">
                    <div className="container">
                        <LastBlog />
                    </div>
                </section>
                <div className="offer-banner-section wow bounceInUp animated">
                <div className="container">
                    <LastBanner />
                </div>
                </div>
                <div className="brand-logo">
                <div className="container">
                    <SliderTrademark />
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}
