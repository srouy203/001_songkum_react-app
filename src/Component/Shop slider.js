import React from 'react';
import './css/Shop slider.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../api/posts'
import axios from 'axios';

function Shopslider() {
  const [sliceImg, setSliceImg] = useState([]);

  useEffect(()=>{
    const fetchDate = async () => {
      try{ 
        const responseSlice = await api.get('/SliceImg');
        setSliceImg(responseSlice.data);
      }catch(err){
        if(err.responseSlice){
          console.log(err.responseProduct.data);
          console.log(err.responseProduct.status);
          console.log(err.responseProduct.headers);
        }else{
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchDate();
  },[])
  
  return (
    <>
    <div class="swiper">
            {/* <!-- Additional required wrapper --> */}
            <div class="swiper-wrapper">
              {/* <!-- Slides --> */}
              {
                sliceImg.map((item, index)=>{
                  return(
                    <div class="swiper-slide" key={index}><Link to='/shop-men'><img src={item.sliceImg}/></Link></div>
                  )
                })
              }
            </div>
            {/* <!-- If we need pagination --> */}
            <div class="swiper-pagination"></div>
          
            {/* <!-- If we need navigation buttons --> */}
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          
            {/* <!-- If we need scrollbar --> */}
            {/* <!-- <div class="swiper-scrollbar"></div> --> */}
    </div>
    </>
  )
}

export default Shopslider;
