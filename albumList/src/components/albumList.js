import React from 'react'
import Navbar from './navbar'
import List from './list';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { albumSelector } from '../redux/slices/albumSlice';
import { getAlbumSlice } from '../redux/slices/albumSlice';

function AlbumsList() {

  const albums=useSelector(albumSelector);
  const dispatch=useDispatch();

  // this will fetch and update state for every dispatch  and updates state inside app
  useEffect(()=>{dispatch(getAlbumSlice())},[dispatch]);

  return (
    <>
      <Navbar path="/add-album" page="addAlbum"/>
      <div className='albums-list'>
        {albums?albums.map((album) => <List album={album} key={album.id} />):undefined}
      </div>
    </>
  )
}

export default AlbumsList;