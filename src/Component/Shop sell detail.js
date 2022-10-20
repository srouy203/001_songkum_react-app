import React,{useState} from 'react';
import './css/Shop sell detail.css';
import { useEffect } from 'react';
import api from '../api/posts';

function Shopselldetail() {
    const [click, setClick]=useState(true);
    const [iconShare, setIconShare] = useState(true);
    const [iconMark, setIconMark] = useState(true);
    const [qty, setQty]=useState(1);
    const [price, setPrice]=useState(8.00);
    const [totalPrice, setTotalPrice] = useState(8.00);

    const handleClick = (item,index) =>{
        setClick(!click);
    }
    const handleClickIcon = () => {
        setIconShare(!iconShare);
    }
    const handleClickIconMark = () => {
        setIconMark(!iconMark);
    }
    const plus = () => {
        setQty(qty + 1);
        setTotalPrice(totalPrice + price);
    }
    const minus = () => {
        if(qty>0){
            setQty(qty -1);
            setTotalPrice(totalPrice - price);
        }
    }
const color = ["./img/order1.jpg", "./img/order1.jpg", "./img/order1.jpg", "./img/order1.jpg"];
    return (
        <>
            {/* <!-- ======================container=============== --> */}
            <div class="container">
                <div class="row order-wrap">

                    <div class="col-xxl-6 detail-img">
                        <img src="./img/orderLady.jpg" alt="" />
                    </div>

                    <div class="col-xxl-6 detail-order">
                        <div class="price">
                            <h3>New in</h3>
                            <a href="#" onClick={handleClickIconMark}>
                                <i className={iconMark ? "fa-solid fa-bookmark icon" : "fa-solid fa-bookmark icon active"}></i>
                            </a>
                            <a href="#" onClick={handleClickIcon}>
                                <i className={iconShare ? "fa-solid fa-share icon" : "fa-solid fa-share icon active"}></i>
                            </a>
                            <p>Song Kum Men T-Sirt</p>
                            <p>{totalPrice} $<del>10.00$</del><span> 20%</span></p>
                        </div>

                        <div class="color">
                            <h3>Colors available</h3>
                            {
                                color.map((item,index)=>{
                                    return(
                                    <div key={index}>
                                        <img
                                            src={item} 
                                            className={click ? "img" : "img active"} 
                                            onClick={()=>handleClick(item,index)}/>
                                    </div>
                                    )
                                })
                            }
                        </div>

                        <div class="size">
                            <h3>Size</h3>
                            <div class="form-floating">
                                <select class="form-select">
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                    <option value="xl">XL</option>
                                    <option value="xxl">XXL</option>
                                </select>
                            </div>
                            <p><small>Model is 174 cm tall / 60 kg weight and is wearing size M.</small> </p>
                        </div>

                        <h3>Qty</h3>
                        <div class="qty">
                            <button 
                                type='button'
                                onClick={minus}>
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <p>{qty}</p>
                            <button 
                                type='button'
                                onClick={plus}>
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>

                        <div class="bag">
                            <a href="#"><input type="submit" value="Add to bag" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Shopselldetail
