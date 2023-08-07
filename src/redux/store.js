import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/rootSaga";
import albumReducer  from "./slices/albumSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, albumReducer)
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        albums:persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})
// this rootSaga function runs in the background and watch all the dispatches hapening from the store 
sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store)
export default store;