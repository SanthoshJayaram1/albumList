import {createSlice} from '@reduxjs/toolkit';

const albumSlice=createSlice({
    name:"albums",
    initialState:{albums:[],isfetched:false},
    reducers:{
        getAlbumSlice: (state) => {
            return state
        },
        // setAlbum reducer function for setting initial data from fetching data through API which will be called in Saga Middleware
        setAlbumSlice:(state,action)=>{
            if(!state.isfetched){
                state.albums=action.payload;
                state.isfetched=true;
                return state;
            }else{
                return state;
            }
        },
        addAlbumSlice: (state) => {
            return state;
        },
        // addedAlbumSlice reducer function for adding new album which will be called in Saga Middleware
        addedAlbumSlice: (state, action) => {
            state.albums=[action.payload,...state.albums];
            console.log(state.albums)
            return state
        },
        editAlbumSlice: (state) => {
            return state
        },
        // editedAlbumSlice reducer function for udating album which will be called in Saga Middleware
        editedAlbumSlice: (state, action) => {
            state.albums = state.albums.map(album => album.id === action.payload.id ? action.payload : album);
            return state
        },
        deleteAlbumSlice: (state) => {
            return state
        },
        // deletedAlbumSlice reducer function for deleting album which will be called in Saga Middleware
        deletedAlbumSlice: (state, action) => {
            state.albums= state.albums.filter(i => i.id !== action.payload)
            return state
        }
    }
});



export const albumSelector=(state)=>{return(state.albums.albums)};
export const isLoadingSelector=(state)=>{return(state.albums.isLoading)};
export const{getAlbumSlice,addAlbumSlice,editAlbumSlice,deleteAlbumSlice,setAlbumSlice,addedAlbumSlice,deletedAlbumSlice,editedAlbumSlice}=albumSlice.actions;
export default albumSlice.reducer;

