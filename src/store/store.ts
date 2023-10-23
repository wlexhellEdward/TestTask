import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer, persistStore, PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import centerSlice from './reducers/centerSlice/centerSlice';
import currentStatusSlice from './reducers/currentStatus/currentStatusSlice';
import favoriteItemsSlice from './reducers/favoriteItemsSlice/favoriteItemsSlice';
import mapSlice from './reducers/mapSlice/mapSlice';
import searchSlice from './reducers/searchItemsSlice/searchItemsSlice'
import userSlice from './reducers/userSlice/userSlice';
import errorSlice from './reducers/errorSlice/errorSlice';


const rootReducer = combineReducers({
    currentStatus: currentStatusSlice,
    errorSlice: errorSlice,
    userSlice: userSlice,
    currentPosition: centerSlice,
    searchSlice: searchSlice,
    favoriteItems: favoriteItemsSlice,
    map: mapSlice
})


const persistConfig = {
    key: 'root',
    whitelist: ['favoriteItems'],
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)




export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store)

export type AppStore = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
