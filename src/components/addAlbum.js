import React from 'react'
import Navbar from './navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addAlbumSlice} from '../redux/slices/albumSlice';

function AddAlbum() {
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  let idRef=React.createRef();
  let titleRef=React.createRef();

  const getAlbumFormData = (e) => {
    e.preventDefault();
    const userId = idRef.current.value;
    const title = titleRef.current.value;
    console.log(userId+" "+title);
    const album={userId:Number(userId),id:Number(userId),title}
    dispatch(addAlbumSlice(album));
    idRef.current.value=null;
    titleRef.current.value="";
    navigate("/");
  }

  return (
    <div>
      <Navbar path="/" page="Home"/>
      <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h4>Enter New Album Details</h4>
          <div className='inp-container'>
            Enter User Id :
            <input type="number" ref={idRef}/>
          </div>
          <div className='inp-container'>
            Enter Album Title :
            <input type="text" ref={titleRef}/>
          </div>
          <div>
            <Link to="/"><button onClick={getAlbumFormData}>Add To List</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAlbum;