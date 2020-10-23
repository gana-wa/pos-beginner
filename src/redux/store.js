import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rpm from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from "redux-persist/lib/storage/session";

import indexReducer from './reducers/index';

const persistConfig = {
   key: "root",
   storage: sessionStorage,
   whitelist: ['auth'], //only auth will persisted
};

const persistedReducer = persistReducer(persistConfig, indexReducer);

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);

// const store = createStore(indexReducer, enhancers);
const store = createStore(persistedReducer, enhancers);
const persistor = persistStore(store);

export { store, persistor }