import React from 'react';
import './css/Shop footer.css';
function Shopfooter() {
    return (
        <>
            <footer>
                <div class="row">
                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-obj">
                        <h4>SongKum App</h4>
                        <i class="fa-solid fa-mobile-screen"><a href=""> Adriod app</a></i><br />
                        <i class="fa-solid fa-mobile-screen"><a href=""> IOS app</a></i>
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-obj">
                        <h4>SongKum Socail Media</h4>
                        <i class="fa-brands fa-facebook"><a href=""> Facebook</a></i><br />
                        <i class="fa-brands fa-youtube"><a href=""> Youtube</a></i><br />
                        <i class="fa-brands fa-tiktok"><a href=""> Tik Tok</a></i><br />
                        <i class="fa-brands fa-instagram"><a href=""> Instagram</a></i>
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-obj">
                        <h4>SongKum Service</h4>
                        <i class="fa-solid fa-address-card"><a href=""> Adress Card</a></i><br />
                        <i class="fa-solid fa-bag-shopping"><a href="">Shopping</a></i>
                    </div>
                    <div class="col-xl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-obj">
                        <h4>SongKum Adress</h4>
                        <i class="fa-solid fa-phone"><a href="#">081 473 437</a></i><br />
                        <i class="fa-solid fa-location-dot"><a href="#">Near my neigbors hourse #2 raod</a></i>
                    </div>
                </div>
            </footer>
            <div class="bottom">
                <p>Powered By SungKum @2022 Ang LeangSrouy</p>
            </div>


        </>
    )
}

export default Shopfooter;
