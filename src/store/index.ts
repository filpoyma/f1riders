import createSagaMiddleware from 'redux-saga';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';

import rootSaga from './sagas';
import {rootReducer} from './reducers';

const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancer = __DEV__
  ? composeWithDevTools(applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, composeEnhancer);
// const store = createStore(persistedReducer, composeEnhancer);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export {store};
