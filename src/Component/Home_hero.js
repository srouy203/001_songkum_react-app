import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Home_hero.css';
import api from '../api/posts';

function Hero() {
  const [Menu, setMenu] = useState([]);
  const [Post, setPost] = useState([]);
  const [userActive, setUserActive] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const responseMenu = await api.get('/Menu');
        const responePost = await api.get('/Post');
        const responeUserActive = await api.get('/userActive');
        setMenu(responseMenu.data);
        setPost(responePost.data);
        setUserActive(responeUserActive.data);
      }catch(err){
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
      }else{
        console.log(`Error: ${err.message}`);
      }
    }
  }
  fetchData();
  },[])

  return (
    <>
      <div className="contain row">

        {/* left contain  */}
        <div className="left-contain col-xl-3 col-lg-3 col-md-0">
          <div className='profile-contain'>
            <Link to='/profile' className='profile-link'>
              <img src="https://via.placeholder.com/50x50" alt="profile" className='profile-img' />
              <p class="user-name">AngLeangSrouy</p>
            </Link>
          </div>
          {
            Menu.map((item,index)=>{
              return (
                <div className="profile-contain" key={index}>
                  <Link to='/profile'>
                    <i className={item.icon}></i>
                    <p className="menu-title">{item.title}</p>
                  </Link>
                </div>
              )
            })
          }
        </div>


        {/* mid contain */}
        <div className="mid-contain col-xl-6 col-lg-6 col-md-12">
          <div className="upload">
            <Link to='/profile'>
              <img src="./img/profile.jpg" alt="" />
            </Link>
            <input type="text" name="upload" id="" placeholder="Write About Yourself" data-toggle="modal" data-target="#exampleModal2" />
          </div>

          {/* post page */}
          {
            Post.map((item,index)=>{
              return(
                <div className="post" key={index}>
                  <div className="user-profile">
                    <Link to='/profile'>
                      <img src={item.userProfile} alt="" />
                      <p>{item.userName}</p>
                    </Link>
                  </div>
                  <div className="post-contain">
                    <p>{item.description}</p>
                    <img src={item.userImg} alt="" />
                  </div>
                  <div className="like-cmt">
                    <div className="like">
                      <i className="fa-solid fa-heart"></i>
                    </div>
                    <div className="like">
                      <i className="fa-solid fa-comment"></i>
                    </div>
                    <div className="like">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>


        {/* right contain */}
        <div className="right-contain col-xl-3 col-lg-3 col-md-0">
          <p className="title">All user in Song Kum-សង្គម</p>
          {
            userActive.map((item,index)=>{
              return(
                <div className="all-users" key={index}>
                  <Link to='/profile'>
                    <img src={item.userProfile} alt="profile" />
                    <p className="user-name">{item.userName}</p>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>


      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Upload</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="user1">
                  <img src="./img/profile.jpg" alt=""/>
                  <p>Ang LeangSrouy</p>
              </div>
              <form action="" method="post">
                  <input type="text" name="caption" className="caption" placeholder="What you want to say.."/>
                  <input type="file" name="file" className="photo" placeholder="Choose Photo"/>
              <div class="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal"><i class="fa-solid fa-xmark"></i> Close</button>
                    <button type="submit" className="btn btn-primary"><i class="fa-solid fa-upload"></i> Post</button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Hero;
