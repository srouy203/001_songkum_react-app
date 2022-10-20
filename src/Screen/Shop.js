import React from 'react';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import ShopNavbar from '../Component/Shop navbar'
import Shopslider from '../Component/Shop slider';
import Shopmenu from '../Component/Shop menu-wrap';
import ShopMen from '../Component/Shop Men';
import ShopWomen from '../Component/Shop Woment';
import Shopfooter from '../Component/Shop footer';
function Shop() {
  return (
    <>
        <ShopNavbar/>
        <Shopslider />
        <Shopmenu/>
        <ShopMen/>
        <ShopWomen/>
        <Shopfooter/>

    </>
  )
}

export default Shop;
