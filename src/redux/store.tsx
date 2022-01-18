import { createStore } from "redux";
import rootReducer, { RootState } from "./reducers";
import {persistStore, persistReducer} from 'redux-persist';
import  storage  from "redux-persist/lib/storage";
import { PersistPartial } from "redux-persist/es/persistReducer";

const persistConfig = {
    key : 'whatsapp-contacts',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore<RootState & PersistPartial, any, any, any>(persistedReducer);

export const persistor = persistStore(store)
export default store;