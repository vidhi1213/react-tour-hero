import {createStore} from 'redux';
 import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist:['heroes'],
    
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
 
 
 export  const store = createStore(persistedReducer,composeWithDevTools());
 export const persistor = persistStore(store)
   
