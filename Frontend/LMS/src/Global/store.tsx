import { configureStore } from "@reduxjs/toolkit";
import auth from "./Slice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, auth);

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)