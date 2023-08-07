import React from 'react'
import { Link } from "react-router-dom";
import { deleteAlbumSlice } from '../redux/slices/albumSlice';
import { useDispatch } from 'react-redux';


//get album from album list and show using html css and js
const List = (props) => {
  const dispatch=useDispatch();
  return (
    <div className='list'>
      <h3>{props.album.title}</h3>
      <div className='button-group'>
        <Link to="/update-album" state={{album:props.album}}><button className="update-btn">Update</button></Link>
        <button className='delete-btn' onClick={() =>{dispatch(deleteAlbumSlice(props.album.id))}}>Delete</button>
      </div>
    </div>
  )
}

export default List