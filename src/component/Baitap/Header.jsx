import React from 'react'

export default function Header() {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 col-xs-12">
                                {/* Header Logo */}
                                <div className="logo"><a title="Magento Commerce" href="index.html"><img alt="Magento Commerce" src="img/logo.png" /></a></div>
                                {/* End Header Logo */}
                            </div>
                            <div className="col-lg-9 col-xs-12 right_menu">
                                <div className="toplinks">
                                    {/* Default Welcome Message */}
                                    <div className="welcome-msg hidden-xs">Default welcome msg! </div>
                                    {/* End Default Welcome Message */}
                                    <div className="links">
                                        <div className="myaccount"><a title="My Account" href="login.html"><span className="hidden-xs">My Account</span></a></div>
                                        <div className="wishlist"><a title="My Wishlist" href="wishlist.html"><span className="hidden-xs">Wishlist</span></a></div>
                                        <div className="check"><a title="Checkout" href="checkout.html"><span className="hidden-xs">Checkout</span></a></div>
                                        <div className="demo"><a title="Blog" href="blog.html"><span className="hidden-xs">Blog</span></a></div>
                                        {/* Header Company */}
                                        <div className="dropdown block-company-wrapper hidden-xs"><a role="button" data-toggle="dropdown" data-target="#" className="block-company dropdown-toggle" href="#">Company <span className="caret" /></a>
                                            <ul className="dropdown-menu" role="menu">
                                                <li role="presentation"><a role="menuitem" tabIndex={-1} href="about_us.html">About Us</a></li>
                                                <li role="presentation"><a role="menuitem" tabIndex={-1} href="#">Customer Service</a></li>
                                                <li role="presentation"><a role="menuitem" tabIndex={-1} href="#">Privacy Policy</a></li>
                                                <li role="presentation"><a role="menuitem" tabIndex={-1} href="sitemap.html">Site Map</a></li>
                                                <li role="presentation"><a role="menuitem" tabIndex={-1} href="#">Search Terms</a></li>
                                                <li role="presentation"><a role="menuitem" tabIndex={-1} href="#">Advanced Search</a></li>
                                            </ul>
                                        </div>
                                        {/* End Header Company */}
                                        <div className="login"><a href="login.html"><span className="hidden-xs">Log In</span></a></div>
                                    </div>
                                    {/* links */}
                                </div>
                                {/* Search-col */}
                                <div className="search-box pull-right">
                                    <form action="http://htmldemo.magikcommerce.com/ecommerce/classic-html-template/version_1/cat" method="POST" id="search_mini_form" name="Categories">
                                        <input type="text" placeholder="Search entire store here..." defaultValue="Search" maxLength={70} name="search" id="search" />
                                        <button type="button" className="search-btn-bg"><span className="glyphicon glyphicon-search" />&nbsp;</button>
                                    </form>
                                </div>
                                {/* End Search-col */}
                                {/* Header Language */}
                                <div className="lang-curr">
                                    <div className="form-language">
                                        <ul className="lang">
                                            <li className><a href="#" title="English"><img src="img/english.png" alt="English" /> <span>English</span></a></li>
                                            <li className><a href="#" title="Francais"><img src="img/francais.png" alt="Francais" /> <span>francais</span></a></li>
                                            <li className><a href="#" title="German"><img src="img/german.png" alt="German" /> <span>german</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="form-currency">
                                        <ul className="currencies_list">
                                            <li className><a className title="Dollar" href="#">$</a></li>
                                            <li className><a className title="Euro" href="#">€</a></li>
                                            <li className><a className title="Pound" href="#">£</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* End Header Currency */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="mm-toggle-wrap">
                <div className="mm-toggle"><i className="icon-align-justify" /><span className="mm-label">Menu</span> </div>
            </div>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="nav-inner col-lg-12">
                            <ul id="nav" className="hidden-xs">
                                <li className="level0 parent drop-menu active"><a href="index.html"><span>Home</span></a>
                                    <ul className="level1">
                                        <li className="level1 first parent"><a href="index.html"><span>Home Version 1</span></a></li>
                                        <li className="level1 parent"><a href="../version_2/index.html"><span>Home Version 2</span></a></li>
                                        <li className="level1 parent"><a href="../version_3/index.html"><span>Home Version 3</span></a></li>
                                    </ul>
                                </li>
                                <li className="level0 parent drop-menu"><a href="#"><span>Pages</span></a>
                                    <ul className="level1">
                                        <li className="level1 first"><a href="grid.html"><span>Grid</span></a></li>
                                        <li className="level1 nav-10-2"><a href="list.html"><span>List</span></a></li>
                                        <li className="level1 nav-10-3"><a href="product_detail.html"><span>Product Detail</span></a></li>
                                        <li className="level1 nav-10-4"><a href="shopping_cart.html"><span>Shopping Cart</span></a></li>
                                        <li className="level1 first parent"><a href="checkout.html"><span>Checkout</span></a></li>
                                        <li className="level1 nav-10-4"><a href="wishlist.html"><span>Wishlist</span></a></li>
                                        <li className="level1"><a href="dashboard.html"><span>Dashboard</span></a></li>
                                        <li className="level1"><a href="multiple_addresses.html"><span>Multiple Addresses</span></a></li>
                                        <li className="level1"><a href="about_us.html"><span>About us</span></a></li>
                                        <li className="level1"><a href="compare.html"><span>Compare</span></a></li>
                                        <li className="level1"><a href="faq.html"><span>FAQ</span></a></li>
                                        <li className="level1"><a href="quick_view.html"><span>Quick view </span></a></li>
                                        <li className="level1"><a href="login.html"><span>Login</span></a></li>
                                        <li className="level1 first parent"><a href="blog.html"><span>Blog</span></a>
                                            <ul className="level2 right-sub">
                                                <li className="level2 nav-2-1-1 first"><a href="blog_detail.html"><span>Blog Detail</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="level1"><a href="contact_us.html"><span>Contact us</span></a></li>
                                        <li className="level1"><a href="404error.html"><span>404 Error Page</span></a></li>
                                    </ul>
                                </li>
                                <li className="mega-menu"><a href="grid.html" className="level-top"><span>Women</span></a>
                                    <div style={{ left: 0, display: 'none' }} className="level0-wrapper dropdown-6col">
                                        <div className="container">
                                            <div className="level0-wrapper2">
                                                <div className="col-1">
                                                    <div className="nav-block nav-block-center">
                                                        <ul className="level0">
                                                            <li className="level1 nav-6-1 parent item"><a href="grid.html" className><span>Stylish Bag</span></a>
                                                                <ul className="level1">
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html" className><span>Clutch Handbags</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html" className><span>Diaper Bags</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html" className><span>Bags</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html" className><span>Hobo handbags</span></a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Material Bag</span></a>
                                                                <ul className="level1">
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Beaded Handbags</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Fabric Handbags</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Handbags</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Leather Handbags</span></a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Shoes</span></a>
                                                                <ul className="level1">
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Flat Shoes</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Flat Sandals</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Boots</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Heels</span></a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Jwellery</span></a>
                                                                <ul className="level1">
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Bracelets</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid-2.html"><span>Necklaces &amp; Pendent</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Pendants</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Pins &amp; Brooches</span></a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Dresses</span></a>
                                                                <ul className="level1">
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Casual Dresses</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Evening</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Designer</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Party</span></a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Swimwear</span></a>
                                                                <ul className="level1">
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Swimsuits</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="#/swimwear/beach-clothing.html"><span>Beach Clothing</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Clothing</span></a></li>
                                                                    <li className="level2 nav-6-1-1"><a href="grid.html"><span>Bikinis</span></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/*nav-block nav-block-center*/}
                                                <div className="col-2">
                                                    <div className="menu_image"><a href="#" title><img src="img/menu_image.jpg" alt="menu_image" /></a></div>
                                                    <div className="menu_image1"><a href="#" title><img src="img/menu_image1.jpg" alt="menu_image" /></a></div>
                                                </div>
                                            </div>
                                            {/*level0-wrapper2*/} </div>
                                    </div>
                                </li>
                                <li className="mega-menu"><a href="grid.html" className="level-top"><span>Men</span></a>
                                    <div style={{ left: 0, display: 'none' }} className="level0-wrapper dropdown-6col">
                                        <div className="container">
                                            <div className="level0-wrapper2">
                                                <div className="nav-block nav-block-center">
                                                    <ul className="level0">
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html" className><span>Shoes</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Sport Shoes</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Casual Shoes</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Leather Shoes</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>canvas shoes</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Dresses</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Casual Dresses</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Evening</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Designer</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Party</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Jackets</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Coats</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Formal Jackets</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Leather Jackets</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Blazers</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Watches</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Fasttrack</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Casio</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Titan</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Tommy-Hilfiger</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Sunglasses</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Ray Ban</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Fasttrack</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Police</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Oakley</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Accesories</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Backpacks</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Wallets</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Laptops Bags</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Belts</span></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/*level0-wrapper2*/}
                                                <div className="nav-add">
                                                    <div className="push_item">
                                                        <div className="push_img"><a href="#"><img alt="sunglass" src="img/menu_man_sunglass.png" /></a></div>
                                                    </div>
                                                    <div className="push_item">
                                                        <div className="push_img"><a href="#"><img alt="watch" src="img/menu_man_watch.png" /></a></div>
                                                    </div>
                                                    <div className="push_item">
                                                        <div className="push_img"><a href="#"><img alt="jeans" src="img/menu_man_jeans.png" /></a></div>
                                                    </div>
                                                    <div className="push_item push_item_last">
                                                        <div className="push_img"><a href="#"><img alt="shoes" src="img/menu_man_shoes.png" /></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mega-menu"><a href="grid.html" className="level-top"><span>Electronics</span></a>
                                    <div style={{ left: 0, display: 'none' }} className="level0-wrapper dropdown-6col">
                                        <div className="container">
                                            <div className="level0-wrapper2">
                                                <div className="nav-block nav-block-center">
                                                    <ul className="level0">
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Mobiles</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Samsung</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Nokia</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>IPhone</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Sony</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html" className><span>Accesories</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Mobile Memory Cards</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Cases &amp; Covers</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Mobile Headphones</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Bluetooth Headsets</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Cameras</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Camcorders</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Point &amp; Shoot</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Digital SLR</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Camera Accesories</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Audio &amp; Video</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>MP3 Players</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>IPods</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Speakers</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Video Players</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Computer</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>External Hard Disk</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Pendrives</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Headphones</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>PC Components</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Appliances</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Vaccum Cleaners</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Indoor Lighting</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Kitchen Tools</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Water Purifier</span></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/*level0-wrapper2*/}
                                            <div className="nav-add">
                                                <div className="push_item">
                                                    <div className="push_img"><a href="#"><img alt="phone" src="img/menu_ele_phone.png" /></a></div>
                                                </div>
                                                <div className="push_item">
                                                    <div className="push_img"><a href="#"><img alt="camera" src="img/menu_ele_camera.png" /></a></div>
                                                </div>
                                                <div className="push_item">
                                                    <div className="push_img"><a href="#"><img alt="ipod" src="img/menu_ele_ipod.png" /></a></div>
                                                </div>
                                                <div className="push_item push_item_last">
                                                    <div className="push_img"><a href="#"><img alt="laptop" src="img/menu_ele_laptop.png" /></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mega-menu"><a className="level-top" href="grid.html"><span>Furniture</span></a>
                                    <div style={{ left: 0, display: 'none' }} className="level0-wrapper dropdown-6col">
                                        <div className="container">
                                            <div className="level0-wrapper2">
                                                <div className="nav-block nav-block-center grid12-8 itemgrid itemgrid-4col">
                                                    <ul className="level0">
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Living Room</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Racks &amp; Cabinets</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Sofas</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Chairs</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Tables</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html" className><span>Dining &amp; Bar</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Dining Table Sets</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Serving Trolleys</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Bar Counters</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Dining Cabinets</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Bedroom</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Beds</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Chest of Drawers</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid-2.html"><span>Wardrobes &amp; Almirahs</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Nightstands</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="level1 nav-6-1 parent item"><a href="grid.html"><span>Kitchen</span></a>
                                                            <ul className="level1">
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Kitchen Racks</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Kitchen Fillings</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Wall Units</span></a></li>
                                                                <li className="level2 nav-6-1-1"><a href="grid.html"><span>Benches &amp; Stools</span></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/*nav-block nav-block-center*/}
                                                <div className="nav-block nav-block-right std grid12-4"><a href="#"><img src="img/menu_furniture_2.png" alt="furniture" /></a> </div>
                                                {/*nav-block nav-block-right std grid12-4*/} </div>
                                        </div>
                                        {/*level0-wrapper2*/}
                                    </div>
                                </li>
                                <li className="level0 nav-8 level-top"><a href="grid.html" className="level-top"><span>Kids</span></a></li>
                                <li className="nav-custom-link mega-menu"> <a className="level-top" href="#"><span>Custom</span></a>
                                    <div className="level0-wrapper custom-menu" style={{ left: 0, display: 'none' }}>
                                        <div className="container">
                                            <div className="header-nav-dropdown-wrapper clearer">
                                                <div className="grid12-5">
                                                    <div className="custom_img"><a href="#"><img src="img/custom-img1.jpg" alt="custom img1" /></a></div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                                                    <button className="learn_more_btn" title="Add to Cart" type="button"><span>Learn More</span></button>
                                                </div>
                                                <div className="grid12-5">
                                                    <div className="custom_img"><a href="#"><img src="img/custom-img2.jpg" alt="custom img2" /></a></div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                                                    <button className="learn_more_btn" title="Add to Cart" type="button"><span>Learn More</span></button>
                                                </div>
                                                <div className="grid12-5">
                                                    <div className="custom_img"><a href="#"><img src="img/custom-img3.jpg" alt="custom img3" /></a></div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                                                    <button className="learn_more_btn" title="Add to Cart" type="button"><span>Learn More</span></button>
                                                </div>
                                                <div className="grid12-5">
                                                    <div className="custom_img"><a href="#"><img src="img/custom-img4.jpg" alt="custom img4" /></a></div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                                                    <button className="learn_more_btn" title="Add to Cart" type="button"><span>Learn More</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="menu_top">
                                <div className="top-cart-contain pull-right">
                                    {/* Top Cart */}
                                    <div className="mini-cart">
                                        <div data-toggle="dropdown" data-hover="dropdown" className="basket dropdown-toggle"><a href="#"><span className="hidden-xs">Shopping Cart (2)</span></a></div>
                                        <div>
                                            <div className="top-cart-content" style={{ display: 'none' }}>
                                                <div className="block-subtitle">
                                                    <div className="top-subtotal">2 items, <span className="price">$259.99</span> </div>
                                                    {/*top-subtotal*/}
                                                    <div className="pull-right">
                                                        <button title="View Cart" className="view-cart" type="button"><span>View Cart</span></button>
                                                    </div>
                                                    {/*pull-right*/}
                                                </div>
                                                {/*block-subtitle*/}
                                                <ul className="mini-products-list" id="cart-sidebar">
                                                    <li className="item first">
                                                        <div className="item-inner"><a className="product-image" title="Sample Product" href="#l"><img alt="Sample Product" src="products-img/product4.jpg" /></a>
                                                            <div className="product-details">
                                                                <div className="access"><a className="btn-remove1" title="Remove This Item" href="#">Remove</a> <a className="btn-edit" title="Edit item" href="#"><i className="icon-pencil" /><span className="hidden">Edit item</span></a> </div>
                                                                {/*access*/} <strong>1</strong> x <span className="price">$179.99</span>
                                                                <p className="product-name"><a href="product_detail.html">Sample Product</a></p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="item last">
                                                        <div className="item-inner"><a className="product-image" title="Sample Product" href="#"><img alt="Sample Product" src="products-img/product3.jpg" /></a>
                                                            <div className="product-details">
                                                                <div className="access"><a className="btn-remove1" title="Remove This Item" href="#">Remove</a> <a className="btn-edit" title="Edit item" href="#"><i className="icon-pencil" /><span className="hidden">Edit item</span></a> </div>
                                                                {/*access*/} <strong>1</strong> x <span className="price">$80.00</span>
                                                                <p className="product-name"><a href="product_detail.html">Sample Product</a></p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="actions">
                                                    <button className="btn-checkout" title="Checkout" type="button"><span>Checkout</span></button>
                                                </div>
                                                {/*actions*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Top Cart */}
                                    <div id="ajaxconfig_info" style={{ display: 'none' }}><a href="#/" />
                                        <input defaultValue type="hidden" />
                                        <input id="enable_module" defaultValue={1} type="hidden" />
                                        <input className="effect_to_cart" defaultValue={1} type="hidden" />
                                        <input className="title_shopping_cart" defaultValue="Go to shopping cart" type="hidden" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}
