import React from 'react';
import {Link} from 'react-router-dom'
import './css/Shop menu-wrap.css';

function Shopmenu() {
  return (
    <>
        <div class="container">
            <div class="row menu-wrap">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 profile">
                    <Link to='/shop-men'><img src="./img/men.png" alt=""/></Link>
                    <button><Link to='/shop-men'>Men Collections</Link></button>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 profile">
                    <Link to='/shop-women'><img src="./img/women.png" alt=""/></Link>
                    <button><Link to='/shop-women'>Women Collections</Link></button>         
                </div>
            </div>
        </div>
    </>
  )
}

export default Shopmenu;
