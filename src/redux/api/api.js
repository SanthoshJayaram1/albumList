import axios from 'axios'

// base url
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

// these are the get,post,put and delete request functions used inside the Sagamiddleware 
// here data we get from axios is by default converted into Json, no need to convert them separately.
export const getAlbumAPI = async () => axios.get('/albums');
export const createAlbumAPI = async (user) => axios.post(`/albums`, user);
export const updateAlbumAPI = async (user) => axios.put(`/albums/${user.id}`, user);
export const deleteAlbumByIdAPI = async (id) => axios.delete(`/albums/${id}`);