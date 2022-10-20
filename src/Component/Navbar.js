import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
    const handleLogout = () => {
        localStorage.setItem("login",false);
        window.location.href('/login');
    }
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container row">
                    <div className="nav-search col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <Link to='/' className='nav-logo'>
                            <img src="./img/logo.png" alt="logo" />
                        </Link>
                        <input type="text" name='search' className='search' placeholder='Search' />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className='nav-menu col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'>
                        <ul>
                            <Link to='/' className="nav-item col-md-3"><i class="fa-solid fa-house"></i></Link>
                            <Link to='/shop' className="nav-item col-md-3"><i class="fa-solid fa-cart-plus"></i></Link>
                            <Link to='/news' className="nav-item col-md-3"><i class="fa-solid fa-newspaper"></i></Link>
                            <Link to='/profile' className="nav-item col-md-3"><i class="fa-solid fa-user"></i></Link>
                        </ul>
                    </div>
                    <div class="user col-xl-4 col-lg-4 col-md-0 col-sm-0 col-0">
                        <Link to='/profile' className='nav-profile'>
                            <img src="./img/profile.jpg" alt="" />
                        </Link>
                        <form action="" method="get" className='change-profile'>
                            <button type="button" class="btn btn-primary bn" data-toggle="modal" data-target="#exampleModal">Change User</button>
                        </form>
                        <i class="fa-solid fa-bell notification"></i>
                    </div>
                </div>
            </nav>




            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Change user</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="modal-user">
                                <Link to='/profile'>
                                    <img src="./img/profile.jpg" alt="" />
                                    <p>Ang LeangSrouy</p>
                                </Link>
                                {/* <Link to='/login'> */}
                                    <a href="" class="btn btn-danger" onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i> Log Out</a>
                                {/* </Link> */}
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa-solid fa-xmark"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
