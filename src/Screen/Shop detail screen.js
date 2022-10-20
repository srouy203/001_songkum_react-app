import React from 'react';
import ShopNavbar from '../Component/Shop navbar';
import Shopfooter from '../Component/Shop footer';
import Shopselldetail from '../Component/Shop sell detail';
import ShopMen from '../Component/Shop Men';
import ShopWomen from '../Component/Shop Woment';
function Shopdetail() {
  return (
    <>
      <ShopNavbar/>
      <Shopselldetail/>
      <div className="container">
        <h2>Similar Product</h2>
      </div>
      <ShopWomen/>
      <ShopMen/>
      <Shopfooter/>
    </>
  )
}

export default Shopdetail;
