"use client"
import { createStore } from "redux";
import { reducer } from "../reducer/reducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ["data"]
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
persistStore(store)

export {store}