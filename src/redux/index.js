// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';

import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

// # Redux toolkit
const store = configureStore({
    reducer: rootReducers,
    middleware,
});

// # Redux
// const store = createStore(
//     rootReducers,
//     composeWithDevTools(applyMiddleware(sagaMiddleware))
// );

sagaMiddleware.run(rootSaga);

export default store;