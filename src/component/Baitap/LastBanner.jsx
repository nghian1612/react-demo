import React, { Component } from 'react'

export default class LastBanner extends Component {
    render() {
        return (
            
            <div className="row">
                <div className="col-lg-3 col-sm-3 col-xs-6">
                    <div className="col"><img src="img/promo-banner-img1.png" alt="offer banner1" /></div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6">
                    <div className="col"><img src="img/promo-banner-img2.png" alt="offer banner2" /></div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6">
                    <div className="col"><img src="img/promo-banner-img3.png" alt="offer banner3" /></div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6">
                    <div className="col last"><img src="img/promo-banner-img4.png" alt="offer banner4" /></div>
                </div>
            </div>

        )
    }
}
