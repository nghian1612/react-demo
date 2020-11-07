import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            
                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-xs-6">
                            <div className="col add-banner1">
                                <div className="top-b-text"><strong>Designer Shoes</strong> For Women</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-xs-6">
                            <div className="col free-shipping"><strong>Free Shipping</strong> on order over $199</div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-xs-6">
                            <div className="col add-banner2">
                                <div className="top-b-text"><strong>Luxury Handbags</strong>2015 New Arrive</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-xs-6">
                            <div className="col last offer"><strong>New Collection</strong> Lorem ipsum dolor.</div>
                        </div>
                    </div>
        )
    }
}
