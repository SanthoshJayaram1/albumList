
import './App.css';
import AddAlbum from './components/addAlbum';
import AlbumsList from './components/albumList';
import UpdateAlbum from './components/updateAlbum';
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom';


function App() {
  const router=createRoutesFromElements(<>
            <Route path="/" element={<AlbumsList/>} />
            <Route path="/add-album" element={<AddAlbum/>} />
            <Route path="/update-album" element={<UpdateAlbum/>} />
  </>);
const routes=createBrowserRouter(router);
  return (
   <>
    <RouterProvider router={routes}/>
   </>
  );
}

export default App;
