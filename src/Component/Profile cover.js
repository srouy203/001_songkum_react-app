import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './css/Profile cover.css';
import api from '../api/posts'
function Profilecover() {
    const [profile, setProfile] = useState([]);
        
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const responseProfile = await api.get('/ProfileCover');
                setProfile(responseProfile.data);
            }catch(err){
                if(err.responseProfile){
                    console.log(err.responseProfile.data);
                    console.log(err.responseProfile.status);
                    console.log(err.responseProfile.headers);
                }else{
                    console.log(`Error: ${err.massage}`);
                }
            }
        }   
        fetchData();
    },[])

    return (
        <>
            <div class="container">
                {
                    profile.map((item, index) => {
                        return (
                            <div class="profile-page" key={index}>
                                <div class="cover">
                                    <img src={item.cover} alt=""/>
                                </div>
                                <div class="profile">
                                    <img src={item.profile} alt="" />
                                    <p>{item.username}</p>
                                    <button type="submit" class="btn btn-danger" name="btn-edit-pf" data-toggle="modal" data-target="#exampleModalCenter">
                                        <i class="fa-solid fa-user-pen"></i> Edit profile
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            {/* <!-- Edit Profile Modal --> */}
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Edit Profile</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="" method="post">
                                <p>Update cover</p>
                                <input type="file" name="cover" id="" class="form-control" />
                                <p>Update profile</p>
                                <input type="file" name="cover" id="" class="form-control" />
                            </form>
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
    );
}

export default Profilecover;
