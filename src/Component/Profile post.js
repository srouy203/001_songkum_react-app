import React, { useEffect, useState } from 'react';
import './css/Profile post.css';
import {Link} from 'react-router-dom';
import api from '../api/posts';

function Profilepost() {
  const allPicture = [
    {
      "img1" : "./img/2.PNG",
      "img2" : "./img/2.PNG",
      "img3" : "./img/2.PNG",
    },
    {
      "img1" : "./img/1.JPG",
      "img2" : "./img/1.JPG",
      "img3" : "./img/1.JPG",
    },
    {
      "img1" : "./img/2.PNG",
      "img2" : "./img/2.PNG",
      "img3" : "./img/2.PNG",
    },
  ]
  const [Post, setPost] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const responePost = await api.get('/Post');
        setPost(responePost.data);
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
      <div className="container">
        <div className="row profile-post-contain">
          <div className="col-xl-4 col-lg-4 col-md-12 all-pic">
            <p>All picture</p>
            {
              allPicture.map((item,index)=>{
                return(
                  <div class="pic" key={index}>
                    <img src={item.img1} alt="" />
                    <img src={item.img2} alt="" />
                    <img src={item.img3} alt="" />
                  </div>
                )
              })
            }
          </div>

          {/* ===============post wrap=================== */}
          <div className="col-xl-8 col-lg-8 col-md-12 profile-post">
            {
              Post.map((item,index)=>{
                return(
                  <div class="post-wrap" key={index}>
                    <div class="user-profile">
                      <Link to='/profile'>
                        <img src={item.userProfile} alt="" />
                        <p>{item.userName}</p>
                        <button type="submit" data-toggle="modal" data-target="#exampleModalEditPost"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                      </Link>
                    </div>
                    <div class="post-contain">
                      <p>{item.description}</p>
                      <img src={item.userImg} alt="" />
                    </div>
                    <div class="like-cmt">
                      <div class="like">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                      <div class="like">
                        <i class="fa-solid fa-comment"></i>
                      </div>
                      <div class="like">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
        </div>
      </div>


{/* <!-- Edit Post Modal --> */}
<div class="modal fade" id="exampleModalEditPost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit post</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-edit-post">
        <input type="text" name="caption" class="caption" placeholder="Edit text..."/>
        <img src="./img/2.PNG" alt="" />
        <input type="file" name="file" class="photo" placeholder="Choose Photo"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa-solid fa-xmark"></i> Close</button>
        <form action="" method="get">
              <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Save changes</button>
        </form>
        
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Profilepost;
