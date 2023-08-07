import React from 'react';
import Navbar from './navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { editAlbumSlice } from '../redux/slices/albumSlice';

function UpdateAlbum() {

  // by using useLocation hook we can destructure props which are sent through React-Router's Link Component ( as this way,,,state={{album:props.album}} )
  const location=useLocation();
  const {album}=location.state;
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  

  let idRef=React.createRef();
  let titleRef=React.createRef();
  
    const getUpdateData = (e) => {
      
      e.preventDefault();
       let updateid =idRef.current.value;
       let updatetitle=titleRef.current.value;
       if (updatetitle === '') {
        updatetitle = album.title;
      }
      if (updateid === '') {
        updateid = album.userId;
      }
      dispatch(editAlbumSlice({userId:Number(updateid),id:album.id,title:updatetitle}));
      navigate("/");
    }

  return (
    <div>
      <Navbar path="/" page="Home"/>
      <div className='update-album'>
        <div className='form-container'>
          <h4>Title : {album.title}</h4>
          <div className='inp-container'>
            Enter New Title :
            <input type="text" id='title-inp' ref={titleRef} ></input>
          </div>

          <h4>User Id : {album.id}</h4>
          <div className='inp-container'>
            Enter New UserId :
            <input type="number" id='userid-inp' ref={idRef}></input>
          </div>
          <Link to='/'><button type='submit' onClick={getUpdateData}>Save</button></Link>
        </div>
      </div>
    </div>
  )
}

export default UpdateAlbum