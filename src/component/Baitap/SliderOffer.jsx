import React, { Component } from 'react'

export default class SliderOffer extends Component {
    render() {
        return (
            <ul className="bxslider">
                <li>
                    <h2>NEW ARRIVALS</h2>
                    <h1>Sale up to 30% off</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Integer sed arcu massa. </p>
                    <a className="shop-now" href="#">Shop now</a> </li>
                <li>
                    <h2>Hello hotness!</h2>
                    <h1>Summer collection</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Integer sed arcu massa. </p>
                    <a className="shop-now" href="#">View More</a> </li>
                <li>
                    <h2>New launch</h2>
                    <h1>Designer dresses on sale</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Integer sed arcu massa. </p>
                    <a className="shop-now" href="#">Learn More</a> </li>
            </ul>

        )
    }
}
