import React from 'react';
import './css/Shop Men.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../api/posts';
import axios from 'axios';
function ShopMen() {
const [product, setProduct] = useState([]);

useEffect(()=>{
    const fetchData = async () => {
        try{
            const responseProduct = await api.get('/menProduct');
            setProduct(responseProduct.data);
        }catch(err){
            if(err.responseProduct){
                console.log(err.responseProduct.data);
                console.log(err.responseProduct.status);
                console.log(err.responseProduct.headers);
            }else{
                console.log(`Error: ${err.message}`);
            }
        }
    }
    fetchData();

},[])


  return (
    <>
    <div className="container">
        <div class="row sell-wrap">
            {
                product.map((item,index)=>{
                    return(
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 sell-post" id='index' key={index}>
                        <Link to='/shop-detail'>
                            <img src={item.img} alt=""/>
                        </Link>
                        <p class="price">{item.price} <span>{item.discount}</span></p>
                        <p class="title">{item.title} </p>
                    </div>
                    )
                })
            }

        </div>
    </div>
      
    </>
  )
}

export default ShopMen;
