import React, { Component } from 'react'

export default class LastBlog extends Component {
    render() {
        return (
            <div className="row">
                <div className="new_title center">
                    <h2>Latest Blog</h2>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-3">
                    <div className="blog_inner">
                        <div className="blog-img"> <img src="img/blog-img1.jpg" alt="Blog image" />
                            <div className="mask"> <a className="info" href="blog_detail.html">Read More</a> </div>
                        </div>
                        <h3><a href="blog_detail.html">Pellentesque habitant morbi</a> </h3>
                        <div className="post-date"><i className="icon-calendar" /> Apr 10, 2014</div>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sit  ... </p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-3">
                    <div className="blog_inner">
                        <div className="blog-img"> <img src="img/blog-img2.jpg" alt="Blog image" />
                            <div className="mask"> <a className="info" href="blog_detail.html">Read More</a> </div>
                        </div>
                        <h3><a href="blog_detail.html">Pellentesque habitant morbi</a> </h3>
                        <div className="post-date"><i className="icon-calendar" /> Apr 10, 2014</div>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sit  ... </p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-3">
                    <div className="blog_inner">
                        <div className="blog-img"> <img src="img/blog-img3.jpg" alt="Blog image" />
                            <div className="mask"> <a className="info" href="blog_detail.html">Read More</a> </div>
                        </div>
                        <h3><a href="blog_detail.html">Pellentesque habitant morbi</a> </h3>
                        <div className="post-date"><i className="icon-calendar" /> Apr 10, 2014</div>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sit  ... </p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-3">
                    <div className="blog_inner">
                        <div className="blog-img"> <img src="img/blog-img4.jpg" alt="Blog image" />
                            <div className="mask"> <a className="info" href="blog_detail.html">Read More</a> </div>
                        </div>
                        <h3><a href="blog_detail.html">Pellentesque habitant morbi</a> </h3>
                        <div className="post-date"><i className="icon-calendar" /> Apr 10, 2014</div>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sit  ... </p>
                    </div>
                </div>
            </div>

        )
    }
}
