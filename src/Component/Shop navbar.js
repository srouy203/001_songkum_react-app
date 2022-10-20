import React, {useState}from 'react';
import {Link} from 'react-router-dom';
import './css/Shop navbar.css';
function ShopNavbar() {
  const [click, setClick] = useState(false);

  const iconChange = () => {
    setClick(!click);
  }
  const closeMobile = () => {
    setClick(false);
  }
  return (
    <>
      <div className="shop-nav">
        <div className="shop-nav-con row">
          <div class="shop-nav-icon" onClick={iconChange}>
            <i class={click ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
          </div>

          <ul className={click ? 'shop-nav-menu active col-xl-5 col-lg-5 col-md-12' : 'shop-nav-menu col-xl-5 col-lg-5 col-md-12'}>
            <Link to='/shop' className='shop-nav-list' onClick={closeMobile}>
              <li>Home</li>
            </Link>
            <Link to='/shop-men' className='shop-nav-list' onClick={closeMobile}>
              <li>Men</li>
            </Link>
            <Link to='/shop-women' className='shop-nav-list' onClick={closeMobile}>
              <li>Women</li>
            </Link>
            <Link to='/shop-men' className='shop-nav-list' onClick={closeMobile}>
              <li>Kid</li>
            </Link>
          </ul>

          <div className="shop-nav-logo col-xl-2 col-lg-2 col-md-12">
            <Link to='/shop' className='logo'><img src="./img/logo.png" alt="logo"/></Link>
          </div>

          <div className="shop-nav-search col-xl-5 col-lg-5 col-md-12">
            <input type="text" placeholder="Search"/>
            <Link to='' className='seach-item'><i class="fa-solid fa-comment-dots"></i></Link>
            <Link to='' className='seach-item'><i class="fa-solid fa-cart-arrow-down"></i></Link>
            <Link to='' className='seach-item'><i class="fa-solid fa-gear"></i></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopNavbar;
